import { useEffect, FC, useState } from "react";
import { GlobalSvgSelecotr } from "../../../assets/icons/global/GlobalSvgSelecotr";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeConext";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/store";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { currentWeatherSlice } from "../../../store/slices/currentWeatherSlice";
import { useInput } from "../../../hooks/useInput";
import { usePopup } from "../../../provider/PopupProvider";
import { Transition } from "react-transition-group";
import Select from "react-select";
import s from "./Header.module.scss";
import { PopupInput } from "../Popup/PopupInput";

interface Props {}

export const Header: FC<Props> = () => {
  const popup = usePopup();
  const theme = useTheme();
  const input = useInput("");
  const dispatch = useCustomDispatch();
  const { citysList } = useCustomSelector(selectCurrentWeatherData);

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    console.log("changeTheme");
  };

  const customStyles = {
    option: (styles: any) => ({
      ...styles,
      width: "100%",
      marginTop: "6px",
      height: "36px",
      border: "none",
      borderRadius: "6px",
      zIndex: "100",
    }),
    control: (styles: any) => ({
      ...styles,
      minWidth: "14rem",
      borderRadius: "4px",
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "#fff",
      borderColor: theme.theme === Theme.DARK ? "#fff" : "#4F4F4F",
      transition: 0,
    }),
    container: (styles: any) => ({
      ...styles,
      zIndex: 3,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    menu: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "#fff",
    }),
  };

  useEffect(() => {
    dispatch(fetchCurrentWeather("Novorossiysk"));
  }, [dispatch]);
  // const [inProp, setInProp] = useState(false);

  const appendCity = () => {
    if (input.value) {
      dispatch(currentWeatherSlice.actions.addCity(input.value));
    } else {
      
      // setInProp(!inProp)
      // popup.changeInputState()
      // popup.changeInputState();
    }
  };
  const findCity = (city: string) => {
    dispatch(fetchCurrentWeather(city));
  };

  // const duration = 300;

  // const defaultStyle = {
  //   transition: `opacity ${duration}ms ease-in-out`,
  //   opacity: 0,
  // };

  // const transitionStyles: any = {
  //   entering: { opacity: 0 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // };

  return (
    <header className={s.header}>
      {/* <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
        {(state) => (
          <h1
            className={s.circle + " " + state}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <PopupInput/>
          </h1>
        )}
      </Transition> */}
      <div className={s.wrapper__logo}>
        <div className={s.logo}>
          <GlobalSvgSelecotr id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelecotr id="change-theme" />
        </div>
        <div className={s.input__wrapp}>
          <input
            className={s.input}
            value={input.value}
            placeholder="Введите город"
            type="text"
            onChange={input.onChange}
            onKeyDown={input.keyDownHandler}
          />
          <button className={s.input__btn} onClick={() => popup.allPopup("popupInput")}>
            Add
          </button>
        </div>
        <Select
          styles={customStyles}
          value={citysList[0]}
          options={citysList}
          onChange={(e: any) => findCity(e.label)}
        />
      </div>
    </header>
  );
};
