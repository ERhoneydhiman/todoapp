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
      <div className="main">
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
          <button id='btn1' onClick={handleTodo}>Add Task</button>
        </div>
        <div className="list">
          {list.map((item, i) => <li
            key={i} id='one'>

            <span>
              {item}
            </span>
            <button id='btn2' onClick={() => handleDelete(i)}>D</button>
          </li>)}
        </div>
      </div>
    </div>
  );
}

export default App;
