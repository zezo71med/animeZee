const Trending = ({trending}:{trending:any}) => {    
  return (
    <div className="trending">
                  <h2>Trending Movies</h2>

      <ul>
        {trending.length > 0 &&
          trending.map((item:any, index:number) => (
            <li key={item.$id}>
              <p>{index + 1}</p>
              <img src={item.poster_url} alt={item.searchTerm} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Trending;
