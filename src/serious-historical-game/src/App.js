import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoyalPalace from "./components/RoyalPalace";
import TreasuryArchives from "./components/TreasuryArchive";
import Village from "./components/Village";
import MapScreen from "./components/MapScreen";
import MyDocuments from "./components/MyDocuments";
import MyCase from "./components/MyCase";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <MapScreen></MapScreen>
          </Route>
          <Route path="/places">
            <Wrapper>
              <Route path="/places/royalpalace" exact>
                <RoyalPalace></RoyalPalace>
              </Route>
              <Route path="/places/treasuryarchives" exact>
                <TreasuryArchives></TreasuryArchives>
              </Route>
              <Route path="/places/village" exact>
                <Village></Village>
              </Route>
            </Wrapper>
          </Route>

          <Route path="/mydocuments">
            <MyDocuments></MyDocuments>
          </Route>
        </Switch>
        <Route path="/mycase">
          <MyCase></MyCase>
        </Route>
      </Router>
    </div>
  );
}

export default App;
