
interface SearchProps {
    searchTerm: string;
    serSearchTerm: (term: string) => void;
}

const Search = ({searchTerm,serSearchTerm}:SearchProps) => {
    return ( 
    <div className="search">
        <div className="">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                value={searchTerm}
                onChange={(e) => serSearchTerm(e.target.value)}
            />
                <img src="./search.svg" alt="Search" />
        </div>
    </div>
     );
}
 
export default Search;