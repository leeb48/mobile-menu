import { Dispatch } from "react";
import menuAxios from "../../config/menuAxios";
import { IFoodItem } from "../interfaces";

// Action types
export enum MenuActionTypes {
  GET_ALL_FOOD_ITEMS = "food-items/get-all",
}
export type MenuActions = IGetAllFoodItemsAction;

//-------------------------------------------------------------------------
// * Get all food items action
interface IGetAllFoodItemsAction {
  type: MenuActionTypes.GET_ALL_FOOD_ITEMS;
  payload: IFoodItem[];
}

export const getAllFoodItems = async (
  dispatch: Dispatch<IGetAllFoodItemsAction>
) => {
  const res = await menuAxios.get("/menu/get-all-food-items");

  return dispatch({
    type: MenuActionTypes.GET_ALL_FOOD_ITEMS,
    payload: res.data,
  });
};
//-------------------------------------------------------------------------
