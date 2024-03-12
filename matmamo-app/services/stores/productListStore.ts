import { create } from "zustand";
import { IProduct } from "@/interfaces/IProduct";

interface ShoppingList {
  id: number;
  title: string;
  productList: Array<IProduct & { isSelected: boolean }>;
}

interface ShoppingListState {
  shoppingList: ShoppingList;
  addProduct: (product: IProduct) => void;
  updateProduct: (
    productId: number,
    updatedProduct: Partial<IProduct & { isSelected: boolean }>
  ) => void;
  deleteProduct: (productId: number) => void;
}

const useShoppingListStore = create<ShoppingListState>((set) => ({
  shoppingList: {
    id: Math.random() * 9999,
    title: "My Shopping List",
    productList: [],
  },

  addProduct: (product) =>
    set((state) => ({
      shoppingList: {
        ...state.shoppingList,
        productList: [
          ...state.shoppingList.productList,
          { ...product, isSelected: false },
        ],
      },
    })),

  updateProduct: (productId, updatedProduct) =>
    set((state) => ({
      shoppingList: {
        ...state.shoppingList,
        productList: state.shoppingList.productList.map((product) =>
          product.id === productId ? { ...product, ...updatedProduct } : product
        ),
      },
    })),

  deleteProduct: (productId) =>
    set((state) => ({
      shoppingList: {
        ...state.shoppingList,
        productList: state.shoppingList.productList.filter(
          (product) => product.id !== productId
        ),
      },
    })),
}));

export default useShoppingListStore;
