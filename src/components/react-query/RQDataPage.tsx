import { NavLink } from "react-router-dom";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";

const RQDataPage = () => {
  const { data, isLoading, error, isError, isFetching, refetch } =
    useHeroesQuery("super-heroes");

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <NavLink to="/rq/rqMainpage"> rqMainpage</NavLink>
      <NavLink to="/rq/rqDatapage"> rqDatapage</NavLink>
      <NavLink to="/rq/rqpage"> rqpage</NavLink>
      <div className="mt-4">hello MainPage</div>
      <button onClick={() => refetch()} className="btn btn-grean">
        update
      </button>
      {data &&
        data.data.map((item) => (
          <NavLink to={`/rq/rqdata/${item.id}`} key={item.i}>
            <div className="card" key={item.name}>
              <h3>{item.name}</h3>
            </div>
          </NavLink>
        ))}
    </>
  );
};

export default RQDataPage;
