import { Dispatch } from "react";

export enum AuthActionTypes {
  REGISTER = "auth/register",
  LOGIN = "auth/login",
  LOGOUT = "auth/logout",
}

interface IRegisterUserAction {
  type: AuthActionTypes.REGISTER;
  payload: {
    access: string;
    refresh: string;
  };
}

export type AuthActions = IRegisterUserAction;
