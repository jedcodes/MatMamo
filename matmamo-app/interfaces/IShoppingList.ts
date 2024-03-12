import { IProduct } from "./IProduct";

export interface IShoppingListState {
  id: number;
  shoppingList: IProduct[];
  createNewShoppingList: (products: IProduct[]) => void;
  updateShoppingList: (id: number, products: IProduct[]) => void;
  deleteShoppingList: (id: number) => void;
}
