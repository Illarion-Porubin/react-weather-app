import { FC } from "react";
import { Item } from "./ThisDayInfo";
import { IndicatorSvgSelector } from "../../../assets/indicators/IndicatorSvgSelector"
import s from "./ThisDayInfo.module.scss";

interface Props {
  item: Item;
}

export const ThisDayItem: FC<Props> = ({ item }) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id = {icon_id}/>
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  )
}