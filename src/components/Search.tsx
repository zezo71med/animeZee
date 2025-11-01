import { useDispatch } from "react-redux";
import { setSearchTerm as setSearchTermAction } from "../state/search/searchTerm";
import { useDebounce } from "react-use";
import { useEffect, useState } from "react";
import type { AppDispatch } from "../state/Store";

const Search = () => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [localSearchTerm, setLocalSearchTerm] = useState<string>("");
  useDebounce(() => setDebouncedSearchTerm(localSearchTerm), 700, [localSearchTerm]);

  const dispatch = useDispatch<AppDispatch>();

  const serSearchTerm = (term: string) => {
    setLocalSearchTerm(term);
  };

  useEffect(() => {
    // dispatch the debounced value to the store
    dispatch(setSearchTermAction(localSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div className="search">
      <div className="">
        <input
          type="text"
          placeholder="Search for movies..."
          value={localSearchTerm}
          onChange={(e) => serSearchTerm(e.target.value)}
        />
        <img src="./search.svg" alt="Search" />
      </div>
    </div>
  );
};

export default Search;
