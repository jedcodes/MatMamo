interface IShoppingListState {
  id: number;
  shoppingList: Array<IProduct>;
  productCount: number;
  addToShoppingList: (product: IProduct) => void;
  removeFromShoppingList: (product: IProduct) => void;
}
