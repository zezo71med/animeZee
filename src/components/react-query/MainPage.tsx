import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [homeData, sethomeData] = useState([]);
useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(
        (res:any)=>{
sethomeData(res.data)
setIsLoading(false)
        },(error:any)=>{
            console.log("error fetch super heroes",error);
            setIsLoading(false)
        }
    )
}, []);

  return (
    <>
      <NavLink to="/rq/rqMainpage"> rqMainpage</NavLink>
      <NavLink to="/rq/rqDatapage"> rqDatapage</NavLink>
      <NavLink to="/rq/rqpage"> rqpage</NavLink>

      <div className="mt-4">hello MainPage</div>
      {homeData.length>0&&
      homeData.map((item)=>(
        <div className="card" key={item.name}>
            <h3>{item.name}</h3>
        </div>
      ))}
    </>
  );
};

export default MainPage;
