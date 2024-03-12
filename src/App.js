import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const handleTodo = () => {
    if (task.trim() !== "") {
      setList([...list, task])
    }
   
    setTask("");
  }


  const handleDelete = (i) => {
    setList(prevList => {
      const updatedList = [...prevList];
      updatedList.splice(i, 1);
      return updatedList;
    });
  }

 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTodo();
    }
  }

  return (
    <div className="App">
      <h1>To Do Tasks</h1>
      <div className='input-box'>
        <input
          id='input'
          name='input'
          type="text"
          placeholder='Add Task...'
          value={task}
          onChange={(e) => handleTask(e)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <button onClick={handleTodo}>Add Task</button>
      </div>
      <div className="list">
        {list.map((item, i) => <li
          key={i}>
            
          <span>
            {item}
          </span>
          <button onClick={() => handleDelete(i)}>D</button>
        </li>)}
      </div>
    </div>
  );
}

export default App;
