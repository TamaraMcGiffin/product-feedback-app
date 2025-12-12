import React from "react";

//moved outside function
const filterCategories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

function ButtonsFilters({ onClick }) {
  return (
    <>
      <div className="buttons-card">
        {filterCategories.map((category) => (
          <button key={category} onClick={() => onClick(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsFilters;
