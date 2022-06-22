import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import "./Home.css";

function Home() {
  const [city, setCity] = useState("");
  const [getWeather, { loading, error, data }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: city },
    }
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>We have an error...</h2>;
  }

  if(data) {
      console.log(data)
  }


  return (
    <div className="home">
      <h1>Weather</h1>
      <input
        type={"text"}
        placeholder="Search for a city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getWeather()}>Search</button>
      <div>
        {data && (
          <>
            <h1>City: {data?.getCityByName?.name}</h1>
            <h2>Country: {data?.getCityByName?.country}</h2>
            <h2>Temperature: {5 / 9 * (data?.getCityByName?.weather?.temperature?.actual - 32)} </h2>
            <h2>Description: {data?.getCityByName?.weather?.summary?.description} </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
