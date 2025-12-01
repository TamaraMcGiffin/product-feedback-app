# Product Feedback App

## 👋 Welcome!

Imagine you are starting out as a freelance full-stack developer. You've just been hired by your first new client: a startup that is building a new product. The startup is generically named _My Company_. 

_My Company_ wants you to build a Product Feedback application, where customers can view and submit feedback about how their product could be improved. 

## 🖼️ Live Demo

[View the live project demo here](https://product-feedback-app-2025.netlify.app/) ✨

![image](https://github.com/user-attachments/assets/5fabe48e-fb2b-4337-94cc-515e64a0bf66)


## 🎯 Project Requirements

You will build the 3 parts of a full-stack application:
- **Database** — built with PostgreSQL and deployed to Neon
- **Server/API** — built with Node and Express and deployed to Render
- **Frontend** — built with React and deployed to Netlify
  
The frontend should be responsive, and there should be 2 pages:
1. The Home page, where users can:
     - View all suggestions 
     - View suggestions filtered by category
     - When there are no suggestions for the currently selected filter, show the "There is no feedback" screen
2. The AddFeedback page, where users can:
     - Submit a new suggestion by filling out a form
     - Receive form validations when trying to submit a new suggestion


## The Tech Stack

These are all the technologies you should use to build your full-stack application: 

| Component | Language | Framework | Deployment | Dev Tools |
|-----------|------------|----------------|------------|-------|
| Frontend  | HTML, CSS, JavaScript | React         | Netlify   |      |
| Server/API | Node.js     | Express       | Render    | Postman for API testing |
| Database  | PostgreSQL |               | Neon    |   |



## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1) for the designs
- **Documentation Guides:** The teaching team at AnnieCannons has provided some [handy guides](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.0#heading=h.ykdbmvmlp0ag) to help you use Github and other coding tools



## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code. 
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Comment your code generously — Future You will thank you.** You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
4. **Clean up your code as you go**. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.


---

## 🚀 Roadmap: Step-by-step guide to building this project

---

### 🎯 Milestone 1: Create SQL Database Schema

1. Review the [Figma designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1) and plan/pseudo-code what data you'll need to build this application 
2. [Fork this DB Fiddle](https://www.db-fiddle.com/f/mDJ76U1Xpi8ZR79RqDgYny/0)
3. Write PostgreSQL code to create your table(s)
4. Insert at least 3 rows of sample data into each table
5. Write the SQL queries for your API to:
     - Get all suggestions
     - Get suggestions by category
     - Add a suggestion
6. Bookmark the link to your DB Fiddle so you can find it later.
7. Submit the link to your DB Fiddle on Canvas.
   
---

### 🎯 Milestone 2: Deploy SQL Database to Neon

1. Use Neon.tech to create a new Neon project called `suggestions`. Use this [Neon deployment guide](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/deploy-database-to-neon.md) to help you. 
2. Set up your database on Neon (create your table(s) and insert rows of sample data)
3. Submit a screenshot of your deployed database to Canvas. 

---

### 🎯 Milestone 3: Write API Documentation

1. In the root folder of your `product-feedback-app` Github repo, you'll find an `api-documentation.md` file.
2. Your task is to fill in the blanks in this API documentation file using Markdown code. This is an important step in planning how your frontend and backend will communicate. Think of this document as a blueprint for the API endpoints your app will need.
3. For each API endpoint, you will need to write:
    - A description,
    - An example request URL
    - An example request body (if applicable)
    - An example response. 
4. Refer to the [Countries API Documentation](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/api-documentation.md) as an example of what a finished doc should look like.
5. Submit the Github link to your api-documentation.md file on Canvas. 

---

### ⚙️ Copy this Github repo template and clone to your local machine
1. Make a copy of this repo into your own Github account by clicking on the "Use this template" button on the upper right corner of this page. 
2. Clone your new Github repo into the `dev` folder on your local machine. 

---

### ⚙️ Set up your `server` folder in VS Code
1. In VS Code, open up your `product-feedback-app` project. You should see 3 folders and files already provided for you: 
     - `client` — holds your frontend React code
     - `server` — holds your backend server/API code
     - `README.md` — holds the project info & instructions
 
2. Open up the `server` folder. In that folder, you should see the following files already provided for you:

      - `package.json` — lists information about your project and its dependencies 
      - `.gitignore` — lists which files and folders that Git should ignore 
      - `src` folder — where all your custom code will live
      - `index.js` — where you will write your server/API code
      - `config.js` — contains your database's access credentials

3. In VS Code, open the terminal and `cd` into your `server` folder
4. In the `server` folder, run `npm install express` and `npm install pg`. 

     Once you do that, you should see `express` and `pg` listed as dependencies in your `package.json`. 

     You should also see your `node_modules` folder was generated. This folder contains all of the code from your project's dependencies. 

---

### ⚙️ Connect your Neon-hosted PostgreSQL database to your Express server
1. [Follow this guide to connect your Neon database to your Express server](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/connect-neon-database-to-express-server.md).

---

### ⚙️ Set up your server's boilerplate code 
1. In your server's `index.js` file, set up your server using the same boilerplate code as your `version-4` of the Countries API project. 

---

### 🎯 Milestone 4: Build the Local Server/API
1. Build your API endpoints and helper functions:
  - `GET /get-all-suggestions`: Return all the suggestions data
  - `GET /get-suggestions-by-category/:category`: Return suggestions filtered by category 
  - `POST /add-one-suggestion`: Save submitted form data
2. Test your API endpoints in Postman to make sure they're working
3. Push your code to Github 

---

### 🎯 Milestone 5: Build the Frontend

1. Review the React project skeleton already provided in the `client` folder. Take a look at the `assets` folder, which has all of the icons and image assets you'll need to build the frontend. 
2. Start by making a `pages` folder and `components` folder to hold your pages and components. You should have 2 pages, the Home page (where you can view all suggestions) and the AddFeedback page (which has the form to submit a new suggestion).
3. Set up your routes to your pages with React Router. Refer to this [react-router guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.hbxxe6vmm0fq#heading=h.snu4ai1ffrgi) to help you.
4. Write your code to build the frontend, according to the [Figma designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1). The frontend should be responsive, and there should be 2 pages:
   
     - The Home page, where users can:
          - View all suggestions 
          - View suggestions filtered by category
          - When there are no suggestions for the currently selected filter, show the "There is no feedback" screen
     - The AddFeedback page, where users can:
          - Submit a new suggestion by filling out a form
          - Receive form validations when trying to submit a new suggestion
            
5. Push your code to Github

---

### 🎯 Milestone 6: Deploy to Netlify and Render

2. Deploy your server/API code (in the `server` folder) to Render, and your frontend code (in the `client` folder) to Netlify. Use this [Render deployment guide](https://github.com/ac-backend/countries-app-instructions/blob/main/version-4/deploy-server-to-render.md) to help you. 

---

### Test everything again... and again! 
1. Now that your database, API, and frontend are all deployed to the internet, you can test all user flows:
   - Viewing all suggestions
   - Filtering the suggestions
   - Adding a suggestion
3. Check your database to make sure the data is updating correctly

---

### Clean and Comment your code
1. Clean up your code to make it clean and modular
2. Remove unnecessary console.log() messages and unused blocks of commented-out code.
3. Comment complex logic to explain how it works

---

### 🎯 Milestone 7: README.md Project Documentation 
1. In your project's README.md file, explain what your project is about, its tech stack, how to run it, etc. This is important if you intend to showcase this project on your resume or portfolio. Use this [README.md template](https://github.com/ac-backend/countries-app-instructions/blob/main/version-4/write-your-README.md) to help you write it!
2. Submit the Github link to your README.md file on Canvas. 

---

### 🎯 Final Milestone: App complete!
1. Push your code to Github
2. Submit your Github repo link and Netlify link to Canvas! You're done! 🎉

---

## 🌟 Stretch Goals (Optional)

Finished the main requirements? Here are some bonus challenges:

- 🏆 Upvote product suggestions
- 🏆 Add a hamburger menu in mobile view
- 🏆 Sort suggestions by most/least upvotes and most/least comments
- 🏆 Edit an existing suggestion
- 🏆 Delete an existing suggestion
- 🏆 Add comments to an existing suggestion
- 🏆 Implement multi-filtering
