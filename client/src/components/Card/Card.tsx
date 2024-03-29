import { FC, memo } from "react";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { usePopup } from "../../provider/PopupProvider";
import { PayloadDay } from "../../store/tipes/tipes";
import s from "./Card.module.scss";

interface Props {
  day: PayloadDay;
}

interface Popup {
  dayValue: Function;
}

export const Card: FC<Props> = memo(({ day }) => {
  const { week } = useCustomSelector(selectCurrentWeatherData)
  const popup: Popup = usePopup();
  const time: string = day.dt_txt.slice(11, 16);
  const checTemp: string = Math.floor(day.main.temp) >= 0 ? "+" : "-";
  const curentDay: string = String(new Date(day.dt * 1000 - 10800)).slice(0, 3);

  return (
    <div className={s.card} onClick={() => popup.dayValue(day)}>
      <div className={s.dayName}>{week[curentDay]}</div>
      <div className={s.day__info}>{time}</div>
      <div className={s.img}>
        <GlobalSvgSelecotr id={day.weather[0].main} />
      </div>
      <div className={s.temp__day}>
        {checTemp}
        {Math.floor(day.main.temp)}°
      </div>
      <div className={s.temp__night}></div>
      <div className={s.info}>{day.weather[0].description}</div>
    </div>
  );
});
