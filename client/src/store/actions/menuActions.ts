import { Dispatch } from "react";
import menuAxios from "../../config/menuAxios";
import { IAppetizers, ISoftDrinks, IState } from "../interfaces";

// Action types
export enum MenuActionTypes {
  GET_ALL_APPETIZERS = "appetizers/get-all",
  SHOW_VEGE_APPETIZERS = "appetizers/vegetarian",
  SHOW_ALL_APPETIZERS = "appetizers/show-all",
  GET_ALL_SOFT_DRINKS = "soft-drinks/get-all",
  SHOW_ALL_SOFT_DRINKS = "soft-drinks/show-all",
  SHOW_REFILLABLE_DRINKS = "soft-drinks/refillable",
  SHOW_NON_REFILLABLE_DRINKS = "soft-drinks/non_refillable",
}
export type MenuActions = AppetizerActions | SoftDrinkActions;

//-------------------------------------------------------------------------
// * Appetizer Actions

type AppetizerActions =
  | IGetAllAppetizersAction
  | IShowVegeAppetizersAction
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
interface IShowVegeAppetizersAction {
  type: MenuActionTypes.SHOW_VEGE_APPETIZERS;
  payload: IAppetizers[];
}

export const getVegeAppetizers = (
  state: IState,
  dispatch: Dispatch<IShowVegeAppetizersAction>
) => {
  const res = state.appetizers.filter(
    (item) => item.vegetarian_options === true
  );

  return dispatch({
    type: MenuActionTypes.SHOW_VEGE_APPETIZERS,
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

type SoftDrinkActions =
  | IGetAllSoftDrinksAction
  | IShowAllSoftDrinksAction
  | IShowRefillableAciton
  | IShowNonRefillableAction;

// Fetch soft-drinks from api
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

// Show all soft-drinks
interface IShowAllSoftDrinksAction {
  type: MenuActionTypes.SHOW_ALL_SOFT_DRINKS;
  payload: ISoftDrinks[];
}
export const showAllSoftDrinks = (
  state: IState,
  dispatch: Dispatch<IShowAllSoftDrinksAction>
) => {
  const res = state.softDrinks;

  return dispatch({
    type: MenuActionTypes.SHOW_ALL_SOFT_DRINKS,
    payload: res,
  });
};

// Get refillable drinks
interface IShowRefillableAciton {
  type: MenuActionTypes.SHOW_REFILLABLE_DRINKS;
  payload: ISoftDrinks[];
}
export const showRefillableDrinks = (
  state: IState,
  dispatch: Dispatch<IShowRefillableAciton>
) => {
  const res = state.softDrinks.filter((item) => item.category === "R");

  return dispatch({
    type: MenuActionTypes.SHOW_REFILLABLE_DRINKS,
    payload: res,
  });
};

// Get non-refillable drinks
interface IShowNonRefillableAction {
  type: MenuActionTypes.SHOW_NON_REFILLABLE_DRINKS;
  payload: ISoftDrinks[];
}
export const showNonRefillableDrinks = (
  state: IState,
  dispatch: Dispatch<IShowNonRefillableAction>
) => {
  const res = state.softDrinks.filter((item) => item.category === "NR");

  return dispatch({
    type: MenuActionTypes.SHOW_NON_REFILLABLE_DRINKS,
    payload: res,
  });
};
