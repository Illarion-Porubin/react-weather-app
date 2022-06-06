import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from './../store/tipes/tipes';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/forecast?q=${city}&lang=ru`)
  }
}