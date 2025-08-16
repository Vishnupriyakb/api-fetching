import React, { useEffect, useState } from 'react'

function Apiii() {
    const [todo, setTodo] = useState([]);
    const [temp,setTemp]=useState([]);
    async function fetchData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodo(data);
        setTemp(data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    function filterd(status){
      const filterdData = todo.filter((d)=>d.completed===status);
      setTemp(filterdData);
    }
        return (
           <div><button type="button" onClick={() => filterd(true)}>Done</button>
            <button type="button" onClick={() => filterd(false)}>Pending</button>
            <button type="button" onClick={() => setTemp(todo)}>All</button>
            {temp.map((task) =>
                <div key={task.id}>
                    <em>{task.title}</em>
                    <input type="checkbox" checked={task.completed}></input>
                </div>
            )}
            </div>
)
}
        export default Apiii
