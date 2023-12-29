import { FC, memo } from "react";
import { Item, MyPopup } from "../../store/tipes/tipes";
import { ExtraInfoList } from "../ExtraInfo/ExtraInfoList";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { usePopup } from "../../provider/PopupProvider";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import s from "./Popup.module.scss";

interface Props {}

export const Popup: FC<Props> = memo(() => {
  const { payloadDay } = useCustomSelector(selectCurrentWeatherData);
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { week } = useCustomSelector(selectCurrentWeatherData);
  const popup: MyPopup = usePopup();
  const checTemp: string = Math.floor(payloadDay.main.temp) >= 0 ? "+" : "-";
  const popupCheck: string = popup.style ? `${s.popup} ${s.active}` : s.popup;
  const date: string = String(new Date(payloadDay.dt * 1000 - 10800));

  const checkWind: string =
    Math.ceil(payloadDay.wind.speed) < 5
      ? "м/с - легкий ветер"
      : "м/с - сильный ветер";
  const items: Item[] = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(payloadDay.main.temp)}° - ощущается как ${Math.floor(
        payloadDay.main.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${payloadDay.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${payloadDay.weather[0].description}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.ceil(payloadDay.wind.speed)} ${checkWind}`,
    },
  ];

  return popup.state ? (
    <>
      <div className={s.blur}></div>
      <div className={popupCheck}>
        <div className={s.day}>
          <div className={s.curentDay}>{week[date.slice(0, 3)]}</div>

          <div className={s.day__temp}>
            {checTemp}
            {Math.floor(payloadDay.main.temp)}°
          </div>
          <div className={s.img}>
            <GlobalSvgSelecotr id="sun" />
          </div>
          <div className={s.day__time}>
            <div>
              <span>Дата: </span>
              {date.slice(8, 15)}
            </div>
          </div>
          <div className={s.day__time}>
            Город: <span>{weather.city.name}</span>
          </div>
        </div>
        <div className={s.this__day_info_item}>
          {items.map((item: Item, index) => (
            <ExtraInfoList item={item} key={index} />
          ))}
        </div>
        <div className={s.close} onClick={() => popup.allPopup("popupDay")}>
          <GlobalSvgSelecotr id="close" />
        </div>
      </div>
    </>
  ) : popup.inputState ? (
    <>
      <div className={s.blur}></div>
      <div className={popupCheck}>
        <h1>Введите название города</h1>
        <div className={s.close} onClick={() => popup.allPopup("popupInput")}>
          <GlobalSvgSelecotr id="close" />
        </div>
      </div>
    </>
  ) : null;
});
