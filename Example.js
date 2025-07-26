import React, { useState } from "react";
import "./Example.css";
import ExampleChildComponent from "./ExampleChildComponent.js";
const Example = (props) => {
  const [exampleState1, setExampleState1] = useState("dummy message");
  const [exampleState2, setExampleState2] = useState(0);

  useEffect(() => {
    get("/api/anEndpoint", { param1: "value" }).then((serverResponse) => {
      setExampleState1(serverResponse);
    });
  }, []);

  const addOneToState2 = () => {
    setExampleState2(exampleState2 + 1);
  };

  return (
    <div>
      <h1 className="headerStyle1">{props.title}</h1>
      <ExampleChildComponent exampleProp1={10} exampleProp2={exampleState2} />
      <button onClick={addOneToState2} />
    </div>
  );
};
export default Example;
