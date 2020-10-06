import { Actions } from "./actions";
import { IState } from "./interfaces";
import { MenuActionTypes } from "./actions";

export const initialState: IState = {
  softDrinks: [],
  wines: [],
  appetizers: [],
  currentMenu: [],
};
export const reducer = (state = initialState, action: Actions): IState => {
  switch (action.type) {
    case MenuActionTypes.GET_ALL_APPETIZERS:
      return {
        ...state,
        appetizers: action.payload,
        currentMenu: action.payload,
      };

    case MenuActionTypes.GET_VEGE_APPETIZERS:
    case MenuActionTypes.SHOW_ALL_APPETIZERS:
      return {
        ...state,
        currentMenu: action.payload,
      };

    case MenuActionTypes.GET_ALL_SOFT_DRINKS:
      return {
        ...state,
        softDrinks: action.payload,
        currentMenu: action.payload,
      };

    default:
      return state;
  }
};
