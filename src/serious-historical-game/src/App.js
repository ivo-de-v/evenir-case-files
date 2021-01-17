import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoyalPalace from "./components/RoyalPalace";
import TreasuryArchives from "./components/TreasuryArchive";
import Village from "./components/Village";
import MapScreen from "./components/MapScreen";
import MyDocuments from "./components/MyDocuments";
import MyCase from "./components/MyCase";
import Wrapper from "./components/Wrapper";
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
              <Cutscene></Cutscene>
            </Route>
            <Route path="/places">
              <Wrapper>
                <Route path="/places/mapscreen" exact>
                  <MapScreen></MapScreen>
                </Route>
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
          </Switch>

          <Route path="/mydocuments" exact>
            <MyDocuments></MyDocuments>
          </Route>
          <Route path="/mycase" exact>
            <MyCase></MyCase>
          </Route>
          <Route path="/presentscreen" exact>
            <PresentScreen></PresentScreen>
          </Route>
        </Router>
      </div>
    </DndProvider>
  );
}

export default App;
