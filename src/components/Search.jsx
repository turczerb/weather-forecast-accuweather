import { useState } from "react";

const Search = ({ placeholder, props }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState("");
  const [list, setList] = useState({});

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
    // const newFilter = data.filter((value) => {
    //   return value.LocalizedName.toLowerCase().includes(
    //     searchWord.toLowerCase()
    //   );
    // });
    // setFilteredData(newFilter);
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
              <a href="h">
                <p>{value.LocalizedName}</p>
              </a>
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
