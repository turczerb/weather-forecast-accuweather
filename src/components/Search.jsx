import { useState } from "react";
import data from "../data";

const Search = ({ placeholder, props }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState("");
  const [keyc, setKeyc] = useState("");

  const searchCity = (searchQuery) => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=6AGH7bAYcHj9XqqadGINTle6oxyCtNnq&q=` +
        searchQuery
    )
      .then((res) => res.json())
      .then((result) => {
        setFilteredData(result);
        console.log(result);
      });
  };

  const handleInputChange = (e) => {
    const searchWord = e.target.value;
    setData(searchWord);
    searchCity(searchWord);
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          placeholder={placeholder}
          onKeyDown={searchCity}
          onChange={handleInputChange}
        />
        <div className="searchIcon"></div>
      </div>
      {filteredData.length !== 0 ? (
        <div className="result">
          {filteredData.map((value, key) => {
            return (
              <div href="h" onClick={() => setKeyc(value.key)}>
                <p>{value.LocalizedName}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
