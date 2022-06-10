import React, { useEffect, FC, useState } from "react";
import { GlobalSvgSelecotr } from "../../../assets/icons/global/GlobalSvgSelecotr";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeConext";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { currentWeatherSlice } from "../../../store/slices/currentWeatherSlice";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/store";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { usePopup } from "../../../provider/PopupProvider";
import Select from "react-select";
import s from "./Header.module.scss";

interface Props {}

export const Header: FC<Props> = () => {
  const dispatch = useCustomDispatch()
  const [value, setValue] = useState<string>(``)
  const { citysList } = useCustomSelector(selectCurrentWeatherData);

  const popup = usePopup();
  const theme = useTheme();
  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    console.log("changeTheme");
  };
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value)}
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch(fetchCurrentWeather(value))
      setValue('')
    }
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

  const findCity = (city: string) => {
    dispatch(fetchCurrentWeather(city));
  };

  const insertCity = () => {
    if(value){
      dispatch(currentWeatherSlice.actions.addCity(value));
    }
    else popup.allPopup("popupInput")
  }

  return (
    <header className={s.header}>
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
            value={value}
            placeholder="Введите город"
            type="text"
            onChange={onChange}
            onKeyDown={keyDownHandler}
          />
          <button className={s.input__btn} onClick={insertCity}>
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
