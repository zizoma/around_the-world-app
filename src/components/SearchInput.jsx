import React from "react";

const SearchInput = ({ countrieslist, filterdCountriesList }) => {
  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    const filterdcountries =
      !searchTerm || searchTerm === ""
        ? countrieslist
        : countrieslist.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
          );
    filterdCountriesList(filterdcountries);
  }
  return (
    <form onSubmit={handleSearch} className="relative mx-3 flex-1 items-center">
      <div className="absolute top-4 left-8">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#848484"
          />
        </svg>
      </div>
      <input
        type="text"
        name="search"
        className="h-12 w-full max-w-md rounded-full pl-20 shadow md:h-14 dark:bg-gray-800 dark:text-gray-50"
        placeholder={"Search for a country"}
      />
    </form>
  );
};

export default SearchInput;
