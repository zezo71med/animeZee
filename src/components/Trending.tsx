import { useContext } from "react";
import AppProvider, { AppContext } from "../context/AppProvider";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../state/Store";
import { updateCounter } from "../state/reducers/Counyter";

const Trending = ({ trending }: { trending: any }) => {
  const dispach=useDispatch<AppDispatch>()
  const {name} = useContext(AppContext)
 const increment=()=>{
    dispach(updateCounter(1))
 }
 const decrement=()=>{
      dispach(updateCounter(-1))

 }
  return (
    <div className="trending">
      {trending.length > 0 &&           
      <>
      <h2>Trending Movies</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>here you can update counter Redux </h2>
      <ul>
         { trending.map((item:any, index:number) => (
            <li key={item.$id}>
              <p>{index + 1}</p>
              <img src={item.poster_url} alt={item.searchTerm} />
            </li>
          ))}
      </ul></>}
    </div>
  );
};

export default Trending;
