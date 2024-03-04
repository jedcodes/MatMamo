export interface IProductListState {
  productList: Array<IProduct>;
  productCount: number;
  addToShoppingList: (product: IProduct) => void;
  removeFromShoppingList: (product: IProduct) => void;
}

export interface ProductResult {
  data: IProduct[];
  links: Links;
  meta: Meta;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  vendor: string;
  ean: string;
  url: string;
  image: string;
  category: Category[];
  description?: string;
  ingredients?: string;
  current_price: number;
  current_unit_price: number;
  weight: number;
  weight_unit: string;
  store: Store;
  price_history: Pricehistory[];
  allergens: Allergen[];
  nutrition: Nutrition[];
  labels: (Label | Labels2 | Labels3 | Labels4)[];
  created_at: string;
  updated_at: string;
  isSelected: boolean;
}

interface Meta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
}

interface Links {
  first: string;
  last?: any;
  prev?: any;
  next: string;
}

interface Labels4 {
  name: string;
  display_name: string;
  description: string;
  organization?: string;
  alternative_names?: any;
  type?: any;
  year_established: number;
  about?: string;
  note?: any;
  icon: Icon2;
}

interface Labels3 {
  name: string;
  display_name: string;
  description: string;
  organization?: string;
  alternative_names?: any;
  type?: any;
  year_established?: number;
  about?: string;
  note?: any;
  icon: Icon2;
}

interface Labels2 {
  name: string;
  display_name: string;
  description: string;
  organization?: any;
  alternative_names?: any;
  type?: any;
  year_established?: any;
  about: string;
  note?: any;
  icon: Icon2;
}

interface Icon2 {
  svg: string;
  png: string;
}

interface Label {
  name: string;
  display_name: string;
  description: string;
  organization?: string;
  alternative_names?: any;
  type?: string;
  year_established?: number;
  about: string;
  note?: any;
  icon: Icon;
}

interface Icon {
  svg?: string;
  png: string;
}

interface Nutrition {
  code: string;
  display_name: string;
  amount: number;
  unit: string;
}

interface Allergen {
  code: string;
  display_name: string;
  contains: string;
}

interface Pricehistory {
  price: number;
  date: string;
}

interface Store {
  name: string;
  code: string;
  url: string;
  logo: string;
}

interface Category {
  id: number;
  depth: number;
  name: string;
}
