import { Home } from "./pages/components/Home/Home";
import { AuthPage } from "./pages/shared/AuthPage/AuthPage";
import { Route, Switch } from "react-router-dom";
import { Popup } from "./pages/shared/Popup/Popup";

const App = () => {
  return (
    <div className="App">
      <Popup />
      <div className="container">
        <Switch>
          <Route path="/Auth" exact component={AuthPage} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
