import {create} from 'zustand';


 const useShoppingListStore = create<IShoppingListState>()((set) => ({

  shoppingList: [],
  productCount: 0,

  // Legge til produkt i handlelisten
  addToShoppingList: (product: IProduct) => set((state) => {
    const hasProduct = state.shoppingList.find(p => p.id === product.id);

    return {
      ...state,
      productCount: state.productCount++,
      shoppingList: hasProduct ? 
        state.shoppingList.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p) :
        [...state.shoppingList, {...product, quantity: 1}] 
    };
  }),

  // Fjerne produkt fra handlelisten
  removeFromShoppingList: (product: IProduct) => set((state) => {
    const updatedShoppingList = state.shoppingList.flatMap(p => 
      p.id === product.id ? (p.quantity > 1 ? [{...p, quantity: p.quantity - 1}] : []) : [p]
    );

    return {
      ...state,
      productCount: state.productCount - 1,
      shoppingList: updatedShoppingList 
    };
  }),
}));


export default useShoppingListStore;