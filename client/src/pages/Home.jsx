import { useState, useEffect } from "react";
import ButtonsFilters from "../components/ButtonsFilters";
import NoFeedbackCard from "../components/NoFeedbackCard";
import SuggestionsCard from "../components/SuggestionsCard";
import { Link } from "react-router-dom";
function Home() {
  const [suggestionItems, setSuggestionItems] = useState([]);
  const [savedSuggestions, setSavedSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [feedbackCount, setFeedbackCount] = useState(0);

  // Refer back to React Extensions project - Home.jsx, and Card.jsx for code structures

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

      // NOTE: Want to return an array, store an array of objects in state - not making a brand new object

      setSuggestionItems(newestSuggestionsFromAPI);
    } catch (error) {
      console.error("Error", error);
    }
  };

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

  const suggestionList = suggestionItems;

  useEffect(() => {
    const updateFeedbackCount = async () => {
      const currentCount = suggestionItems.length;
      setFeedbackCount(currentCount);
    };
    updateFeedbackCount();
  }, [suggestionItems]);

  useEffect(() => {
    getSuggestionsByCategory(selectedCategory);
    renderSuggestions();
  }, []);

  return (
    <>
      <div className="home-wrapper">
        {/* Fixed side-bar to sidebar to match css */}
        <div className="sidebar">
          <div className="my-company-card">
            <h3>My Company</h3>
            <p>Feedback Board</p>
          </div>

          <div className="buttons-container">
            <ButtonsFilters onClick={handleClick} />
          </div>
        </div>

        <div className="main-content">
          <div className="feedback-header-bar">
            <h2 className="feedback-count">{feedbackCount} Suggestions</h2>
            <Link to="/AddFeedback">
              <button>+ Add Feedback</button>
            </Link>
          </div>
          <div className="feedback-cards">
            {/* Create conditional statement If the list is not empty, show the list, if the list is empty show NoFeedbackCard */}
            {suggestionList.length > 0 ? (
              <div className="suggestion-list">
                {suggestionList.map((suggestion) => (
                  <SuggestionsCard
                    key={suggestion.suggestions_id}
                    suggestion={suggestion}
                  />
                ))}
              </div>
            ) : (
              <NoFeedbackCard />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
