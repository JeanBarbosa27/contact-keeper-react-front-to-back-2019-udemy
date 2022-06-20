import React from "react";
import pck from "../../../package.json";

const About = () => {
  console.log("pck:", pck);
  return (
    <main>
      <h1>About this app</h1>
      <p className="my-1">Description: {pck.description}</p>
      <p className="my-1">
        <strong className="bg-dark badge">V: {pck.version}</strong>
      </p>
    </main>
  );
};

export default About;
