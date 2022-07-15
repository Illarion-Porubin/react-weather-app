import { FC, memo } from "react";
import { Card } from "./Card";
import { useCustomSelector } from "../../../hooks/store";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { PayloadList } from "../../../store/tipes/tipes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import s from "./Days.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface Props {
  list: PayloadList[];
}

export const Days: FC<Props> = memo(({ list }) => {
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  const sortDays: object[] = list[0].filter((item) => Number(item.dt_txt.slice(8, 10)) === filter);
  

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={7}
        touchRatio={1}
        touchAngle={45}
        grabCursor={true}
        draggable={true}
        onSlideChange={() => console.log('slide change')}
        navigation    
        breakpoints={{
          1180: {
            width: 1180,
            slidesPerView: 7,
          },
          980: {
            width: 980,
            slidesPerView: 6,
          },
          780: {
            width: 780,
            slidesPerView: 5,
          },
          680: {
            width: 680,
            slidesPerView: 4,
          },
          580: {
            width: 580,
            slidesPerView: 3,
          },
          340: {
            width: 340,
            slidesPerView: 2,
          },
          260: {
            width: 290,
            slidesPerView: 1,
          },
        }}
      >
        {sortDays.map((day: any, index: number) => (
          <SwiperSlide key={index}>
            <div className={s.days} key={index}>
              <Card day={day} key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
