import React, { useState, useEffect } from "react";
import "./style.css";

const RANDOM_JOKE_ENDPOINT = "https://api.chucknorris.io/jokes/random";
const RANDOM_JOKE_BY_CATEGORY_ENDPOINT =
  "https://api.chucknorris.io/jokes/random?category=";
const JOKE_CATEGORIES_ENDPOINT = "https://api.chucknorris.io/jokes/categories";
const JOKE_FREE_TEXT_ENDPOINT =
  "https://api.chucknorris.io/jokes/search?query=";

const ChuckNorrisWithHooks = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("animal");
  const [joke, setJoke] = useState("");
  const [jokeByCategory, setJokeByCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [freeTextJokes, setFreeTextJokes] = useState([]);

  useEffect(() => {
    const getCategoriesList = async () => {
      try {
        const categoryList = await getCategories();
        setCategories(categoryList);
      } catch (error) {}
    };
    getCategoriesList();
  }, []);

  useEffect(() => {
    const randomJokeByCat = async () => {
      const { value: jokeByCategory } = await getRandomJokeByCategory();
      setJokeByCategory(jokeByCategory);
    };

    const getFreeTextJoke = async () => {
      if (searchQuery.length >= 3) {
        const { result: jokes } = await getJokesByFreeText();
        setFreeTextJokes(jokes);
      }
    };
    randomJokeByCat();
    getFreeTextJoke();
  }, [searchQuery, selectedCategory]);

  const getCategories = async () => {
    try {
      const response = await fetch(JOKE_CATEGORIES_ENDPOINT);
      return await response.json();
    } catch (error) {
      console.log("ERROR: getCategories", error);
    }
  };

  const getRandomJoke = async () => {
    try {
      const response = await fetch(RANDOM_JOKE_ENDPOINT);
      return response.json();
    } catch (error) {
      console.log("ERROR: getRandomJoke", error);
    }
  };
  const getRandomJokeByCategory = async () => {
    try {
      const response = await fetch(
        `${RANDOM_JOKE_BY_CATEGORY_ENDPOINT}${selectedCategory}`
      );
      return await response.json();
    } catch (error) {
      console.log("ERROR: getRandomJoke", error);
    }
  };

  const getJokesByFreeText = async () => {
    try {
      // this.state.searchQuery
      const response = await fetch(`${JOKE_FREE_TEXT_ENDPOINT}${searchQuery}`);
      return await response.json();
    } catch (error) {
      console.log("ERROR: getJokesByFreeText", error);
    }
  };

  const handleSelect = (e) => {
    const userSelect = e.currentTarget.value;
    setSelectedCategory(userSelect);
  };

  const handleRandomJoke = async () => {
    const { value: joke } = await getRandomJoke();
    setJoke(joke);
  };

  return (
    <div className="chuck-norris-main">
      <div className="get-random">
        <h1>Click To See Random Joke</h1>
        <input type="submit" value="Get Joke" onClick={handleRandomJoke} />
        <p>{joke}</p>
      </div>
      <div className="line" />
      <div className="get-by-select">
        <h1>Get Joke by Category</h1>
        <select
          className="chuck-norris-select"
          name="category"
          id=""
          onChange={handleSelect}
          value={selectedCategory}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <p>{jokeByCategory}</p>
      </div>
      <div className="line"></div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Get Jokes By free text"
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
        {freeTextJokes && (
          <ol className="jokes-list">
            {freeTextJokes.map((joke, index) => (
              <li key={index}>{joke.value}</li>
            ))}
          </ol>
        )}
        {freeTextJokes.length === 0 && (
          <p style={{ color: "red", fontWeight: "bold", fontSize: "2.5rem" }}>
            Nothing To Show, Search Again
          </p>
        )}
      </div>
    </div>
  );
};

export default ChuckNorrisWithHooks;
