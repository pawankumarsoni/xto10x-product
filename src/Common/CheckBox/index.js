import React from "react";

function Checkbox({ name, value, handleFilter }) {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={handleFilter}
        id={value}
        className="fw-bold"
      />
      <label className="px-2">{name}</label>
    </div>
  );
}

export default Checkbox;
