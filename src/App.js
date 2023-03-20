import "./App.css";
import Model from "./Model";
import { hero } from "./Utils/callApplyBind";
import { findVowel } from "./Utils/findvowel";
import { sumOfThreeElement } from "./Utils/promise";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Model />
      </header>
    </div>
  );
}

export default App;
