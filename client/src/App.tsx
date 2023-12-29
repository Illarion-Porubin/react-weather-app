import { Main } from "./pages/Main/Main";
import { Route, Switch } from "react-router-dom";
import { Popup } from "./components/Popup/Popup";

const App = () => {
  return (
    <div className="App">
      <Popup />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
