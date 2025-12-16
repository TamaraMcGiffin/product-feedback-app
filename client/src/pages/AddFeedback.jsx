// Refer back to form code in SavedCountries.jsx/Countries App project to pull form data and render

import { Link } from "react-router-dom";
import { useState } from "react";

// pages/AddFeedback.jsx
function AddFeedback() {
  const emptyFormState = { title: "", category: "", detail: "" };
  const [formData, setFormData] = useState(emptyFormState);

  const [suggestionInfo, setSuggestionInfo] = useState([]);

  const handleInputChange = (e) => {
    // Destructuring method used to extract name & value properties
    const { name, value } = e.target;
    // Setting formData's useState using a key/value pair
    setFormData({ ...formData, [name]: value });
  };

  // Step 1: Declare a new function called storeUserData() which should send a POST request to the API to the /add-one-user endpoint
  // Step 2: Call the storeUserData() function on submit

  const storeFeedbackData = async () => {
    // When we call the fetch() function, we only need to pass in
    // The API url as one parameter when it's a GET request
    // When we need to make a POST request, we have to pass in a second parameter: an Object

    // Test in Postman to see if working still and test front and back end POST http://localhost:3000/add-one-suggestion ✅
    const response = await fetch("/api/add-one-suggestion", {
      method: "POST", // We need to say we're sending a POST request because by default it's always a GET request
      headers: {
        // Headers is where we put metadata about our request, including the data type that we pass in the body
        // In this case, we are saying we're passing in JSON data in the body
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        category: formData.category,
        detail: formData.detail,
      }),
    });
  };
  // handleSubmit function handles the event (e) object when form is submitted, preventDefault keeps it from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "form was submitted");

    storeFeedbackData();
    // Setting user info to formData
    setSuggestionInfo(formData);
    // Resets the form to empty state
    setFormData(emptyFormState);
  };

  const getSuggestionsByCategory = async () => {
    try {
      const response = await fetch(
        "/api/get-suggestions-by-category/:category"
      );
      if (!response.ok) {
        console.error("Error retrieving suggestion", response.status);
        return;
      }
      const newestSuggestionFromAPI = await response.json();
      console.log("New suggestion data", newestSugggestionFromAPI);
      if (!newestSuggestionFromAPI) {
        console.log("No new suggestion found");
        return;
      }
      setSuggestionInfo({
        title: newestSuggestionFromAPI.title,
        category: newestSuggestionFromAPI.category,
        // fixed dot notation from country to country_name
        detail: newestSuggestionFromAPI.detail,
      });
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

      const savedSuggestionsData = await response.json();
      // Fixed and debugged here 12/14
      const savedSuggestionsList = savedSuggestionsData.map(
        (savedSuggestionToList) => savedSuggestionToList.title
      );
      // Fixed misspelling names to name
      const allSavedSuggestions = SuggestionsData.filter((suggestion) =>
        savedSuggestionsList.includes(suggestion.name.common)
      );
      setSavedSuggestions(allSavedSuggestions);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // useEffect(() => {
  //   getSuggestionsByCategory();
  //   renderSuggestions();
  // }, []);

  return (
    <>
      <Link to="/"> Go Back </Link>

      <div className="feedback-form">
        <h1> Create New Feedback</h1>
        {/* Attach onsubmit handlers and dot notation to link api call to form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Feedback Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
          />

          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>

          <label htmlFor="detail">Feedback Detail</label>
          <textarea
            id="detail"
            name="detail"
            required
            value={formData.detail}
            onChange={handleInputChange}
          />
          {/* Wrap buttons in link for path back to Home page */}
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>

          <button type="submit">Add Feedback</button>
        </form>
      </div>
    </>
  );
}

export default AddFeedback;
