import React, { useMemo, useState } from "react";
// import { fetchCurrentWeather } from "../store/thunks/fetchCurrentWeather";
// import { useCustomDispatch } from "./store";

// export const useInput = (initialState: string) => {
//   const [value, setValue] = useState<string>(initialState)
//   const dispatch = useCustomDispatch()



//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value)}
//   const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.code === "Enter") {
//       dispatch(fetchCurrentWeather(value))
//       setValue('')
//     }
//   };
//   return {
//     value, onChange, keyDownHandler
//   }
// }