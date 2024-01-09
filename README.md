# Pack Assist 

## Introduction

Welcome to Pack Assist, a vacation planning app that helps travelers plan packing lists for a variety of locations, associated weather conditions and much, much more. This is a Phase 5 project for [Flatiron School](https://flatironschool.com/). Its primary purpose is to help students gain experience building a full-stack project with a React frontend and a Flask backend.

---

## Project Breakdown

#### Locations

#### Trips

Once you've found a location you'd like to visit, click `Create a Trip` ... 

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
