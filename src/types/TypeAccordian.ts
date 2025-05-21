import { TypeCard } from "./TypeDebitCards";


export type TypeAccordian = {
  handleToggle: (_:number) => void;
   active: number | null;
   header:string; 
   id: string;
   icon:string;
   transaction: TypeCard[] | []
};