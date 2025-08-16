import React, { useEffect, useState } from 'react'

function Apiiiii() {
    const [todo, setTodo] = useState([]);
    const [temp,setTemp]=useState([]);
    async function fetchData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodo(data);
        setTemp(data);
       //console.log(data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    function filterdData(status){
        const fil = todo.filter((d)=>d.completed===status);
        setTemp(fil);
    }
        return (
            <div>
                <button type="button" onClick={()=>filterdData(true)}>True</button>
                <button type="button" onClick={()=>filterdData(false)}>False</button>
                <button type="button" onClick={()=>setTemp(todo)}>All</button>
                {temp.map((task)=>
                <div key={task.id}>
                    <em>{task.title}</em>
                    </div>
                )}

            </div>
          
)
}
        export default Apiiiii
