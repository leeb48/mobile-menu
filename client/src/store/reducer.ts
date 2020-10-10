import { Actions } from "./actions";
import { IState } from "./interfaces";
import { MenuActionTypes } from "./actions";

export const initialState: IState = {
  softDrinks: [],
  sakes: [],
  appetizers: [],
  nigiri: [],
  rolls: [],
  currentMenu: [],
};
export const reducer = (state = initialState, action: Actions): IState => {
  switch (action.type) {
    // * Appetizers
    case MenuActionTypes.GET_ALL_APPETIZERS:
      return {
        ...state,
        appetizers: action.payload,
        currentMenu: action.payload,
      };
    case MenuActionTypes.FILTER_APPETIZER:
    case MenuActionTypes.SHOW_VEGETARIAN_APPETIZERS:
      return {
        ...state,
        currentMenu: action.payload,
      };

    // * Nigiri
    case MenuActionTypes.GET_ALL_NIGIRI:
      return {
        ...state,
        nigiri: action.payload,
        currentMenu: action.payload,
      };
    case MenuActionTypes.FILTER_NIGIRI:
      return {
        ...state,
        currentMenu: action.payload,
      };

    // * Rolls
    case MenuActionTypes.GET_ALL_ROLLS:
      return {
        ...state,
        rolls: action.payload,
        currentMenu: action.payload,
      };

    // * Soft Drinks
    case MenuActionTypes.GET_ALL_SOFT_DRINKS:
      return {
        ...state,
        softDrinks: action.payload,
        currentMenu: action.payload,
      };
    case MenuActionTypes.SHOW_ALL_SOFT_DRINKS:
    case MenuActionTypes.SHOW_REFILLABLE_DRINKS:
    case MenuActionTypes.SHOW_NON_REFILLABLE_DRINKS:
      return {
        ...state,
        currentMenu: action.payload,
      };

    // * Sake
    case MenuActionTypes.GET_ALL_SAKE:
      return {
        ...state,
        sakes: action.payload,
        currentMenu: action.payload,
      };
    case MenuActionTypes.FILTER_SAKE:
      return {
        ...state,
        currentMenu: action.payload,
      };

    default:
      return state;
  }
};
