import { useState } from "react";

const Daily = (props) => {
  const [data, setData] = useState("");

  const dailyWeather = (props) => {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/` +
        props.keyc +
        `?apikey=6AGH7bAYcHj9XqqadGINTle6oxyCtNnq&details=true`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  return (
    <div>
      <div>
        <h1>{}</h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Daily;
