import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Book, BookCategories, CreatedBook} from "../../../model/book.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../../security/security.service";
import {Store} from "@ngrx/store";
import {BookService} from "../../../services/book.service";
import {SIZE_OWNED_BOOKS_PAGING} from "../../../model/user.model";
import {GetBooksOfUserAction, SaveBooksOfUserAction} from "../../../ngrx/booksBlogState/book.action";
import {GetProfileAction} from "../../../ngrx/UsersProfileState/UsersProfile.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  categories : string[] =  Object.values(BookCategories).map((color) => String(color));
  newBookForm! : FormGroup;
  submitted:boolean = false ;
  constructor(private fb :FormBuilder , private store : Store<any> ,
              public securityService : SecurityService ,
              public bookService  : BookService ,
              private router : Router) {
    }
    ngOnInit() {
        this.newBookForm = this.fb.group({
          title:['',Validators.required],
          bookDescription:['',Validators.required],
          category:['',Validators.required],
          bookPicture:[null,Validators.required],
        })
    }


  newBook() {
    this.submitted =true  ;
    if(this.newBookForm.invalid) return ;
    const selectedImage : string = this.newBookForm.get('bookPicture')?.value;
    const book : CreatedBook = {
        bookTitle:this.newBookForm.get('title')?.value ,
        description:this.newBookForm.get('bookDescription')?.value ,
        bookCategory:this.newBookForm.get('category')?.value ,
        bookStatus:null ,
        imageContentBase64 :selectedImage
    }
    // console.log(selectedImage)
    if(this.securityService.profile.id){
      this.store.dispatch(new SaveBooksOfUserAction({book : book , userId : this.securityService.profile.id}))
      this.router.navigateByUrl("/otherBook");
     }
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
