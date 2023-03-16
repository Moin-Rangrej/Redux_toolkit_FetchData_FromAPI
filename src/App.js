import Cakeview from "./components/Cakeview";
import Countview from "./components/Countview";
import Navbar from "./components/Navbar";
import Showuserdata from "./components/Showuserdata";
import Todoview from "./components/Todoview";

function App() {
  return (
    <div>
    <Navbar />
      <Countview />
      <Showuserdata />
      <Todoview />
      <Cakeview />
    </div>
  );
}

export default App;
