import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, serSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt=" Hero Banner" />
          <h1>
            find <span className="text-gradient">Movies</span> you'll Enjoy
            without the hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} serSearchTerm={serSearchTerm} />
      </div>
    </main>
  );
};
export default App;
