import React from "react";
import { useEffect, useState } from "react";


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const json = await data.json();
      setCountries(json);
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="container">
        {countries.map((flag)=>(
            <div className="card">
            <img src={flag.flags.png} alt = {flag.flags.alt}  className="image"/>
            <h2>{flag.name.common}</h2>
            </div>
        ))}
      </div>    
  );
};

export default Countries;
