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
  bookImageSrc:string;
}

export enum BookCategories {
  Autobiography= "Autobiography" ,
  Biography = "Biography",
  Essays  ="Essays",
  NonFictionNovel = "NonFictionNovel",
  SelfHelp = "SelfHelp",
  Classics = "Classics",
  CRIME ="CRIME",
  Fantasy ="Fantasy",
  Horror = "Horror",
  Humour ="Humour",
  Poetry ="Poetry",
  Plays ="Plays",
}
