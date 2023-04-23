import {BookState} from "./book.reducer";
import {createSelector} from "@ngrx/store";
import {Book} from "../../model/book.model";

export const selectBooks = (state: BookState) => state.books;

export const selectBookByBookId = (bookId: number) =>
  createSelector(selectBooks, (books: Book[]) => books.find(b => b.bookId == bookId));
