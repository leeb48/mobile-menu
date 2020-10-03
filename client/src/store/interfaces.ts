export interface IState {
  auth: {
    username: string;
    isAuthenticated: boolean;
  };
  menu: {
    foodItems: IFoodItem[];
    foodCategories: string[];
  };
}

export interface IFoodItem {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}
