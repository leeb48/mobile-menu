export interface IState {
  softDrinks: ISoftDrinks[];
  sakes: ISake[];
  appetizers: IAppetizers[];
  nigiri: INigiri[];
  rolls: IRolls[];
  currentMenu: any[];
}

export interface IRolls {
  name: string;
  image: string;
  price: number;
  description: string;
  category: "F" | "D" | "B" | "AL";
  spicy_options: boolean;
  hand_roll_options: boolean;
  vegetarian_options: boolean;
  long_image: boolean;
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
