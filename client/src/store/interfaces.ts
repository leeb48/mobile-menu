export interface IState {
  softDrinks: ISoftDrinks[];
  sakes: ISake[];
  appetizers: IAppetizers[];
  nigiri: INigiri[];
  currentMenu: any[];
}

export interface ISake {
  name: string;
  image: string;
  category: "H" | "G" | "J" | "D" | "N" | "S" | "F" | "SJ" | "SH" | "AL";
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
  category: "A" | "N" | "S" | "SA" | "AL";
  vegetarian_options: boolean;
}

export interface INigiri {
  name: string;
  price: number;
  image: string;
  description: string;
  category: "R" | "C" | "AL";
  vegetarian_options: boolean;
}
