import { FC } from "react";
import { GlobalSvgSelecotr } from "../../../assets/icons/global/GlobalSvgSelecotr";
import { usePopup } from "../../../provider/PopupProvider";
import { PayloadDay } from "../../../store/tipes/tipes"
import s from "./Days.module.scss";

interface Props {
  day: PayloadDay;
}

const week: any = {
  "Sat": "СБ",
  "Sun": "ВС",
  "Mon": "ПН",
  "Tue": "ВТ",
  "Wed": "СР",
  "Thu": "ЧТ",
  "Fri": "ПТ",
}

export const Card: FC<Props> = ({ day }) => {
  const popup = usePopup();
  const time = day.dt_txt.slice(11, 16);
  const checTemp = Math.floor(day.main.temp) >= 0 ? "+" : "-";
  const curentDay = String(new Date((day.dt) * 1000 - 10800)).slice(0, 3)


  return (
      <div
        className={s.card}
         onClick={() => popup.dayValue(day)}
        >
        <div className={s.dayName}>{week[curentDay]}</div>
        <div className={s.day__info}>
          {time}
        </div>
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
};
