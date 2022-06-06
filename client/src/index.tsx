import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider";
import { PopupProvider } from "./provider/PopupProvider";
import { store } from "./store/store";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider>
          <PopupProvider>
            <App />
          </PopupProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
