import { useContext } from "react";
import AppProvider, { AppContext } from "../context/AppProvider";

const Trending = ({ trending }: { trending: any }) => {
  const {name} = useContext(AppContext)
  return (
    <div className="trending">
      {trending.length > 0 &&           
      <>
      <h2>Trending Movies</h2>
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
