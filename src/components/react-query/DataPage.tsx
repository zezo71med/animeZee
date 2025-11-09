import { NavLink, useParams } from "react-router-dom";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";

const DataPage = () => {
    const {id }= useParams()
    const {data}=useHeroesQuery('super-heroes',id)
    console.log(data);
    
    return (<>
    <NavLink to="/rq/rqMainpage"> rqMainpage</NavLink>
<NavLink to="/rq/rqDatapage"> rqDatapage</NavLink>
<NavLink to="/rq/rqpage"> rqpage</NavLink>
    
    <div className="mt-4">
        <div className="card">
            {data&&
            <h3><div className="">{data.data.name}</div></h3>
            }
        </div>
    </div>
    
    </>  );}
 
export default DataPage;