## How to load components conditionally in ReactJS?

## Introduction

In React, we can create various components to wrap a specific behaviour. But it is a common practice to render only few of them conditionally depending on the application state. Let's look at an example to see how can we achieve this.

## UseCase

Let's say we have a web page that should render 2 different React components depending on the notifications.

1) If there are notification, a component should be rendered containing greeting for the user,  notification about the new messages and the list of notifications.

2) If there is nothing to notify, a component should be rendered with a greeting for the user and a message "*You have no new messages*".


Before we go ahead, let's set up the application.

## **Set up Create React App**

- Open your terminal and run these commands to get a sample Create React App running on your machine.

```sh

npx create-react-app sample-react-app

cd sample-react-app

npm start

```

To check if the app is running, go to your browser and hit http://localhost:3000. You should see the sample app running with this React logo.

## Create Notification Component

- Open the code in your favourite editor. Remove all the code inside your `src/App.js` file and instead paste this code given below.

```js
import React from "react";
import "./styles.css";

const greeting = "Hey Sam!";
export default function App() {
  return (
    <div className="app">
      <Notification greeting={greeting} />
    </div>
  );
}

const Notification = props => {
  const greet = props.greeting;
  return (
    <div>
      <h1>{greet}</h1>
    </div>
  );
};
```
`App` is a function component that wraps another component `Notification` that display greeting on the web page. This component is styled using CSS className `app`. This style is imported from `styles.css` file. We will add these styles in the next step.  

`greeting` variable holds the greeting message that should always be displayed and is passed as a `prop`.  

`<Notification/>` is a component which when rendered display the greeting message.    

-  Create a new css file at location `src/styles.css`  and paste this code inside that file. 
```css
.app {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

- You may want to delete `src/App.css` and  `src/logo.svg` files from the codebase because we are not using them anymore.

- Now, go to your browser and hit the URL [http://localhost:3000]( http://localhost:3000). You should see this greeting on the web page.

Our goal is to either render a component that notifies user and display messages (if there are any) or render a component that notifies user there are no new messages. We will write the code for these components. In the next section, let's create these conditional components.

## Create NewMessages Component

- Inside your `src/App.js` file add this code for  `NewMessages` component.
```js
const NewMessages = ({messages}) => {
    return<>
        <div className="chat">
            <img alt="new message" src={Notify} className="icon" />
            <h3>You have {messages.length} new messages</h3>
        </div>
        <div className="messageContainer">
            {messages.map((message, key) => (
                <h5 className="message" key={key}>
                    {message}
                </h5>
            ))}
        </div>
    </>;
};
```
`<NewMessages/>` component accept `messages` as props and return a component containing notify icon with a text along with all the messages inside an `<h5/>` element.

- Make sure your `src/App.js` should look like this after adding this new component.
```js
import React from "react";
import "./styles.css";
import Notify from "./notify.svg";

const greeting = "Hey Sam!";
export default function App() {
  return (
    <div className="app">
      <Notification greeting={greeting} />
    </div>
  );
}

const Notification = props => {
  const greet = props.greeting;
  return (
    <div>
      <h1>{greet}</h1>
    </div>
  );
};

const NewMessages = ({messages}) => {
    return<>
        <div className="chat">
            <img alt="new message" src={Notify} className="icon" />
            <h3>You have {messages.length} new messages</h3>
        </div>
        <div className="messageContainer">
            {messages.map((message, key) => (
                <h5 className="message" key={key}>
                    {message}
                </h5>
            ))}
        </div>
    </>;
};

```

- There is an import inside the `src/App.js` which will fail because you do not have the SVG file in your codebase as of yet. Perform these steps to resolve that error. 
  1. Download the FREE Notify SVG file from [Google Material Icons](https://material.io/resources/icons/?icon=notifications_active&style=baseline)
  2. Rename the downloaded file to `notify.svg` 
  3. Add this file to the project inside `src` directory. It should be placed as `src/notify.svg`


- Add more styles given below inside your `src/styles.css` . Make sure your css file looks like this.
```css
.app{
    display: flex;
    align-items: center;
    justify-content: center;
}

.chat{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon{
    padding-right: 1em;
}

.messageContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    border: 2px solid gray;
}

.message {
    color: dimgray;
    align-self: flex-start;
}

```

- When you hit this URL [http://localhost:3000]( http://localhost:3000) on your browser, you should still see the same greeting on the web page.

## Create NoNewMessages Component

- Now that we have the `<NewMessages/>` component ready, we will create another component called `<NoNewMessages/>` which should be rendered if there are no new messages. Add this function component inside `src/App.js` file.
```js
const NoNewMessages = () => {
    return <div className="chat">
        <h3>You have no new messages.</h3>
    </div>
};

``` 

- Make sure your `src/App.js` file looks like this after adding `<NoNewMessages/>` component.
```js
import React from "react";
import "./styles.css";
import Notify from "./notify.svg";

const greeting = "Hey Sam!";
export default function App() {
  return (
    <div className="app">
      <Notification greeting={greeting} />
    </div>
  );
}

const Notification = props => {
  const greet = props.greeting;
  return (
    <div>
      <h1>{greet}</h1>
    </div>
  );
};

const NewMessages = ({messages}) => {
    return<>
        <div className="chat">
            <img alt="new message" src={Notify} className="icon" />
            <h3>You have {messages.length} new messages</h3>
        </div>
        <div className="messageContainer">
            {messages.map((message, key) => (
                <h5 className="message" key={key}>
                    {message}
                </h5>
            ))}
        </div>
    </>;
};

const NoNewMessages = () => {
    return <div className="chat">
        <h3>You have no new messages.</h3>
    </div>
};
```

- When you hit this URL [http://localhost:3000]( http://localhost:3000) on your browser you should not see any errors.

## Render using inline If with &&

JSX allows embedding of JavaScript expressions inside curly braces. 
So we can make use of JavaScript logical `&&` operator to render the component conditionally.

- Inside your `src/App.js` file, add a variable `notifications` outside of `<App/>` component which is an array of notification messages user will see.
 ```js
 const notifications = ['Credit Card expiring in 2 days', 'Your balance is below $100', 'Phone bill payment due today'];
 ```
 
 - Update the code inside the `<App/>` component. It should send the `notifications` in props to the `<Notification/>` component.
 ```js
export default function App() {
  return <div className="app">
    <Notification notifications={notifications} greeting={greeting}/>
  </div>
}
```

- Update `<Notification/>` component. It now receives `notifications` in props.

```js
const Notification = (props) => {
    const notifications = props.notifications;
    const greet = props.greeting;
    return (
        <div>
            <h1>{greet}</h1>
            {notifications.length > 0 &&  <NewMessages messages={notifications}/>}
            {notifications.length === 0 && <NoNewMessages/>}
        </div>
    );
};
```
We also embedded these expressions in curly braces inside `<Notification/>` component
```js
{notifications.length > 0 &&  <NewMessages messages={notifications}/>}  

{notifications.length === 0 && <NoNewMessages/>}
```

The way it works in JavaScript is,  `true && expression` evaluates to  `expression` whereas `false && expression` evaluates to `false` Our goal is in this example is to render `<NewMessages>` component if there are 1 or more notifications and render `<NoNewMessage>` component when there are zero notifications. So if the condition turns out to be `true` , the component after logical `&&` operator will be rendered.  If the condition is `false` the component after logical `&&` operator will NOT be rendered.



- Make sure your `src/App.js` looks like this after you have made all of the above changes.
```js
import React from 'react';
import './styles.css';
import Notify from "./notify.svg";


const notifications = ['Credit Card expiring in 2 days', 'Your balance is below $100', 'Phone bill payment due today'];
const greeting = 'Hey Sam!';

export default function App() {
  return <div className="app">
    <Notification notifications={notifications} greeting={greeting}/>
  </div>
}


const Notification = (props) => {
    const notifications = props.notifications;
    const greet = props.greeting;
    return (
        <div>
            <h1>{greet}</h1>
            {notifications.length > 0 &&  <NewMessages messages={notifications}/>}
            {notifications.length === 0 && <NoNewMessages/>}
        </div>
    );
};

const NewMessages = ({messages}) => {
    return<>
        <div className="chat">
            <img alt="new message" src={Notify} className="icon" />
            <h3>You have {messages.length} new messages</h3>
        </div>
        <div className="messageContainer">
            {messages.map((message, key) => (
                <h5 className="message" key={key}>
                    {message}
                </h5>
            ))}
        </div>
    </>;
};

const NoNewMessages = () => {
    return <div className="chat">
        <h3>You have no new messages.</h3>
    </div>
};

```  

## Test Conditional Rendering
- Open this URL [http://localhost:3000]( http://localhost:3000) on your browser and you should see `<NewMessages/>` component rendered. 

- Now inside your `src/App.js` file, you can replace the `notifications` variable with the code below. 
```js
const notifications = [];
``` 
You want to test if the `<NoNewMessages/>` component is rendered if there are no notifications.

-  Open this URL again [http://localhost:3000]( http://localhost:3000) on your browser and this time React will render `<NoNewMessages/>` component
    