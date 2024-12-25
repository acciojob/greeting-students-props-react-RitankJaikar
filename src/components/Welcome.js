// write code for Welcome component here
import React from "react";

// Functional component to display the welcome message
const Welcome = ({ name }) => {
  return (
    <div>
      <h1>Hey {name}!</h1> {/* Greeting message with name */}
      <h2>Welcome to School.</h2> {/* Welcome message */}
    </div>
  );
};

export default Welcome;