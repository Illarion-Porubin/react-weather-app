import { createContext } from "react";
import { PayloadDay } from "../store/tipes/tipes"

interface StateContext {
  state: boolean;
  style: boolean;
  inputState: boolean;
  allPopup: (popup: string) => void;
  dayValue: (day: PayloadDay) => void;
}

export const defaultState = {
  state: false,
  style: false,
  inputState: false,
  allPopup: () => {},
  dayValue: () => {},
};

export const PopupContext = createContext<StateContext>(defaultState);