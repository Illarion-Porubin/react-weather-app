import React, { useEffect, FC, useState, memo, useCallback } from "react";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeConext";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { currentWeatherSlice } from "../../store/slices/currentWeatherSlice";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { usePopup } from "../../provider/PopupProvider";
import { MyPopup, MyTheme } from "../../store/tipes/tipes";
import Select from "react-select";
import s from "./Header.module.scss";

interface Props {}

export const Header: FC<Props> = memo(() => {
  const dispatch = useCustomDispatch()
  const { citysList } = useCustomSelector(selectCurrentWeatherData);
  const [value, setValue] = useState<string>(``)
  const popup: MyPopup = usePopup();
  const theme: MyTheme= useTheme();

  const changeTheme = useCallback((): void => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT); 
  }, [theme]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}, [])

  const keyDownHandler = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch(fetchCurrentWeather(value))
      setValue('')
    }
  }, [value, dispatch]);

  const customStyles: object = {
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

  const findCity = useCallback((city: string) => {
    dispatch(fetchCurrentWeather(city));
  }, [dispatch]);

  const insertCity = useCallback((): void => {
    if(value){
      dispatch(currentWeatherSlice.actions.addCity(value));
    }
    else popup.allPopup("popupInput")
  }, [value, dispatch, popup])

  useEffect(() => {
    dispatch(fetchCurrentWeather("Novorossiysk"));
  }, [dispatch]);

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
          options={citysList}
          onChange={(e: any) => findCity(e.label)}
        />
      </div>
    </header>
  );
});
