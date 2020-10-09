export interface IState {
  softDrinks: ISoftDrinks[];
  sakes: ISake[];
  appetizers: IAppetizers[];
  currentMenu: any[];
}

export interface ISake {
  name: string;
  image: string;
  category: 'H' | 'G' | 'J' | 'D' | 'N' | 'S' | 'F' | 'SJ' | 'SH';
}

export interface ISoftDrinks {
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'R' | 'NR';
}

export interface IAppetizers {
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'A' | 'N' | 'S' | 'SA';
  vegetarian_options: boolean;
}
