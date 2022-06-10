import {FC} from "react";
import s from "./AuthPage.module.scss";


interface Props {}

export const AuthPage: FC<Props> = ()  => {
  return (
      <div className={s.auth}>
        <h1>Авторизация</h1>
        <input className={s.auth__email} type="email" />
        <input className={s.auth__pasword} type="password" />
      </div>
  )
}