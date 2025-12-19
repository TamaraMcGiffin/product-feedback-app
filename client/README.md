# 📝 Product Feedback App

## 📌 Project Description & Purpose

This project is a full stack app designed to add feedback and sort through all of the feedback by specific categories.

## 🚀 Live Site

Here's the link to view the live app: https://product-feedback-app-tamara.netlify.app/

## 🖼️ Screenshots


<img width="1462" height="897" alt="image" src="https://github.com/user-attachments/assets/1a6f17a0-6769-4697-b526-9be335a89cad" />


<img width="1106" height="422" alt="image" src="https://github.com/user-attachments/assets/f720595f-249d-4ce1-87d1-b9ebbaa95fb1" />

## ✨ Features

This is what you can do on the app: 
- Add feedback using the feedback form
- Filter through each feedback category to display only certain categories
- Show all feedback or if no feedback has been submitted, will say no feedback yet


## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML, CSS, JavaScript
- **Framework:** React
- **Deployment:** Netlify

**Server/API**

- **Languages:** Node.js
- **Framework:** Express
- **Deployment:** Render

**Database**

- **Languages:** PostgreSQL
- **Deployment:** Neon

## 🔹 API Documentation

These are the API endpoints I built: 
1. /get-all-suggestions
2. /get-suggestions-by-category
3. /add-one-suggestion

Here's the link to the full API documentation: https://github.com/TamaraMcGiffin/product-feedback-app/blob/main/api-documentation.md

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE suggestions (
  suggestion_id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  detail VARCHAR NOT NULL
);
```

## 💭 Reflections

**What I learned:** In this project I gained experience building a full stack application from front to back, and deploy on Render & Netlify 

**What I'm proud of:** I'm proud of implementing the category filters with the buttons and feedback list, it was rewarding to see it come together as well as gaining more confidence in building my server and database.

**What challenged me:** The client side of building proved to be more challenging to me than building the server side

**Future ideas for how I'd continue building this project:** 
1. I would incorporate more of the CSS styles with more time to play
2. Add images

## 🙌 Credits & Shoutouts 

Thanks to Arianna, my instructor for her teaching and guidance through this project, she challenged me to slow down and take my time to refactor my code properly so that I could understand how each section works better!
And thanks to Bakari, my TA for teaching me grid-areas and helping me debug the CSS grid structure and media queries which proved to be a real challenge towards the end! 
