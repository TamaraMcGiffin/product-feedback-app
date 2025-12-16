import React from "react";
// Am I missing something up here? Thinking only need to export this file not bring anything into it
// useState? Thinking no, just a component, no use states changing in here but maybe affects Home.jsx code?

//moved outside function
// worked on testing clicks, don't alter code before asking! - just needed to connect buttons to api call
const filterCategories = [
  "All",
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
];

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
