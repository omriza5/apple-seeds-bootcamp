import React from "react";
import "./style.css";

const RANDOM_JOKE_ENDPOINT = "https://api.chucknorris.io/jokes/random";
const RANDOM_JOKE_BY_CATEGORY_ENDPOINT =
  "https://api.chucknorris.io/jokes/random?category=";
const JOKE_CATEGORIES_ENDPOINT = "https://api.chucknorris.io/jokes/categories";
const JOKE_FREE_TEXT_ENDPOINT =
  "https://api.chucknorris.io/jokes/search?query=";

class ChuckNorris extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: "animal",
      joke: "",
      jokeByCategory: "",
      searchQuery: "",
      freeTextJokes: [],
    };
  }
  componentDidMount = async () => {
    try {
      const categoryList = await this.getCategories();
      this.setState({ ...this.state, categories: categoryList });
    } catch (error) {}
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      const { value: jokeByCategory } = await this.getRandomJokeByCategory();

      this.setState({ ...this.state, jokeByCategory });
    }

    if (prevState.searchQuery !== this.state.searchQuery) {
      if (this.state.searchQuery.length >= 3) {
        const { result: jokes } = await this.getJokesByFreeText();
        this.setState({ ...this.state, freeTextJokes: jokes });
      }
    }
  };

  getCategories = async () => {
    try {
      const response = await fetch(JOKE_CATEGORIES_ENDPOINT);
      return await response.json();
    } catch (error) {
      console.log("ERROR: getCategories", error);
    }
  };

  getRandomJoke = async () => {
    try {
      const response = await fetch(RANDOM_JOKE_ENDPOINT);
      return response.json();
    } catch (error) {
      console.log("ERROR: getRandomJoke", error);
    }
  };
  getRandomJokeByCategory = async () => {
    try {
      const response = await fetch(
        `${RANDOM_JOKE_BY_CATEGORY_ENDPOINT}${this.state.selectedCategory}`
      );
      return await response.json();
    } catch (error) {
      console.log("ERROR: getRandomJoke", error);
    }
  };

  getJokesByFreeText = async () => {
    try {
      // this.state.searchQuery
      const response = await fetch(
        `${JOKE_FREE_TEXT_ENDPOINT}${this.state.searchQuery}`
      );
      return await response.json();
    } catch (error) {
      console.log("ERROR: getJokesByFreeText", error);
    }
  };

  handleSelect = (e) => {
    const userSelect = e.currentTarget.value;
    this.setState({ ...this.state, selectedCategory: userSelect });
  };

  handleRandomJoke = async () => {
    const { value: joke } = await this.getRandomJoke();
    this.setState({ ...this.state, joke });
  };
  render() {
    return (
      <div className="chuck-norris-main">
        <div className="get-random">
          <h1>Click To See Random Joke</h1>
          <input
            type="submit"
            value="Get Joke"
            onClick={this.handleRandomJoke}
          />
          <p>{this.state.joke}</p>
        </div>
        <div className="line" />
        <div className="get-by-select">
          <h1>Get Joke by Category</h1>
          <select
            className="chuck-norris-select"
            name="category"
            id=""
            onChange={this.handleSelect}
            value={this.state.selectedCategory}
          >
            {this.state.categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <p>{this.state.jokeByCategory}</p>
        </div>
        <div className="line"></div>
        <div className="search-section">
          <input
            type="text"
            placeholder="Get Jokes By free text"
            onChange={(e) =>
              this.setState({
                ...this.state,
                searchQuery: e.currentTarget.value,
              })
            }
          />
          {this.state.freeTextJokes && (
            <ol className="jokes-list">
              {this.state.freeTextJokes.map((joke, index) => (
                <li key={index}>{joke.value}</li>
              ))}
            </ol>
          )}
          {this.state.freeTextJokes.length === 0 && (
            <p style={{ color: "red", fontWeight: "bold", fontSize: "2.5rem" }}>
              Nothing To Show, Search Again
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ChuckNorris;
