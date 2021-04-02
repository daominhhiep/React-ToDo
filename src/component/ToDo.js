import React, {useState} from 'react';

export default function Todo() {
    const [value, setValue] = useState('')
    const [lists, setLists] = useState([])

    const addTodo = (e) => {
        e.preventDefault();
        if (value !== '') {
            setLists([...lists, {text: value, isDone: false}])
            setValue('')
        }
    };

    const removeTodo = (index) => {
        const newLists = [...lists]
        newLists.splice(index, 1)
        setLists(newLists)
    }

    const doneTodo = (index) => {
        const newLists = [...lists]
        newLists[index].isDone = !newLists[index].isDone
        setLists(newLists)
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={value}
                    placeholder="Enter task..."
                    onChange={(e) => setValue(e.target.value)}/>
                <button onClick={addTodo}>Add task</button>
            </form>
            <ul>
                {lists.map((item, index) => (
                    <li key={index}>
                        <span style={{textDecoration: item.isDone ? "line-through" : ""}}>{item.text}</span>
                        <button onClick={() => doneTodo(index)}>v</button>
                        <button onClick={() => removeTodo(index)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

