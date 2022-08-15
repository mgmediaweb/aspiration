/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  const { newSearch, search } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    newSearch(10, e.target.search.value);
  };

  return (
    <header>
      <h1>Github Topic Seeker</h1>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="search"
          aria-required="true"
          autoComplete="off"
          name="search"
          placeholder="Search"
          type="text"
          defaultValue={search}
          required
        />
        <button name="submit" type="submit">Search</button>
      </form>
    </header>
  );
};

Header.propTypes = {
  newSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Header;
