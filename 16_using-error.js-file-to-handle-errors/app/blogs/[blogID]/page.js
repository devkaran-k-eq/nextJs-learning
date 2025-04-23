async function getData() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) throw new Error("Random error from getData");
  return randomNumber;
}



const Blog = async ({ params }) => {
  const { blogID } = await params;

  const randomNumber = await getData();
  // const randomNumber = Math.random();

  console.log(randomNumber);
  if (randomNumber < 0.5) {
    throw new Error("Error becuase it is Greater Than 0.5");
  }

  return (
    <>
      <h1>Welcome to Our Blog {blogID}</h1>
      <p>This is blog {blogID} page.</p>
    </>
  );
};

export default Blog;
