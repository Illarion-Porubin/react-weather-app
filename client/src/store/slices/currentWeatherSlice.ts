import { AxiosResponse } from 'axios';
import { Weather, CitysList, PayloadDay, Week } from './../tipes/tipes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentWeather = {
  weather: Weather,
  payloadDay: PayloadDay,
  isLoading: boolean,
  response: Response;
  payloadDays: number[],
  citysList: CitysList[],
  filter: number;
  week: Week,
}

type Response = {
  status: number,
  message: string,
}

const initialState: CurrentWeather = {
  weather: {
    city: {
      timezone: 0,
      sunrise: 0,
      sunset: 0,
      name: '',
    },
    list: [{
      dt: 0,
      dt_txt: '',
      main: {
        temp: 0,
        feels_like: 0,
        pressure: 0
      },
      weather: [{
        description: '',
        main: '',
      }],
      wind: {
        speed: 0,
      }
    }]
  },
  payloadDay: {
    timezone: 0,
    sunrise: 0,
    sunset: 0,
    name: '',
    dt: 0,
    dt_txt: '',
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
    },
    weather: [{
      description: '',
      main: '',
    }],
    wind: {
      speed: 0,
    }
  },
  isLoading: false,
  payloadDays: [],
  filter: Number(),
  citysList: [{ value: "city-1", label: "Новороссийск" }, { value: "city-2", label: "Сочи" }],
  week: {
    Sat: "СБ",
    Sun: "ВС",
    Mon: "ПН",
    Tue: "ВТ",
    Wed: "СР",
    Thu: "ЧТ",
    Fri: "ПТ",
  },
  response: {
    status: 0,
    message: ''
  }
}

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload
    },
    payloadDays(state, action) {
      state.payloadDays = action.payload
    },
    payloadDay(state, action) {
      state.payloadDay = action.payload
    },
    addCity(state, action) {
      let citysListLength = state.citysList.length + 1
      state.citysList.push({value: `city-${citysListLength}`, label: action.payload})
    },
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data; //сразу берем данные из data 
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
});

export default currentWeatherSlice.reducer