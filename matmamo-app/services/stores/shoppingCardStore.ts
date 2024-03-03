import { IShoppingCardState } from "@/interfaces/IShoppingCard";
import { create } from "zustand";

const useShoppingCardStore = create<IShoppingCardState>()((set) => ({
  id: Math.random() * 1000,
  shoppingCardList: [],
  name: `Handleliste`,

  // Legge til handleliste
  addToShoppingCard: (shoppingList) =>
    set((state) => {
      return {
        ...state,
        shoppingCardList: [...state.shoppingCardList, shoppingList],
      };
    }),

  // Fjerne handleliste
  removeFromShoppingCard: (shoppingList) =>
    set((state) => {
      return {
        ...state,
        shoppingCardList: state.shoppingCardList.filter(
          (list) => list.id !== shoppingList.id
        ),
      };
    }),
}));

export default useShoppingCardStore;
