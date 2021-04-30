import { Component } from "react";
import s from "./SearchBar.module.css";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = { query: "" };

  reset = () => {
    this.setState({ query: "" });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={s.SearchFormButton}
            onClick={this.handleSubmit}
          >
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

