import "./App.css";
import HelloWorld from "./components/2.1-hello-world";
import BasicOfJsx from "./components/2.2-basics-of-jsx";
import Boxes from "./components/3.1-boxes";
import Quiz from "./components/3.2-quiz";
import Button from "./components/4.1-buttons";
import Card from "./components/4.2-cards";
import Counter from "./components/7.1-increment";
import HideAndSeek from "./components/7.2-hide-and-seek";
import LifeCycle from "./components/8.1-life-cycle-methods";
import BoxAnimation from "./components/8.2-box-animation";
import ChangingBox from "./components/8.3-changing-box";
import SpinnerTimer from "./components/9.1-spinner";
import ChuckNorris from "./components/12.1-chuck-norris";
import ChildToFather from "./components/11.1-child-to-father";
import CheckboxList from "./components/11.2-checkbox/index";
import FormReview from "./components/11.3-form-review";
import DataMassaging from "./components/13.1-data-massaging";

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <BasicOfJsx /> */}
      {/* <div className="Boxes">
        <Boxes />
      </div> */}
      {/* <Quiz /> */}
      {/* <Button
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
      /> */}
      {/* <Card /> */}
      {/* <Counter /> */}
      {/* <HideAndSeek /> */}
      {/* <LifeCycle /> */}
      {/* <BoxAnimation /> */}
      {/* <ChangingBox /> */}
      {/* <SpinnerTimer /> */}
      {/* <ChuckNorris /> */}
      {/* <ChildToFather /> */}
      {/* <CheckboxList /> */}
      {/* <FormReview /> */}
      <DataMassaging />
    </div>
  );
}

export default App;
