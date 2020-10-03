import { AuthActions } from "./authActions";
import { MenuActions } from "./menuActions";

export type Actions = MenuActions | AuthActions;

export * from "./menuActions";
export * from "./authActions";
