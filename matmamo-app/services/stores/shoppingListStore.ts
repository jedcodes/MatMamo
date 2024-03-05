import { create } from "zustand";
import { IProduct } from "@/interfaces/IProduct";
import { IShoppingListState } from "@/interfaces/IShoppingList";
import { Alert } from "react-native";

const useShoppingListStore = create<IShoppingListState>()((set) => ({
  shoppingList: [],
  productCount: 0,

  // Legge til produkt i handlelisten
  addToShoppingList: (product: IProduct) =>
    set((state) => {
      const hasProduct = state.shoppingList.find((p) => p.id === product.id);
      if (hasProduct) {
        alert("Produktet er allerede i handlelisten");
        return state;
      }
      return {
        ...state,
        productCount: state.productCount++,
        shoppingList: [...state.shoppingList, { ...product }],
      };
    }),

  // Fjerne produkt fra handlelisten
  removeFromShoppingList: (product: IProduct) =>
    set((state) => {
      const updatedShoppingList = state.shoppingList.filter(
        (p) => p.id !== product.id
      );

      return {
        ...state,
        productCount: state.productCount--,
        shoppingList: updatedShoppingList,
      };
    }),

  // Fjerne alle produkter fra handlelisten
  clearShoppingList: () =>
    set((state) => ({ ...state, shoppingList: [], productCount: 0 })),
}));

export default useShoppingListStore;
