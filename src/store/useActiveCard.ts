import { create } from "zustand";
import { persist } from "zustand/middleware";
import DATA from "../config/data";
import TRANSACTION from "../config/transaction";
import { TypeAddCardModal } from "../types/TypeAddModal";
import { TypeData } from "../types/TypeDebitCards";

export type TypeStateCard = {
  selectedCard: number;
  data: TypeData;
  setselectedCard: (_: number) => void;
  addCard: (card: TypeAddCardModal) => void;
  updateCard:(_:number) => void;
  updateCardShowHide:(_:number) => void;
};

const useActiveCard = create<TypeStateCard>()(
  persist(
    (set) => ({
      selectedCard: 0,
      data: DATA,
      updateCard : (selectedCard:number) => set((state) => {
        const updateState = {...state};
        updateState.data.cards[selectedCard].isFreeze = !updateState.data.cards[selectedCard].isFreeze;

        return updateState;
      }),
      updateCardShowHide : (selectedCard:number) => set((state) => {
        const updateState = {...state};
        updateState.data.cards[selectedCard].isShow = !updateState.data.cards[selectedCard].isShow;

        return updateState;
      }),
      setselectedCard: (value: number) =>
        set(() => ({ selectedCard: value })),
      addCard: (card: TypeAddCardModal) =>
        set((state) => ({
          data: {
            ...state.data,
            cards: [
              ...state.data.cards,
              {
                cardNumber: card.cardNumber,
                expiry: card.expiry,
                cvv: card.cvv,
                isFreeze:false,
                isShow:false,
                cardDetails: {
                  name: card?.name,
                  dob: "12 Jul 1995",
                  pan: "ARPTA1234K",
                },
                transaction: TRANSACTION,
              },
            ],
          },
        })),
    }),
    {
      name: "active-card-store", // key in localStorage
      partialize: (state) => ({ selectedCard: state.selectedCard, data: state.data }),
    }
  )
);

export default useActiveCard;
