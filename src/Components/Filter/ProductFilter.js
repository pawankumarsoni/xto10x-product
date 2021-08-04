import React from "react";
import Checkbox from "../../Common/CheckBox";

function ProductFilter({ categories = [], handleFilter }) {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <Checkbox
            key={category + index}
            name={category}
            value={category}
            handleFilter={(e) =>
              handleFilter({ type: "category", value: e.target.value })
            }
          />
        );
      })}
    </div>
  );
}

export default ProductFilter;
