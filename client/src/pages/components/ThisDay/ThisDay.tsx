import { FC } from "react";
import { GlobalSvgSelecotr } from "../../../assets/icons/global/GlobalSvgSelecotr";
import { Weather } from "../../../store/tipes/tipes";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

const week: any = {
  "Sat": "СБ",
  "Sun": "ВС",
  "Mun": "ПН",
  "Tue": "ВТ",
  "Wed": "СР",
  "Thu": "ЧТ",
  "Fri": "ПТ",
}


export const ThisDay: FC<Props> = ({ weather }) => {
  const sunriseTime = new Date((weather.city.sunrise ) * 1000);
  const sunsetTime = new Date((weather.city.sunset ) * 1000)
  const checTemp = Math.floor(weather.list[0].main.temp) >= 0 ? "+" : "-";
  const dayEN = String(new Date((weather.list[0].dt)  * 1000 - 10800)).slice(0 , 3);
  

  

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            <span>{checTemp}{Math.floor(weather.list[0].main.temp)}°</span>
          </div>
          <div className={s.this__day_name}>Сегодня {week[dayEN]}</div>
        </div>
        <GlobalSvgSelecotr id={weather.list[0].weather[0].main} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Восход: <span>{sunriseTime.toLocaleTimeString().slice(0,-3)}</span>
        </div>
        <div className={s.this__time}>
          Закат : <span>{sunsetTime.toLocaleTimeString().slice(0,-3)}</span>
        </div>
        <div className={s.this__time}>
          Город: <span>{weather.city.name}</span>
        </div>
      </div>
    </div>
  );
};
