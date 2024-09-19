import { useState } from "react";
import TopRate from '../Components/TopRate';
import Trending from '../Components/Trending'; 
import Popular from '../Components/Popular';
import "./search.css";

function Search() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase); // Update inputText
  };

  return (
    <>
    <div className="main">
      <h1>Welcome Back</h1>
      <h2>Millions of Movies, TV Shows and people to discover. Explore Now.</h2>
      <div className="search">
        <div className="search-local">
          <div className="icon">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <input
            type="text"
            placeholder="Search in Movie"
            onChange={inputHandler}
          />
          <button>
            <p>Search</p>
            <ion-icon name="search-outline" className="search-icon"></ion-icon>
          </button>
        </div>
      </div>
    </div>
    
    {/* Passing inputText as a prop to other components */}
    <TopRate searchQuery={inputText} />
    <Trending searchQuery={inputText} />
    <Popular searchQuery={inputText} />
    </>
  );
}

export default Search;
