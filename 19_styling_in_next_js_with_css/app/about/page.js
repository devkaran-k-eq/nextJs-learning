'use client'
export const dynamic = "force-dynamic";

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["apple", "orange", "kiwi"])
  


  const randomNumber = Math.random();
  console.log(randomNumber);
  
  if (randomNumber > 0.5) {
    throw new Error("Error occurred");
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>

      <button onClick={
        () => console.log(object)
      }>
        Clear !!
      </button>
      {fruits.map((fruit) => {
        return <p key={fruit}>{fruit}</p>
      })}
    </div>
  );
};

export default About;
