import { Dispatch } from "react";
import menuAxios from "../../config/menuAxios";
import { IAppetizers } from "../interfaces";

// Action types
export enum MenuActionTypes {
  GET_ALL_APPETIZERS = "food/get-all-appetizers",
}
export type MenuActions = IGetAllFoodItemsAction;

//-------------------------------------------------------------------------
// * Get all food items action
interface IGetAllFoodItemsAction {
  type: MenuActionTypes.GET_ALL_APPETIZERS;
  payload: IAppetizers[];
}

export const getAppetizers = async (
  dispatch: Dispatch<IGetAllFoodItemsAction>
) => {
  const res = await menuAxios.get("/menu/appetizers");

  return dispatch({
    type: MenuActionTypes.GET_ALL_APPETIZERS,
    payload: res.data,
  });
};
//-------------------------------------------------------------------------
