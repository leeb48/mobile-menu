import { Dispatch } from "react";
import menuAxios from "../../config/menuAxios";
import { IAppetizers, ISoftDrinks, IState } from "../interfaces";

// Action types
export enum MenuActionTypes {
  GET_ALL_APPETIZERS = "appetizers/get-all",
  GET_VEGE_APPETIZERS = "appetizers/vegetarian",
  SHOW_ALL_APPETIZERS = "appetizers/show-all",
  GET_ALL_SOFT_DRINKS = "soft-drinks/get-all",
}
export type MenuActions = AppetizerActions | SoftDrinkActions;

//-------------------------------------------------------------------------
// * Appetizer Actions

type AppetizerActions =
  | IGetAllAppetizersAction
  | IGetVegeAppetizersAction
  | IShowAllAppetizersAction;

// Get all appetizers from api
interface IGetAllAppetizersAction {
  type: MenuActionTypes.GET_ALL_APPETIZERS;
  payload: IAppetizers[];
}

export const getAppetizers = async (
  dispatch: Dispatch<IGetAllAppetizersAction>
) => {
  const res = await menuAxios.get("/menu/appetizers");

  return dispatch({
    type: MenuActionTypes.GET_ALL_APPETIZERS,
    payload: res.data,
  });
};

// Filter out vegetarian options
interface IGetVegeAppetizersAction {
  type: MenuActionTypes.GET_VEGE_APPETIZERS;
  payload: IAppetizers[];
}

export const getVegeAppetizers = (
  state: IState,
  dispatch: Dispatch<IGetVegeAppetizersAction>
) => {
  const res = state.appetizers.filter(
    (item) => item.vegetarian_options === true
  );

  return dispatch({
    type: MenuActionTypes.GET_VEGE_APPETIZERS,
    payload: res,
  });
};

// Show all appetizers
interface IShowAllAppetizersAction {
  type: MenuActionTypes.SHOW_ALL_APPETIZERS;
  payload: IAppetizers[];
}

export const showAllAppetizers = (
  state: IState,
  dispatch: Dispatch<IShowAllAppetizersAction>
) => {
  const res = state.appetizers;
  return dispatch({
    type: MenuActionTypes.SHOW_ALL_APPETIZERS,
    payload: res,
  });
};

//-------------------------------------------------------------------------
// * Soft Drink Actions

type SoftDrinkActions = IGetAllSoftDrinksAction;

interface IGetAllSoftDrinksAction {
  type: MenuActionTypes.GET_ALL_SOFT_DRINKS;
  payload: ISoftDrinks[];
}

export const getSoftDrinks = async (
  dispatch: Dispatch<IGetAllSoftDrinksAction>
) => {
  const res = await menuAxios.get("/menu/soft-drinks");

  return dispatch({
    type: MenuActionTypes.GET_ALL_SOFT_DRINKS,
    payload: res.data,
  });
};
