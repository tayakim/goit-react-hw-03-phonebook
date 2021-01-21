import React from "react";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <p>Find contacts by name: </p>
      <input
        placeholder="type name..."
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </>
  );
};

export default Filter;
