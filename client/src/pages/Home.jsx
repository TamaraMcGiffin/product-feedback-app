//Correct filepaths for components, tested and works!
// Render NoFeedBackCard in here
import { useState, useEffect } from "react";
//forgot to import yay, worked out!
import ButtonsFilters from "../components/ButtonsFilters";
// import NoFeedbackCard from "../components/NoFeedbackCard";
import SuggestionsCard from "../components/SuggestionsCard";

function Home() {
  // const [savedSuggestionsData, setSavedSuggestionsData] = useState([]);
  const [suggestionItems, setSuggestionItems] = useState([]);
  const [savedSuggestions, setSavedSuggestions] = useState([]);

  const handleClick = (category) => {
    console.log(`Filter button clicked for ${category}`);
  };
  // const getSuggestionsByCategory = async () => {
  //   try {
  //     const response = await fetch(
  //       "/api/get-suggestions-by-category/:category"
  //     );
  //     if (!response.ok) {
  //       console.error("Error retrieving suggestion", response.status);
  //       return;
  //     }
  //     const newestSuggestionFromAPI = await response.json();
  //     console.log("New suggestion data", newestSugggestionFromAPI);
  //     if (!newestSuggestionFromAPI) {
  //       console.log("No new suggestion found");
  //       return;
  //     }
  //     setSuggestionInfo({
  //       title: newestSuggestionFromAPI.title,
  //       category: newestSuggestionFromAPI.category,
  //       // fixed dot notation from country to country_name
  //       detail: newestSuggestionFromAPI.detail,
  //     });
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };

  // Next: Need to move render suggestions to Home Page and keep working on it

  const renderSuggestions = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");

      if (!response.ok) {
        console.error("Error", response.status);
        return;
      }

      const suggestionsAPIData = await response.json();
      setSuggestionItems(suggestionsAPIData);
      setSavedSuggestions(suggestionsAPIData);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const suggestionList = suggestionItems;

  useEffect(() => {
    // getSuggestionsByCategory();
    renderSuggestions();
  }, []);

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div className="my-company-home-card">
        <h3>My Company</h3>
        <p>Feedback Board</p>
      </div>
      <ButtonsFilters onClick={handleClick} />

      {/* <NoFeedbackCard /> */}
      <div className="suggestion-list">
        {suggestionList.map((suggestion) => (
          <SuggestionsCard
            key={suggestion.suggestions_id}
            suggestion={suggestion}
            // Fixed key mapping - rendering now!
          />
        ))}
      </div>
    </>
  );
}

export default Home;

//Mapping example from Countries App for reference

// {/* <div className="countries-container">
//   {/* Here I am using the map method to iterate over the array of countriesData and using the prop name "country" */}
//   {countriesData.map((country) => (
//     // Here I am assigning the data to the CountryCard component and using dot notation to identify the key
//     // and it's items for rendering back in the card
//     // country={country} is being useed here to assign the country prop to the CountryCard component
//     <CountryCard key={country.name.common} country={country} />
//   ))}
// </div>; */}
