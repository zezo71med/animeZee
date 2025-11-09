import { useCallback, useState } from "react";
import ViewCounter from "../components/counter";
import Increment from "../components/Increment";
const Services = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increment = () => {
    console.log("click Incrament");

    setCounter((prev) => prev + 1);
  };
  const increment2 = useCallback(() => {
    console.log("click Incrament");

    setCounter2((prev) => prev + 1);
  }, [counter2]);
  
  return (
    <div className="container">
      <h1>Services Page</h1>
      <ViewCounter counter={counter} />
      <Increment Increment={increment} />
      <ViewCounter counter={counter2} />
      <button onClick={increment2} >increment2</button>
    </div>
  );
};

export default Services;