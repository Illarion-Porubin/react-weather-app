///////////////////////Payload///////////////////////
export type PayloadCity = {
  timezone: number,
  sunrise: number,
  sunset: number,
  name: string,
}

export type PayloadMain = {
  temp: number,
  feels_like: number,
  pressure: number,
}

export type PayloadWeather = [{
  description: string,
  main: string,
}]

export type PayloadWind = {
  speed: number,
}

export type PayloadList = [{
  dt: number,
  dt_txt: string,
  main: PayloadMain,
  weather: PayloadWeather,
  wind: PayloadWind
}]

export type PayloadDay = {
  timezone: number,
  sunrise: number,
  sunset: number,
  name: string,
  dt: number,
  dt_txt: string,
  main: PayloadMain,
  weather: PayloadWeather,
  wind: PayloadWind
}
///////////////////////Payload!///////////////////////
export type CitysList = {
  value: string,
  label: string
};

export type Weather = {
  city: PayloadCity,
  list: PayloadList
};

export type Week = {
  [key: string]: string;
}

export type Item = {
  icon_id: string;
  name: string;
  value: string;
}

export type MyPopup = {
  list?: PayloadList[];
  inputState?: boolean;
  state?: boolean;
  style?: boolean;
  allPopup: Function;
}

export type  MyTheme = {
  changeTheme: Function
  theme: string
}