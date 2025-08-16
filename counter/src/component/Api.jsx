const { useState, useEffect } = require("react")

const Todos = () => {
  const [todos,setTodos]=useState([]);
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res= await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      setFilteredTodos(data);
    };

    fetchData();
  },[]);
     return (
    <div style={{ padding: "20px" }}>
      <button style={buttonStyle} onClick={() => setFilteredTodos(todos.filter(t => t.userId === 1))}>User 1</button>
      <button style={buttonStyle} onClick={() => setFilteredTodos(todos.filter(t => t.userId === 2))}>User 2</button>
      <button style={buttonStyle} onClick={() => setFilteredTodos(todos.filter(t => t.userId === 3))}>User 3</button>
      <button style={buttonStyle} onClick={() => setFilteredTodos(todos.filter(t => t.userId === 4))}>User 4</button>
      <button style={buttonStyle} onClick={() => setFilteredTodos(todos)}>ALL Todos</button>
    {filteredTodos.map(todo => (
        <p key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly /> {todo.title}
        </p>
      ))}
    </div>
  );
};
export default Todos