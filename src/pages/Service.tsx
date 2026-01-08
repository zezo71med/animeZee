import { useCallback, useState } from "react";
import ViewCounter from "../components/counter";
import Increment from "../components/Increment";
import { useGetTrendingQuery, useSearchMoviesMutation } from "../state/MoviesApi";
const Services = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const { data:trending } = useGetTrendingQuery();
  // const { data } = ;
  console.log("datas", trending);

  const increment = () => {
    console.log("click Incrament");

    setCounter((prev) => prev + 1);
  };
  const increment2 = useCallback(() => {
    console.log("click Incrament");

    setCounter2((prev) => prev + 1);
  }, [counter2]);
const searchToVenom=()=>{
useSearchMoviesMutation('venom')
}
  return (
    <div className="container">
      <h1>Services Page</h1>
      <h2 className="text-center">Movies with RTK Query</h2>
      {/* <ViewCounter counter={counter} />
      <Increment Increment={increment} />
      <ViewCounter counter={counter2} />*/}
      <button onClick={searchToVenom} >increment2</button> 
    </div>
  );
};

export default Services;
