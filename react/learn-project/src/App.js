import "./App.css";
import HelloWorld from "./components/2.1-hello-world";
import BasicOfJsx from "./components/2.2-basics-of-jsx";
import Boxes from "./components/3.1-boxes";
import Quiz from "./components/3.2-quiz";
import Button from "./components/4.1-buttons";

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <BasicOfJsx /> */}
      {/* <div className="Boxes">
        <Boxes />
      </div> */}
      {/* <Quiz /> */}
      <Button
        value="Important"
        buttonStyle={{
          fontSize: "3rem",
          fontWeight: "bold",
          padding: "0.5rem",
        }}
      />
      <Button
        value="Not Important"
        buttonStyle={{ fontSize: "3rem", padding: "0.5rem" }}
      />
    </div>
  );
}

export default App;
