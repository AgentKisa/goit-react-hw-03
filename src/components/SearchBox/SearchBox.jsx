import React from "react";

const SearchBox = ({ value, search }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="name"
        value={value}
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
