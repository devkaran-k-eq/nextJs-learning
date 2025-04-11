"use client"
const Comments = () => {

  if (typeof window === "undefined") (
     <div style={{ textAlign: "center" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus labore explicabo.
    </div>
  )
  return (
    <div style={{ textAlign: "center" }}>
      3000 Comments 💬
    </div>
  )
};

export default Comments;
