import React, {FC} from "react";
import { useContext } from "react";
import { ReactNode } from "react";
import { PopupInputContext, defaultState } from "../context/PopupInputContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentWeatherSlice } from '../store/slices/currentWeatherSlice';

interface Props {children: ReactNode}

export const usePopup = () => {
  return useContext(PopupInputContext);
};

export const PopupInputProvider: FC<Props> = 
  ({
    children, 
    ...props
  }) => {
  const [state, setState] = useState(defaultState.state);
  const changeState = () => setState(!state);
  console.log(!state);
  
  
  return (
    <PopupInputContext.Provider
      value={{
        state,
        changeState,
      }}
      {...props}
    >
      {children}
    </PopupInputContext.Provider>
  );
};
