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

<a href="https://github.com/jb9dev" target="_blank">
<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" height="24" data-view-component="true">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>
<a href="https://twitter.com/__JeanBarbosa" target="_blank">
<svg viewBox="0 0 24 24" fill="#1d9bf0" width="24" height="24">
<g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g>
</svg>
</a>
<a href="https://www.linkedin.com/in/jeanbarbosa9/" target="_blank">
<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
</svg>
</a>
