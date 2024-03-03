import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useShoppingListStore = create<IShoppingListState>()((set) => ({
  shoppingList: [],
  shoppingCardList: [],
  productCount: 0,
  id: Math.random() * 1000,

  // Legge til produkt i handlelisten
  addToShoppingList: (product: IProduct) =>
    set((state) => {
      const hasProduct = state.shoppingList.find((p) => p.id === product.id);

      return {
        ...state,
        productCount: state.productCount++,
        shoppingList: hasProduct
          ? state.shoppingList.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            )
          : [...state.shoppingList, { ...product, quantity: 1 }],
      };
    }),

  // Fjerne produkt fra handlelisten
  removeFromShoppingList: (product: IProduct) =>
    set((state) => {
      const updatedShoppingList = state.shoppingList.flatMap((p) =>
        p.id === product.id
          ? p.quantity > 1
            ? [{ ...p, quantity: p.quantity - 1 }]
            : []
          : [p]
      );

      return {
        ...state,
        productCount: state.productCount--,
        shoppingList: updatedShoppingList,
      };
    }),
}));

export default useShoppingListStore;
