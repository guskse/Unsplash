import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  //context
  const { setSearchTerm } = useGlobalContext();

  //funcs
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search"
          name="search"
          placeholder="cats"
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
