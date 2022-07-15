import { FC } from "react";
import { useContext } from "react";
import { ReactNode } from "react";
import { PopupInputContext, defaultState } from "../context/PopupInputContext";
import { useState } from "react";

interface Props {children: ReactNode}

export const usePopup = () => {
  return useContext(PopupInputContext);
};

export const PopupInputProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState(defaultState.state);
  const changeState = () => setState(state => !state);

  
  return (
    <PopupInputContext.Provider
      value={{
        state,
        changeState,
      }}
    >
      {children}
    </PopupInputContext.Provider>
  );
};
