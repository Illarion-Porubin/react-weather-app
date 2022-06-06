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
///////////////////////Payload!///////////////////////
export type CitysList = {
  value: string,
  label: string
};


export type Weather = {
  city: PayloadCity,
  list: PayloadList
};

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