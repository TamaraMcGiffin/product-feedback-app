//Correct filepaths for components, tested and works!
// Render NoFeedBackCard in here
// Add count function in here - refer to getNewCountryCount function in CountryDetails.com for function and rendering
import { useState, useEffect } from "react";
//forgot to import yay, worked out!
import ButtonsFilters from "../components/ButtonsFilters";
import NoFeedbackCard from "../components/NoFeedbackCard";
import SuggestionsCard from "../components/SuggestionsCard";

function Home() {
  // const [savedSuggestionsData, setSavedSuggestionsData] = useState([]);
  const [suggestionItems, setSuggestionItems] = useState([]);
  const [savedSuggestions, setSavedSuggestions] = useState([]);
  // define a new useState to store specific, selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  // create a useState for count starting at 0
  const [feedbackCount, setFeedbackCount] = useState(0);

  // Refer back to React Extensions project - Home.jsx, and Card.jsx for code structures
  // pass through category
  const getSuggestionsByCategory = async (category) => {
    try {
      const response = await fetch(
        // Make category dynamic? Is this correct? Backticks, template literal?
        `/api/get-suggestions-by-category/${category}`
      );
      if (!response.ok) {
        console.error("Error retrieving suggestion", response.status);
        return;
      }

      const newestSuggestionsFromAPI = await response.json();
      //removed extra g from Suggestions, misspelling in console log threw an error
      console.log("New suggestion data", newestSuggestionsFromAPI);

      //removed unnecessary console log, conflicting?

      // if (!newestSuggestionFromAPI) {
      //   console.log("No new suggestion found");
      //   return;
      // }
      // NOTE: Want to return an array, store an array of objects in state - not making a brand new object
      // Follow similar format for category
      setSuggestionItems(newestSuggestionsFromAPI);
      // Throwing error, debug, not highlighting?
      // setSavedSuggestions(suggestionsAPIData);
    } catch (error) {
      console.error("Error", error);
    }
  };

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
  // Moved to below functions, maybe affects logic?
  // Add useState to handleClick function for filter button click
  const handleClick = (category) => {
    console.log(`Filter button clicked for ${category}`);
    setSelectedCategory(category);

    // conditional statement - if category is equal to all, render all suggestion, if not get suggestions by category
    if (category === "All") {
      renderSuggestions();
    } else {
      getSuggestionsByCategory(category);
    }
  };

  // Can I pull counts from here?
  const suggestionList = suggestionItems;
  //Create another variable tapping into suggestion Items for count?

  useEffect(() => {
    const updateFeedbackCount = async () => {
    const currentCount = suggestionItems.length;
    setFeedbackCount(currentCount);
    };
    updateFeedbackCount();
  }, [suggestionItems]);

    // useEffect(() => {
    //   const updateCountryCount = async () => {
    //     const newCount = await getNewCountryCount(countryName);
    //     setViewCount(newCount);
    //   };
    //   updateCountryCount();
    // }, [countryName]);

  useEffect(() => {
    getSuggestionsByCategory(selectedCategory);
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

      <div className="feedback-header-bar">
        <h2 className="feedback-count">{feedbackCount} Suggestions</h2>
      </div>
      {/* Create conditional statement If the list is not empty, show the list, if the list is empty show NoFeedbackCard */}
      {suggestionList.length > 0 ? (
        <div className="suggestion-list">
          {suggestionList.map((suggestion) => (
            <SuggestionsCard
              key={suggestion.suggestions_id}
              suggestion={suggestion}
              // Fixed key mapping - rendering now!
            />
          ))}
        </div>
      ) : (
        <NoFeedbackCard />
      )}
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
