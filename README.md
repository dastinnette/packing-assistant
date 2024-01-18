# Pack Assist 

## Introduction

Welcome to Pack Assist, a vacation planning app that helps travelers plan packing lists for a variety of locations, associated weather conditions and much, much more. 

This is a full-stack application that was created as a final project for Flatiron School's software engineering course. It makes use of a Flask backend using Flask-SQLAlchemy and SQLite, and it has a React frontend that uses React Bootstrap components for functionality and styling.

---

## Project Breakdown

#### Login

This project uses an Auth token to confirm and persist user details. Users can create an account or login using an existing account and password.

#### Locations

Once logged in, users can browse "Locations" to find one they like and plan a trip. The user can then user the form on each location page to book a trip with a corresponding date and see that trip appear in the `/trips` route.

#### Trips

Once you've found a location you'd like to visit, click `Create a Trip` to view a form with a date and a text field for a packing list. 

---

## Setup locally

To get this app running on your local machine, first **fork** a copy into your Github account then **clone** from that copy. Once you've opened the code files from your terminal, install any additional dependencies you know you'll need for your project by adding them to the `Pipfile`. To download the dependencies for the backend server, run:

```console
pipenv install
pipenv shell
```

You can run the Flask API on [`localhost:5555`](http://localhost:5555) by running:

```console
python server/app.py
```

To download the dependencies for the frontend client, run:

```console
npm install --prefix client
```

You can run your React app on [`localhost:3000`](http://localhost:3000) by running:

```sh
npm start --prefix client
```

## Generating Your Database

First change into the `server` directory:

```console
cd server
```

Then enter the commands to create the `instance` and `migrations` folders, the database `app.db` file, and seed your database:

```
flask db init
flask db revision -m 'Create DB'
flask db upgrade head
python seed.py
```
