import "./App.css";
import HelloWorld from "./components/2.1-hello-world";
import BasicOfJsx from "./components/2.2-basics-of-jsx";
import Boxes from "./components/3.1-boxes";
import Quiz from "./components/3.2-quiz";

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <BasicOfJsx /> */}
      {/* <div className="Boxes">
        <Boxes />
      </div> */}
      <Quiz />
    </div>
  );
}

export default App;
