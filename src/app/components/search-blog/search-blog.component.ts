import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {
  GetBooksPageAction,
  SearchBookCategoryAction,
  SearchBookKeywordAction
} from "../../ngrx/booksBlogState/book.action";
import {BookService} from "../../services/book.service";
import {BookCategories} from "../../model/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit{

  searchFrom!:FormGroup;
  categories : string[] =  Object.values(BookCategories).map((color) => String(color));
  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();

  constructor(private fb : FormBuilder ,
              private router :Router ,
              private store : Store ,
              private bookService : BookService) {
  }
  ngOnInit() {
    this.searchFrom = this.fb.group({
      keyword : ''
    })

  }

  onSearch() {

    let name = this.searchFrom.value.keyword;
    if(name == ''){
      this.store.dispatch(new GetBooksPageAction({page : 0 , size : 2}));
    }else
       this.store.dispatch(new SearchBookKeywordAction({pageSize:{size:2 , page:0} , data:name}))
    this.router.navigateByUrl("/blog");
    this.eventEmitter.emit("Scroll Up");

  }


  onSearchByCategory(cat :string) {
      this.store.dispatch(new SearchBookCategoryAction({pageSize:{size:2 , page:0} , data:cat}));
    this.router.navigateByUrl("/blog");
    this.eventEmitter.emit("Scroll Up");
  }
}
