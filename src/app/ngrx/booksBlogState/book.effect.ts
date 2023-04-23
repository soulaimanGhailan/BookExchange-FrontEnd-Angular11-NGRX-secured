import {Injectable} from "@angular/core";
import {BookService} from "../../services/book.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {
  BookAction,
  BookActionType, GetBooksOfUserActionError, GetBooksOfUserActionSuccess,
  GetBooksPageActionError,
  GetBooksPageActionSuccess, SearchBookCategoryActionError, SearchBookCategoryActionSuccess,
  SearchBookKeywordActionError,
  SearchBookKeywordActionSuccess
} from "./book.action";
import {SearchType} from "../../model/payload.model";

@Injectable()
export class BooksBlogEffect{
  constructor(private bookService :BookService ,
              private effectActions : Actions ) {
  }
  getAllBooksBlogEffect:Observable<BookAction>=createEffect(
    ()=>this.effectActions.pipe(
          ofType(BookActionType.GET_BOOkS_PAGE),
          mergeMap((action : BookAction) => {
                return this.bookService.getAllBooksPage(action.payload).pipe(
                  mergeMap(books => {
                    return this.bookService.getPageInfo(action.payload.size).pipe(
                      map(pageinfo => {
                        return new GetBooksPageActionSuccess({data : books , pageInfo : pageinfo});
                      })
                    )
                  }),
                  catchError(err => of(new GetBooksPageActionError(err.message)))
                )
          })
    )
  );

  searchBookByKeyword:Observable<BookAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(BookActionType.SEARCH_BOOk_KEYWORD),
      mergeMap((action : BookAction) => {
        return this.bookService.searchBookKeyword(action.payload).pipe(
          mergeMap(books => {
            return this.bookService.getPageInfo(action.payload.pageSize.size , action.payload.data , SearchType.KEYWORD).pipe(
              map(pageinfo => {
                return new SearchBookKeywordActionSuccess({data : books , pageInfo : pageinfo});
              })
            )
          }),
          catchError(err => of(new SearchBookKeywordActionError(err.message)))
        )
      })
    )
  );

  searchBookByCategory:Observable<BookAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(BookActionType.SEARCH_BOOk_CATEGORY),
      mergeMap((action : BookAction) => {
        return this.bookService.searchBookByCategory(action.payload).pipe(
          mergeMap(books => {
            return this.bookService.getPageInfo(action.payload.pageSize.size , action.payload.data ,SearchType.CATEGORY).pipe(
              map(pageinfo => {
                return new SearchBookCategoryActionSuccess({data : books , pageInfo : pageinfo});
              })
            )
          }),
          catchError(err => of(new SearchBookCategoryActionError(err.message)))
        )
      })
    )
  );

  getBooksOfUser:Observable<BookAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(BookActionType.GET_BOOk_OfUSER),
      mergeMap((action : BookAction) => {
        return this.bookService.getBooksOfUser(action.payload).pipe(
          mergeMap(books => {
            return this.bookService.getPageInfoOfUserBooks(action.payload.pageSize.size , action.payload.data).pipe(
              map(pageInfo => {
                return new GetBooksOfUserActionSuccess({data : books , pageInfo : pageInfo});
              })
            )
          }),
          catchError(err => of(new GetBooksOfUserActionError(err.message)))
        )
      })
    )
  );

}

