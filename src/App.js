import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoyalPalace from "./components/RoyalPalace";
import TreasuryArchives from "./components/TreasuryArchive";
import Village from "./components/Village";
import MapScreen from "./components/MapScreen";
import MyDocuments from "./components/MyDocuments";
import MyCase from "./components/MyCase";
import Cutscene from "./components/Cutscene";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import PresentScreen from "./components/PresentScreen";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Cutscene />
            </Route>
            <Route path="/mapscreen">
              <MapScreen />
            </Route>
            <Route path="/royalpalace">
              <RoyalPalace />
            </Route>
            <Route path="/treasuryarchives">
              <TreasuryArchives />
            </Route>
            <Route path="/village">
              <Village />
            </Route>
          </Switch>

          <Route path="/mydocuments" exact>
            <div className="centred">
              <MyDocuments />
            </div>
          </Route>
          <Route path="/mycase" exact>
            <MyCase />
          </Route>
          <Route path="/presentscreen" exact>
            <div className="centred">
              <PresentScreen />
            </div>
          </Route>
        </Router>
      </div>
    </DndProvider>
  );
}

export default App;
