const Todos = async () => {
  console.log(fetch);

  // const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=5000");
  // const data = await slowResponse.json();
  // const response = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=5");
  // const todos = await response.json();


  const [todosResponse, slowResponse5s, slowResponse3s] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    fetch("https://procodrr.vercel.app/?sleep=5000"),
    fetch("https://procodrr.vercel.app/?sleep=3000"),
  ])

  // console.log(todosResponse);

  const [todos, data3s, data5s] = await Promise.all([
    todosResponse.json(),
    slowResponse3s.json(),
    slowResponse5s.json()
  ])

  // console.log(todos);
  // console.log(data3s);
  // console.log(data5s);


  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>

      <div>
        {JSON.stringify(data3s)}
      </div>
      <div>
        {JSON.stringify(data5s)}
      </div>
    </>
  );
};

export default Todos;
