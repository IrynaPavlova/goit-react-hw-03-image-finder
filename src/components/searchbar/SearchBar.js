import React from "react";
import PropTypes from "prop-types";
import styles from "./searchbar.module.css";

const SearchBar = ({ value, handleChange, onSubmit }) => (
  <header className={styles.Searchbar}>
    <form onSubmit={onSubmit} className={styles.SearchForm}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        value={value}
        onChange={handleChange}
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
