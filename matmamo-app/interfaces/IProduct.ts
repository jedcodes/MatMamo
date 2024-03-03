interface IProduct {
  id: number;
  name: string;
  brand: string;
  vendor: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  image: string;
  isSelected: boolean;
  isAdded: boolean;
}

interface IProductListState {
  productList: Array<IProduct>;
  productCount: number;
  addToShoppingList: (product: IProduct) => void;
  removeFromShoppingList: (product: IProduct) => void;
}
