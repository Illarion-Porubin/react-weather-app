import { Home } from "./pages/components/Home/Home";
import { Route, Switch } from "react-router-dom";
import { Header } from "./pages/shared/Header/Header";
import { Popup } from "./pages/shared/Popup/Popup";
// import { PopupInput } from "./pages/shared/Popup/PopupInput";

const App = () => {
  return (
    <div className="App">
      <Popup />
      {/* <PopupInput/> */}
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
