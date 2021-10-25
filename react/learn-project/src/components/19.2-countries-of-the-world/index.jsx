import React, { useState, useEffect } from "react";

const CountriesOfTheWorld = () => {
  const [countries, setCountries] = useState([]);
  const [originalCountries, setOriginalCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();
      setCountries(countries);
      setOriginalCountries(countries);
    };
    getCountries();
  }, []);
  const handleChange = (e) => {
    const userInput = e.currentTarget.value.toLowerCase();
    const filtered = [...originalCountries].filter((c) =>
      c.name.toLowerCase().includes(userInput)
    );

    setCountries(filtered);
  };

  return (
    <>
      <input
        style={{ fontSize: "1.5rem" }}
        type="text"
        onChange={handleChange}
      />
      <ul>
        {countries.map((country) => (
          <li style={{ fontSize: "1.5rem" }} key={country.alpha2Code}>
            {country.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountriesOfTheWorld;
