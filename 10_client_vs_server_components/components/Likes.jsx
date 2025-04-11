"use client"
import { useState } from "react";

const Likes = () => {
  // console.log(window);   // SHOWS ERROR IN SERVER SIDE  BECAUSE THIS ARE BROWSER SPECIFIC OBJECTS 
  // console.log(localStorage);

  const [likes, setLikes] = useState(2);

  if (typeof localStorage !== "undefined") {
    // console.log(localStorage);
  }
  return (
    <>
      <div style={{ textAlign: "center" }} onClick={() => {
        setLikes(
          (pre) => {
            return pre + 1
          }
        )
      }}>
        {likes} Likes ❤️ 
        {/* {String(console.log("Running on SERVER"))} */}
      </div>
      {/* console returns undefined and if react not shows undefined in retun in UI that's why we convert this in string 
     */}
    </>
  )
};

export default Likes;