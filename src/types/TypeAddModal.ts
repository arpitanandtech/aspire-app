export type TypeAddModal = {
  openModal:boolean;
  setOpenModal:(_:boolean) => void;
};

export type TypeAddCardModal = {
  cardNumber:string;
  cvv:string;
  expiry:string;
  name:string
};