export interface IShoppingCardState {
  id: number;
  name: string;
  shoppingCardList: IShoppingListState[];
  addToShoppingCard: (shoppingList: IShoppingListState) => void;
  removeFromShoppingCard: (shoppingList: IShoppingListState) => void;
}
