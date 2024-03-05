import { IProduct } from "./IProduct";

export interface IShoppingListState {
  shoppingList: IProduct[];
  productCount: number;
  addToShoppingList: (product: IProduct) => void;
  removeFromShoppingList: (product: IProduct) => void;
  clearShoppingList: () => void;
}
