import { Link } from "react-router-dom";

// pages/AddFeedback.jsx
function AddFeedback() {
  return (
    <>
      <Link to="/"> Go Back </Link>
      {/* use className not class and htmlFor*/}
      <div className="feedback-form">
        <h1> Create New Feedback</h1>

        <form>
          <label htmlFor="feedback-title">Feedback Title</label>
          <input type="text" id="feedback-title" name="title" required />

          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>

          <label htmlFor="feedback-detail">Feedback Detail</label>
          <textarea id="feedback-detail" name="detail" required />

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
