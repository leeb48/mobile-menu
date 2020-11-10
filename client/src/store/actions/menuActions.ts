import { Dispatch } from "react";
import menuAxios from "../../config/menuAxios";
import {
  IAppetizers,
  INigiri,
  IRolls,
  ISake,
  ISoftDrinks,
  IState,
} from "../interfaces";

// TODO: put action interfaces in another file

// Action types
export enum MenuActionTypes {
  // Appetizer Actions
  GET_ALL_APPETIZERS = "appetizers/get-all",
  FILTER_APPETIZER = "appetizer/filter",
  SHOW_VEGETARIAN_APPETIZERS = "appetizer/vegetarian",
  // Soft Drinks Actions
  GET_ALL_SOFT_DRINKS = "soft-drinks/get-all",
  SHOW_ALL_SOFT_DRINKS = "soft-drinks/show-all",
  SHOW_REFILLABLE_DRINKS = "soft-drinks/refillable",
  SHOW_NON_REFILLABLE_DRINKS = "soft-drinks/non_refillable",
  // Sake Actions
  GET_ALL_SAKE = "sake/get-all",
  FILTER_SAKE = "sake/filter",
  // Nigiri Actions
  GET_ALL_NIGIRI = "nigiri/get-all",
  FILTER_NIGIRI = "nigiri/filter",
  // Roll Actions
  GET_ALL_ROLLS = "rolls/get-all",
}
export type MenuActions =
  | AppetizerActions
  | SoftDrinkActions
  | SakeActions
  | NigiriActions
  | RollActions;

//-------------------------------------------------------------------------
// * Roll Actions

type RollActions = IGetAllRollsAction;

interface IGetAllRollsAction {
  type: MenuActionTypes.GET_ALL_ROLLS;
  payload: IRolls[];
}

export const getAllRolls = async (dispatch: Dispatch<IGetAllRollsAction>) => {
  const res = await menuAxios.get("/menu/rolls");

  return dispatch({
    type: MenuActionTypes.GET_ALL_ROLLS,
    payload: res.data,
  });
};

//-------------------------------------------------------------------------
// * Nigiri Actions
type NigiriActions = IGetAllNigiriAciton | IFilterNigiriAction;

interface IGetAllNigiriAciton {
  type: MenuActionTypes.GET_ALL_NIGIRI;
  payload: INigiri[];
}

export const getAllNigiri = async (dispatch: Dispatch<IGetAllNigiriAciton>) => {
  const res = await menuAxios.get("/menu/nigiri");

  return dispatch({
    type: MenuActionTypes.GET_ALL_NIGIRI,
    payload: res.data,
  });
};

interface IFilterNigiriAction {
  type: MenuActionTypes.FILTER_NIGIRI;
  payload: INigiri[];
}

export const filterNigiri = async (
  state: IState,
  dispatch: Dispatch<IFilterNigiriAction>,
  filterOption: INigiri["category"]
) => {
  if (filterOption === "AL") {
    return dispatch({
      type: MenuActionTypes.FILTER_NIGIRI,
      payload: state.nigiri,
    });
  }

  const res = state.nigiri.filter((sushi) => sushi.category === filterOption);

  return dispatch({
    type: MenuActionTypes.FILTER_NIGIRI,
    payload: res,
  });
};

//-------------------------------------------------------------------------
// * Sake Actions
type SakeActions = IGetAllSakeAction | IFilterSakeAction;

interface IGetAllSakeAction {
  type: MenuActionTypes.GET_ALL_SAKE;
  payload: ISake[];
}

export const getSake = async (dispatch: Dispatch<IGetAllSakeAction>) => {
  const res = await menuAxios.get("/menu/sake");

  return dispatch({
    type: MenuActionTypes.GET_ALL_SAKE,
    payload: res.data,
  });
};

interface IFilterSakeAction {
  type: MenuActionTypes.FILTER_SAKE;
  payload: ISake[];
}

export const filterSake = async (
  state: IState,
  dispatch: Dispatch<IFilterSakeAction>,
  filterOption: ISake["category"]
) => {
  if (filterOption === "AL") {
    return dispatch({
      type: MenuActionTypes.FILTER_SAKE,
      payload: state.sakes,
    });
  }

  const res = state.sakes.filter((sake) => sake.category === filterOption);

  return dispatch({
    type: MenuActionTypes.FILTER_SAKE,
    payload: res,
  });
};

//-------------------------------------------------------------------------
// * Appetizer Actions

type AppetizerActions =
  | IGetAllAppetizersAction
  | IFilterAppetizerAction
  | IShowVegetarianAppetizerAction;

// Get all appetizers from api
interface IGetAllAppetizersAction {
  type: MenuActionTypes.GET_ALL_APPETIZERS;
  payload: IAppetizers[];
}

export const getAppetizers = async (
  dispatch: Dispatch<IGetAllAppetizersAction>
) => {
  try {
    const res = await menuAxios.get("/menu/appetizers");

    return dispatch({
      type: MenuActionTypes.GET_ALL_APPETIZERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

interface IFilterAppetizerAction {
  type: MenuActionTypes.FILTER_APPETIZER;
  payload: IAppetizers[];
}

export const filterAppetizer = async (
  state: IState,
  dispatch: Dispatch<IFilterAppetizerAction>,
  filterOption: IAppetizers["category"]
) => {
  if (filterOption === "AL") {
    return dispatch({
      type: MenuActionTypes.FILTER_APPETIZER,
      payload: state.appetizers,
    });
  }

  const res = state.appetizers.filter(
    (appetizer) => appetizer.category === filterOption
  );

  return dispatch({
    type: MenuActionTypes.FILTER_APPETIZER,
    payload: res,
  });
};

interface IShowVegetarianAppetizerAction {
  type: MenuActionTypes.SHOW_VEGETARIAN_APPETIZERS;
  payload: IAppetizers[];
}

export const showVegetarianAppetizer = (
  state: IState,
  dispatch: Dispatch<IShowVegetarianAppetizerAction>
) => {
  const res = state.appetizers.filter(
    (appetizer) => appetizer.vegetarian_options === true
  );

  return dispatch({
    type: MenuActionTypes.SHOW_VEGETARIAN_APPETIZERS,
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
