import { FC } from "react";
import { useDispatch } from "react-redux";
import { useCustomSelector } from "../../../hooks/store";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { currentWeatherSlice } from "../../../store/slices/currentWeatherSlice";
import s from "./Tabs.module.scss";

interface Props {}

export const Tabs: FC<Props> = () => {
  const dispatch = useDispatch();
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  const { payloadDays } = useCustomSelector(selectCurrentWeatherData);
  const filterSelect = (day: number | boolean) => {
    dispatch(currentWeatherSlice.actions.filter(day));
  };

  return (
    <>
      <div className={s.tabs}>
        <div
          className={filter ? s.tabs__wrapper : `${s.tabs__wrapper} ${s.none}`}
        >
          {payloadDays.map((day: number, index) => (
            <div
              className={filter === day ? `${s.tab} ${s.active}` : s.tab}
              key={index}
              onClick={() => filterSelect(day)}
            >
              {day}
            </div>
          ))}
        </div>
        <div
          className={s.concel}
          onClick={() => filterSelect(filter ? false : payloadDays[0])}
        >
          {filter ? "Скрыть" : "Показать"}
        </div>
      </div>
    </>
  );
};
