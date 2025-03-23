Express JSON App

Project Overview

This project is a simple Express.js application that serves JSON data from a local server. It also includes a front-end static website that fetches and displays data from the server using an API request.

Features

Express.js server with Nodemon for automatic restarts

Serves JSON data from a "data" folder

Static website with multiple pages:

Home Page: Introduction to the project

About Page: Project details

Contact Page: A simple contact form

Demo Page: Fetches and displays JSON data

API endpoint to retrieve data (/api/data)

Front-end interaction using JavaScript (Async/Await)

Folder Structure

project-folder/
│── data/
│   ├── data.json  # JSON file with at least 6 objects
│── public/
│   ├── index.html  # Home page
│   ├── about.html  # About page
│   ├── contact.html  # Contact page
│   ├── demo.html  # Demo page with API request
│   ├── styles.css  # CSS file for styling
│   ├── app.js  # JavaScript file for front-end interactions
│── server.js  # Express server file
│── package.json  # Project dependencies
│── README.md  # Project documentation

Install dependencies:

npm install

Start the server:

npm start

Open your browser and go to:

http://localhost:3000

API Endpoint

GET /api/data: Returns JSON data from the data.json file.

Technologies Used

Node.js

Express.js

HTML, CSS, JavaScript

Nodemon (for development)

Author

Jenilkumar Desai
Dharm Ghori
Krish Falakiya
