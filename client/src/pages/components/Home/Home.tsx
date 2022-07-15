import { FC, memo } from "react";
import { useCustomSelector } from "../../../hooks/store";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { Days } from "../../components/Days/Days";
import { Tabs } from "../../components/Tabs/Tabs";
import { ThisDay } from "../../components/ThisDay/ThisDay";
import { ThisDayInfo } from "../../components/ThisDayInfo/ThisDayInfo";
import { Header } from "../../shared/Header/Header";
import s from "./Home.module.scss";

interface Props {}

export const Home: FC<Props> = memo(() => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  
  return (
    <>
    <Header />   
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Tabs />
      {filter ? (
        <Days list={[weather.list]}/>
      ) : (
        null
      )}
    </div>
    </>
  );
});
