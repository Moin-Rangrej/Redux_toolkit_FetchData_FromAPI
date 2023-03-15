import Cakeview from "./components/Cakeview";
import Countview from "./components/Countview";
import Showuserdata from "./components/Showuserdata";
import Todoview from "./components/Todoview";

function App() {
  return (
    <div className="App">
      <Countview />
      <Showuserdata />
      <Todoview />
      <Cakeview />
    </div>
  );
}

export default App;
