// Server Set-up Boilerplate Code

// importing Node Modules
import express from "express";
import pg from "pg"; // pg stands for PostgreSQL, for connecting to the database

//connecting to our PostgreSQL database, or db for short
const db = new pg.Pool({
  // new pg.Pool() creates a connection to the database
  connectionString: process.env.DATABASE_URL, // credentials to access the database. Keep private!
  ssl: true, // use SSL encryption when connecting to the database to keep data safe
});

const app = express(); // create an instance of the Express module, which gives us access to all of Express's functions, methods, useful superpowers

app.use(express.json()); // This server will receive and respond to requests with JSON data

const port = 3000; // Setting which port to listen or receive requests

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});

// Note to self: Referring back to Node-7-express-sql assignment

// Helper Functions

async function getAllSuggestions() {
  // db.query() lets us query the SQL database
  // It takes in one parameter: a SQL query!
  const data = await db.query("SELECT * FROM suggestions");
  return data.rows; // we have to use dot notation to get value of the rows property from the data object
}

async function getSuggestionsByCategory(category) {
  const data = await db.query("SELECT * FROM suggestions WHERE category = $1", [
    category,
  ]);
  return data.rows;
}

async function addOneSuggestion(title, category, detail) {
  // we declared db in our boilerplate code, which connects us to the SQL database
  // The db.query() method lets us write SQL code to query the database. Takes in 2 parameters:
  // 1. The SQL command
  // 2. An array that contains dynamic values that we inject into the SQL command
  // the SQL command needs to be written all in one line, using $1 - $4 as placeholders for dynamic values
  await db.query(
    "INSERT INTO suggestions (title, category, detail) VALUES ($1, $2, $3)",
    [title, category, detail]
  );
}

// Endpoints

// Tested in Postman ✅
// Tried async with error handling and didn't work for me - note to consider for debugging countries app

app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  res.json(allSuggestions);
});

// Tested in Postman ✅ Noted that category names are capitalized

app.get("/get-suggestions-by-category/:category", async (req, res) => {
  let category = req.params.category;
  const suggestion = await getSuggestionsByCategory(category);
  res.json(suggestion);
});

// Tested in Postman ✅ And received success feedback message
// Used request body:

// {
//   "suggestions_id": 5,
//   "title": "Ability to follow others",
//   "category": "Feature",
//   "detail": "Stay updated on comments and solutions other people post."
// }

app.post("/add-one-suggestion", async (req, res) => {
  // we access whatever was sent in the request body and save it in this variable
  const { title, category, detail } = req.body;

  // calling the helper function
  // we aren't declaring a variable because our helper function doesn't need to return anything
  await addOneSuggestion(title, category, detail);

  // Sending a response as text, so we use res.send() which sends text
  // If we wanted to send a response as JSON data (which would need to be an object or array to be valid JSON), we would use res.json()
  res.send(`Thank you for your feedback!`);
});
