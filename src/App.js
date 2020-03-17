import React from 'react';
import './styles.css';
import Notify from "./notify.svg";


const notifications = ['Credit Card expiring in 2 days', 'Your balance is below $100', 'Phone bill payment due today'];
// const notifications = [];
const greeting = 'Hey Sam!';

export default function App() {
  return <div className="app">
    <Notification data={notifications} greeting={greeting}/>
  </div>
}


const Notification = (props) => {
    const messages = props.data;
    const greet = props.greeting;
    return (
        <div>
            <h1>{greet}</h1>
            {messages.length > 0 &&  <NewMessages messages={messages}/>}
            {messages.length === 0 && <NoNewMessages/>}
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
