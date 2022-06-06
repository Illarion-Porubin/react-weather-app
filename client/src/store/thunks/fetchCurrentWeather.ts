import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from './../../services/WeatherService';
import { AppDispath } from './../store';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispath) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather)
        const res = await WeatherService.getCurrentWeather(payload);
        console.log(res);
        dispatch(currentWeatherSlice.actions.filter(Number(res.data.list[0].dt_txt.slice(8, 10))))  
        dispatch(currentWeatherSlice.actions.payloadDays(Array.from(new Set(res.data.list.map(item => Number(item.dt_txt.slice(8, 10)))))))
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error)
    }
  }