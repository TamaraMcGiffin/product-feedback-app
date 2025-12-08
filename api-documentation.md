# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource      | Method | Endpoint                     | Description                                |
| ------------- | ------ | ---------------------------- | ------------------------------------------ |
| `suggestions` | GET    | /get-all-suggestions         | Retrieves all suggestions in the database  |
| `suggestions` | GET    | /get-suggestions-by-category | Retrieves suggestions by specific category |
| `suggestions` | POST   | /add-one-suggestion          | Adds a suggestion to the database          |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all of the suggestions

**Example Request URL:**

```
http://localhost:3000/get-all-suggestions
```

**Example Response:**

```
json
[
  {
    "suggestions_id": 1,
    "title": "Add tags for solutions",
    "category": "Enhancement",
    "detail": "Easier to search for solutions based on a specific stack."
  },
  {
    "suggestions_id": 2,
    "title": "Add a dark theme option",
    "category": "Feature",
    "detail": "It would help people with light sensitivities and who prefer dark mode."
  },
    {
    "suggestions_id": 3,
    "title": "Preview images not loading",
    "category": "Bug",
    "detail": "Challenge preview images are missing when you apply a filter."
  },
    {
    "suggestions_id": 4,
    "title": "Allow image/video upload",
    "category": "Enhancement",
    "detail": "Images and screencasts can enhance comments on solutions"
  },
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Retrieves the suggestions by category

**Example Request URL:**

`GET http://localhost:3000/get-suggestions-by-category/Bug`

**Example Response:**

```
 {
    "suggestions_id": 3,
    "title": "Add tags for solutions",
    "category": "Bug",
    "detail": "Challenge preview images are missing when you apply a filter."
  }

```

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a new suggestion to the database

**Example Request URL:**

`POST http://localhost:3000/add-one-suggestion`

**Example Request Body:**

```json
{
  "suggestions_id": 5,
  "title": "Ability to follow others",
  "category": "Feature",
  "detail": "Stay updated on comments and solutions other people post."
}
```

**Example Response:**

```
Thank you for your feedback!
```

---
