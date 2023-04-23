import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FetchState} from "../../../ngrx/booksBlogState/book.reducer";
import {
  GetBooksOfUserAction,
  GetBooksPageAction,
  SearchBookCategoryAction,
  SearchBookKeywordAction
} from "../../../ngrx/booksBlogState/book.action";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() currentPage!: number ;
  @Input() payload! : string;
  @Input() totalPages! : number;
  @Input() fetchStatus!: FetchState;
  @Input() size! : number;
  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();

  constructor(private store : Store) {
  }
  ngOnInit() {

  }

  // we can use pattern strategy
  // payload = bookCategory | userId | title
  handlePage(i: number, fetchState: FetchState, payload : string ) {
    this.currentPage = i;
    this.eventEmitter.emit(this.currentPage);
    switch (fetchState){
      case FetchState.SearchByKeyWord :
        this.store.dispatch(new SearchBookKeywordAction({data : payload , pageSize:{size : this.size , page:i}})); break;
      case FetchState.SearchByCategory :
        this.store.dispatch(new SearchBookCategoryAction({data : payload , pageSize:{size : this.size , page:i}})); break;
      case FetchState.GetBooksOfUser :
        this.store.dispatch(new GetBooksOfUserAction({data : payload , pageSize:{size : this.size , page:i}})); break;

      default : this.store.dispatch(new GetBooksPageAction({page : i , size : this.size})); break;
    }


  }

  prevPage(fetchStatus: FetchState, payload : string ) {
    if(this.currentPage > 0)
      this.handlePage(this.currentPage - 1, fetchStatus, payload )
  }

  getArray(start:number, end:number) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }

  nextPage(totalPages: number, fetchStatus: FetchState, payload : string) {
    if(this.currentPage < totalPages -1)
      this.handlePage(this.currentPage + 1, fetchStatus,payload);
  }
}
