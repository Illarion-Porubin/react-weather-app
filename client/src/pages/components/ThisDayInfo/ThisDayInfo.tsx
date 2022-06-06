import { FC } from "react";
import { Weather } from "../../../store/tipes/tipes";
import { ThisDayItem } from "./ThisDayItem";
import cloud from "../../../assets/images/cloud.png";
import s from "./ThisDayInfo.module.scss";


interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo: FC<Props> = ({ weather }) => {
  const checkWind = Math.ceil(weather.list[0].wind.speed) < 5 ? 'м/с - легкий ветер' : 'м/с - сильный ветер';
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.list[0].main.temp)}° - ощущается как ${Math.floor(weather.list[0].main.feels_like)}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.list[0].main.pressure} мм ртутного столба`,

    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${weather.list[0].weather[0].description}`,

    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.ceil(weather.list[0].wind.speed)} ${checkWind}`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_item}>
        {items.map((item: Item, index) => (
          <ThisDayItem item={item} key={index} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
