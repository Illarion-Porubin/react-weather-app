import { FC, memo } from "react";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { CardList } from "../../components/Card/CardList";
import { Tabs } from "../../components/Tabs/Tabs";
import { MainInfo } from "../../components/MainInfo/MainInfo";
import { ExtraInfo } from "../../components/ExtraInfo/ExtraInfo";
import { Header } from "../../components/Header/Header";
import s from "./Main.module.scss";

interface Props {}

export const Main: FC<Props> = memo(() => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  
  return (
    <>
    <Header />   
    <div className={s.home}>
      <div className={s.wrapper}>
        <MainInfo weather={weather} />
        <ExtraInfo weather={weather} />
      </div>
      <Tabs />
      {filter ? (
        <CardList list={[weather.list]}/>
      ) : (
        null
      )}
    </div>
    </>
  );
});
