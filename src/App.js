import './App.css';

import Header from "./components/Header"
import MountainBike from "./components/MountainBike"
import RoadBike from "./components/RoadBike"
import GravelBike from "./components/GravelBike"
import ElectricBike from "./components/ElectricBike"

function App() {
  return (
    <div className="App">
      <Header />
      <MountainBike />
      <RoadBike />
      <GravelBike />
      <ElectricBike />
    </div>
  );
}

export default App;
