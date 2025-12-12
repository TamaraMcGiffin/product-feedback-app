//Correct filepaths for components, tested and works!
// import { useState } from "react";
//forgot to import yay, worked out!
import ButtonsFilters from "../components/ButtonsFilters";

import NoFeedbackCard from "../components/NoFeedbackCard";
// import SuggestionsCard from "../components/SuggestionsCard";

function Home() {
  const handleClick = (category) => {
    console.log(`Filter button clicked for ${category}`);
  };
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div className="my-company-home-card">
        <h3>My Company</h3>
        <p>Feedback Board</p>
      </div>
      <ButtonsFilters onClick={handleClick} />

      <NoFeedbackCard />

      {/* <SuggestionsCard /> */}
    </>
  );
}

export default Home;
