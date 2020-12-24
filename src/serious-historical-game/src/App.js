import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoyalPalace from "./components/RoyalPalace";
import TreasuryArchives from "./components/TreasuryArchive";
import Village from "./components/Village";
import MapScreen from "./components/MapScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path exact="/">
            <MapScreen></MapScreen>
          </Route>
          <Route path="/royalpalace">
            <RoyalPalace></RoyalPalace>
          </Route>
          <Route path="/treasuryarchives">
            <TreasuryArchives></TreasuryArchives>
          </Route>
          <Route path="/village">
            <Village></Village>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
