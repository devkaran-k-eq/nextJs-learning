import dynamic from "next/dynamic";


const Comments = async () => {

    await new Promise((resolve) => setTimeout(resolve, 6000))
  return (
    <div style={{ textAlign: "center" }}>
       3000 Comments 💬
    </div>
  )
};

export default Comments;
