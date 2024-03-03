import {create} from 'zustand';

const useProductStore = create<IProductState>()((set) => ({
  productList: [],
  productCount: 0,

  // Legge til produkt i handlelisten
  addToShoppingList: (product: IProduct) => set((state) => {
    const hasProduct = state.productList.find(p => p.id === product.id);

    return {
      ...state,
      productCount: state.productCount++,
      productList: hasProduct ? 
        state.productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p) :
        [...state.productList, {...product, quantity: 1}] 
    };
  }),

  // Fjerne produkt fra handlelisten
  removeFromShoppingList: (product: IProduct) => set((state) => {
    const updatedShoppingList = state.productList.flatMap(p => 
      p.id === product.id ? (p.quantity > 1 ? [{...p, quantity: p.quantity - 1}] : []) : [p]
    );

    return {
      ...state,
      productCount: state.productCount - 1,
      shoppingList: updatedShoppingList 
    };
  }),
}));