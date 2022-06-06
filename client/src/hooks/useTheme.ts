import { ThemeContext } from './../context/ThemeConext';
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext)