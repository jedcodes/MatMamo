import { create } from "zustand";
import { IProduct } from "@/interfaces/IProduct";

export interface ProductListState {
  productList: Array<IProduct & { isSelected: boolean }>;
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
  toggleProduct: (productId: number) => void;
}

const useProductStore = create<ProductListState>((set) => ({
  productList: [],

  addProduct: (product) =>
    set((state) => {
      const hasProduct = state.productList.some((p) => p.id === product.id);
      if (hasProduct) {
        alert("Product already exists in the list");
        return state;
      } else {
        return {
          productList: [...state.productList, { ...product, isSelected: true }],
        };
      }
    }),

  removeProduct: (productId) =>
    set((state) => ({
      productList: state.productList.filter(
        (product) => product.id !== productId
      ),
    })),

  toggleProduct: (productId) =>
    set((state) => ({
      productList: state.productList.map((product) =>
        product.id === productId
          ? { ...product, isSelected: !product.isSelected }
          : product
      ),
    })),
}));

export default useProductStore;
