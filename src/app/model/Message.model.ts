export interface Message {
  messageId : number ;
  messageContent : string ;
  sendingDate  : Date;
  senderId:string ;
  receiverId : string  ;
  status: ReceivingStatus ;
}
export enum ReceivingStatus{
  UNSEEN = "UNSEEN",
  SEEN = "SEEN"
}
