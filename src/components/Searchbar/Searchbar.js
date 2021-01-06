import { useState } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ onSubmitForm }) {
  const [inputValue, setInputValue] = useState('');

  const onInputValue = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const onSubmitSearchForm = e => {
    e.preventDefault();
    onSubmitForm(inputValue);
    setInputValue('');
  };

  return (
    <header className="Searchbar">
      <form id="form" onSubmit={onSubmitSearchForm} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputValue"
          value={inputValue}
          id="input"
          onChange={onInputValue}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
