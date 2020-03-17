## Introduction
Material-UI is one of the most popular React component library for faster and easier web development.  
It implements the guidelines of Google Material Design and provide out of the box React components which are easy to use and customise.

## Add Material Button Component in a React Application
Our goal is to have a Material Button Component inside the application and we should be able to customise the colour and shape of this button as per our own theme. We will use Material-UI library to insert a button inside a sample Create React App.

## Set up Create React App
- Open your terminal and run these commands to get a sample Create React App running on your machine.
```sh
npx create-react-app sample-react-app
cd sample-react-app
npm start
```
- To check if the app is running, go to your browser and hit [http://localhost:3000](http://localhost:3000). You should see the sample app running with React logo.

## Install Material-UI dependency
- Find out the [latest Material-UI release](https://material-ui.com/versions/) and select the version of library to use.
As of now, the latest version is `4.8.3` so we will use the same. 
- To install and save in your `package.json` dependencies, run the command:
 
```sh
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core
```

## Add Material-UI Button Component
- Open the project in your favorite editor and go to the `src/App.js` file. 
- Remove all the code from this `App.js` file and replace with this code below. It has the Material Button Component from the library.
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">Hey There!</Button>
      </header>
    </div>
  );
}
export default App;
```
- Go to your browser on URL [http://localhost:3000](http://localhost:3000) and you should see a Button component. It might look simple but there is a lot of room for customization. We will do that in the later steps.


