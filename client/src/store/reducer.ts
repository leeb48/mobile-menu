import { Actions } from "./actions";
import { IState } from "./interfaces";
import { MenuActionTypes } from "./actions";

export const initialState: IState = {
  wines: [],
  appetizers: [],
};
export const reducer = (state = initialState, action: Actions): IState => {
  switch (action.type) {
    case MenuActionTypes.GET_ALL_APPETIZERS: {
      return {
        ...state,
        appetizers: action.payload,
      };
    }
    default:
      return state;
  }
};
