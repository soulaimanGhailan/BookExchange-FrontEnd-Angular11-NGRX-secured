import {User} from "./user.model";

export interface Book{
  bookId: number;
  bookTitle: string;
  author: string;
  bookStatus: string;
  bookType: string;
  bookCategory: string;
  description: string;
  editionNumber: number;
  addingDate:string;
  owner:User;
  isbn :string;
  imageContentBase64 : string ;
}
export interface CreatedBook {
  bookTitle: string | null;
  bookStatus: string | null;
  bookCategory: string | undefined;
  description: string | null;
  imageContentBase64 : string ;
}
export enum BookCategories {
  AUTOBIOGRAPHY= "AUTOBIOGRAPHY" ,
  BIOGRAPHY = "BIOGRAPHY",
  ESSAYS  ="ESSAYS",
  NONFICTIONNOVEL = "NONFICTIONNOVEL",
  SELFHELP = "SELFHELP",
  CLASSICS = "CLASSICS",
  CRIME ="CRIME",
  FANTASY ="FANTASY",
  HORROR = "HORROR",
  HUMOUR ="HUMOUR",
  POETRY ="POETRY",
  PLAYS ="PLAYS",


}

