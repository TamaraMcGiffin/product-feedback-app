import { Link } from "react-router-dom";
import { useState } from "react";

function AddFeedback() {
  const emptyFormState = { title: "", category: "UI", detail: "" };
  const [formData, setFormData] = useState(emptyFormState);

  const [suggestionInfo, setSuggestionInfo] = useState([]);

  const handleInputChange = (e) => {
    // Destructuring method used to extract name & value properties
    const { name, value } = e.target;
    // Setting formData's useState using a key/value pair
    setFormData({ ...formData, [name]: value });
  };

  const storeFeedbackData = async () => {
    // When we call the fetch() function, we only need to pass in
    // The API url as one parameter when it's a GET request
    // When we need to make a POST request, we have to pass in a second parameter: an Object

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

  return (
    <>
      <Link to="/">
        <button>Go Back</button>{" "}
      </Link>

      <div className="feedback-form">
        <h1> Create New Feedback</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Feedback Title</label>
          <br></br>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
          />
<br></br>
<br></br>
          <label htmlFor="category">Category</label>
          <br></br>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
          </select>
<br></br>
<br></br>
          <label htmlFor="detail">Feedback Detail</label>
          <br></br>
          <textarea
            id="detail"
            name="detail"
            required
            value={formData.detail}
            onChange={handleInputChange}
          />

          <br></br>
          <br></br>

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
