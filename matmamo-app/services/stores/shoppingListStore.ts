import { create } from "zustand";
import { IProduct } from "@/interfaces/IProduct";

interface ShoppingList {
  id: number;
  title: string;
  productList: Array<IProduct & { isSelected: boolean }>;
}

interface ShoppingListState {
  shoppingLists: ShoppingList[];
  updateShoppingListTitle: (listId: number, title: string) => void;
  addProduct: (listId: number, product: IProduct) => void;
  updateProduct: (
    listId: number,
    productId: number,
    updatedProduct: Partial<IProduct & { isSelected: boolean }>
  ) => void;
  deleteProduct: (listId: number, productId: number) => void;
}

const useShoppingListStore = create<ShoppingListState>((set) => ({
  shoppingLists: [],

  updateShoppingListTitle(listId, title) {
    set((state) => ({
      shoppingLists: state.shoppingLists.map((list) =>
        list.id === listId ? { ...list, title } : list
      ),
    }));
  },

  addProduct: (listId, product) =>
    set((state) => ({
      shoppingLists: state.shoppingLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              productList: [
                ...list.productList,
                { ...product, isSelected: false },
              ],
            }
          : list
      ),
    })),

  updateProduct: (listId, productId, updatedProduct) =>
    set((state) => ({
      shoppingLists: state.shoppingLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              productList: list.productList.map((product) =>
                product.id === productId
                  ? { ...product, ...updatedProduct }
                  : product
              ),
            }
          : list
      ),
    })),

  deleteProduct: (listId, productId) =>
    set((state) => ({
      shoppingLists: state.shoppingLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              productList: list.productList.filter(
                (product) => product.id !== productId
              ),
            }
          : list
      ),
    })),
}));

export default useShoppingListStore;
