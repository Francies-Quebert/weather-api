import React, { useState, useEffect } from "react";
import conditions from "../../assets/condition.json";
import "./card.css";
import TemperatureIcon from "./TemperatureIcon";
import SunriseIcon from "./SunriseIcon";
import SunsetIcon from "./SunsetIcon";
import { getAMPM } from "../../utils/lib";

type Props = {
  data: TWeatherData;
  astronomy: TAstronomy;
};

function Card({ data, astronomy }: Props) {
  const [background, setBackground] = useState<
    React.CSSProperties | undefined
  >();
  const handleBg = () => {
    const bg = conditions.filter((condition) => {
      return condition.code === data.current.condition.code;
    });
    setBackground({
      backgroundImage: `url("/images/${bg[0].bg}")`,
    });
  };

  useEffect(() => {
    handleBg();
  }, [data.current.condition.code]);


  const { astro } = astronomy;

  return (
    <div className="card_container" style={background}>
      <div className="card_overlay">
        {/* Display Name */}
        <div>
          <div>
            <h1>{data.location.name}</h1>
          </div>
          <div className="country_name"> {data.location.country}</div>
          <div className="condition_name"> {data.current.condition.text}</div>
        </div>
        {/* Display Temperature */}
        <div className="temp_container">
          <div className="temp_Icon">
            <TemperatureIcon />
          </div>
          <h1>
            {data.current.temp_c} <sup>o</sup>C
          </h1>
        </div>
        {/* Display Date Time */}
        <div>
          <div>{data.location.localtime.split(" ")[0]}</div>
          <div>
            <h2>{getAMPM(data.location.localtime.split(" ")[1])}</h2>
          </div>
        </div>
        {/* Display Sunrise and Sunset */}
        <div className="sunrise_sunset_container">
          <div className="sunrise_container">
            <div>
              <SunriseIcon width="40px" height="40px" fill="#FFF"/>
            </div>
            <div>{astro.sunrise}</div>
          </div>
          <div className="sunrise_container">
            <div>
              <SunsetIcon width="40px" height="40px" fill="#FFF"/>
            </div>
            <div>{astro.sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
