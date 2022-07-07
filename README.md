# Contact Keeper

This project was created to follow the one of the projects built in **React Front to Back 2019**, a Udemy course, **teached by Brad Traversy**.

[![license-badge](https://img.shields.io/static/v1?label=license&message=MIT&color=0e7dbe&style=flat)](./LICENSE)
![api-badge](https://img.shields.io/static/v1?label=API&message=v0.1.0&color=0e7dbe&style=flat)
![client-badge](https://img.shields.io/static/v1?label=ClientUI&message=v0.1.0&color=0e7dbe&style=flat)

## Table of contents

- [About](#about)
- [Features](#features)
  - [From the course](#from-the-course)
  - [My own](#my-own)
- [Requirements](#requirements)
- [Running locally](#running-locally)
- [Deploy](#deploy)
- [Technologies in it](#technologies-in-it)
- [Author](#author)

<h4 align="center"> 🚧  Contact Keeper 🚀 building...  🚧 </h4>

## About

The main goal of the project is creating a simple CRUD to manage contacts, using React, to show how to use Context API to handle state through the application, integrating it with a simple API built in Node and Express and, finally, persisting data into MongoDB.

## Features

Here are the features planned for this project, some of them was done just following the leassons, and other ones I think by my own, realizing how I should improve it.

### From the course

#### Back-End

- [x] Simple CRUD API for contacts
- [x] Simple CRUD API for authentication using JWT

#### Front-End

- [ ] User registration
- [ ] User authentication
- [x] Alerts component
- [ ] Private routes
- [x] Full CRUD of a contact
- [x] Filter contacts
- [x] State management with React Context API
- [ ] Integration with API

### My own

#### Back-End

- [ ] Adapt to TypeScript
- [ ] Implement automated tests
- [ ] Implement some Back-End design pattern
- [ ] Implement GraphQL

#### Front-End

- [ ] Alert with transitions
- [ ] Pagination when contacts list is too big
- [ ] Adapt to TypeScript
- [ ] Implement StoryBook
- [ ] Integrate with GraphQL

## Requirements

In order to run this project locally, you'll need to install some dependencies, listed below.

- [Node on version 18.3.0 at least](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Besides of it, you'll need to duplicate the `.env.sample` file, rename it for `.env` and fill it's envirorment variables (ask for some one who has it).

## Running locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so to run it in your machine, you can use the scripts below.

- `npm run dev`: Runs both API and Client servers and connects backend with MongoDB;
- `npm run start`: Runs only the API server;
- `npm run client`: Runs only the Client server and get it ready on [http://localhost:3000](http://localhost:3000);
- `npm install`: Install the dependencies for backend only;
- `npm run clientinstall`: Installs the dependencies for frontend only;

## Deploy

**Cooming soon**

## Technologies in it

Here are a list of main technologies used to build this application.

- [Node.js](https://nodejs.org/en/about/)
  - [Express](https://expressjs.com/pt-br/)
  - [Mongoose](https://mongoosejs.com/docs/)
  - [Json Web Token](https://github.com/auth0/node-jsonwebtoken)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2-de)
- [Reactjs](https://pt-br.reactjs.org/)
  - [Axios](https://axios-http.com/docs/intro)
  - [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
  - [React Transition Group](https://reactcommunity.org/react-transition-group/)

## Author

[Jean Barbosa](https://github.com/jb9dev/about-me)

[Github](https://github.com/jb9dev)
[Twitter](https://twitter.com/__JeanBarbosa)
[LinkedIn](https://www.linkedin.com/in/jeanbarbosa9/)
