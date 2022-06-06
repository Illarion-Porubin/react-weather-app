import { createContext } from "react";

interface StateContext {
  state: boolean;
  changeState?: () => void;
}

export const defaultState = {
  state: false,
  changeState: () => {},
};

export const PopupInputContext = createContext<StateContext>(defaultState);