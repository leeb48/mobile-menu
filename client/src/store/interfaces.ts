export interface IState {
  softDrinks: ISoftDrinks[];
  wines: IWine[];
  appetizers: IAppetizers[];
  currentMenu: any[];
}

export interface IWine {
  name: string;
  price: number;
  image: string;
  description: string;
  category: "W" | "R";
}

export interface ISoftDrinks {
  name: string;
  price: number;
  image: string;
  description: string;
  category: "R" | "NR";
}

export interface IAppetizers {
  name: string;
  price: number;
  image: string;
  description: string;
  category: "A" | "N" | "S" | "SA";
  vegetarian_options: boolean;
}
