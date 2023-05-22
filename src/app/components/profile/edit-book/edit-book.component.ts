import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book, BookCategories, CreatedBook} from "../../../model/book.model";
import {BookStateEnum, SingleBookState} from "../../../ngrx/singleBookState/SingleBook.reducer";
import {Store} from "@ngrx/store";
import {SaveBooksOfUserAction} from "../../../ngrx/booksBlogState/book.action";
import {SecurityService} from "../../../security/security.service";
import {Route, Router} from "@angular/router";
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  categories : string[] =  Object.values(BookCategories).map((color) => String(color));
  submitted : boolean = false;
  newBookForm!: FormGroup ;

  singleBookState$ : SingleBookState|null = null ;
  public bookEnum = BookStateEnum;
  constructor(private bookService :BookService  , private fb : FormBuilder ,
              private store : Store<any> , private securityService:SecurityService ,
              private router:Router) {
  }
  ngOnInit() {
    this.store.subscribe(s => {
      this.singleBookState$ = s.singleBook ;
      if(s.singleBook.dataState == this.bookEnum.EDIT){
        this.newBookForm = this.fb.group({
          title:[s.singleBook.book.bookTitle,Validators.required],
          bookDescription:[s.singleBook.book.description,Validators.required],
          category:[s.singleBook.book.bookCategory,Validators.required],
          bookPicture:[null],
        })
      }
    })

  }

  editBook(book : Book) {
    this.submitted =true  ;
    if(this.newBookForm.invalid) return ;
    const selectedImage : string = this.newBookForm.get('bookPicture')?.value;
    book = {...book ,
      bookTitle:this.newBookForm.get('title')?.value ,
      description:this.newBookForm.get('bookDescription')?.value ,
      bookCategory:this.newBookForm.get('category')?.value ,
      imageContentBase64:selectedImage
      }

      this.bookService.editBook(book).subscribe({
        next: data =>{
          if(this.securityService.profile.id){
            this.bookService.goToOwnerProfile(0  , this.securityService.profile.id);
          }
        }
      });



  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = () => {
      const base64String: string = reader.result as string;
      this.newBookForm.patchValue({
        bookPicture: base64String
      });
    };
    reader.readAsDataURL(file);
  }
}
