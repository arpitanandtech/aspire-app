export type TypeData = {
  availableBalance:number,
  cards: TypeCard[]
};

export type TypeCard = {
  cardNumber:string;
  expiry:string;
  cvv:string;
  isFreeze:boolean;
  isShow:boolean;
  cardDetails: TypeCardDetails,
  transaction: TypeTransaction[]
};

type TypeCardDetails = {
  name:string;
  dob:string;
  pan:string
}

export type TypeTransaction = {
  title:string;
  date:string;
  amount:string;
  type:string;
  icon:string;
  color:string;
  iconComp:string;
}