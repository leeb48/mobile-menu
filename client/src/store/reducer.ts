import { Actions } from "./actions";
import { IState } from "./interfaces";
import { MenuActionTypes, AuthActionTypes } from "./actions";

export const initialState: IState = {
  auth: {
    username: "",
    isAuthenticated: false,
  },
  menu: {
    foodItems: [],
    foodCategories: [],
  },
};
export const reducer = (state = initialState, action: Actions): IState => {
  switch (action.type) {
    case MenuActionTypes.GET_ALL_FOOD_ITEMS: {
      return {
        ...state,
        menu: {
          ...state.menu,
          foodItems: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
