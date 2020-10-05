export interface IState {
  wines: IWine[];
  appetizers: IAppetizers[];
}

export interface IWine {
  name: string;
  price: number;
  image: string;
  description: string;
  category: "W" | "R";
}

export interface IAppetizers {
  name: string;
  price: number;
  image: string;
  description: string;
  category: "A" | "N" | "S" | "SA";
  vegetarian_option: boolean;
}
