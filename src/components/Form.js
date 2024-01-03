import { useState } from 'react';
import List from './List';

function Form() {
  const inputStyle = { width: '300px', margin: '20px', fontSize: '18px', padding: '10px', borderRadius: '10px' };
  const buttonStyle = { fontSize: '18px', padding: '10px', borderRadius: '10px' };
  const [currentTask, setCurrentTask] = useState('');
  const [listOfTasks, setListOfTasks] = useState([]);
  const addToList = (event) => {
    event.preventDefault();
    setListOfTasks([...listOfTasks, currentTask]);
    setCurrentTask('');
  };

  return (
    <>
      <form onSubmit={addToList}>
        <input
          type="text"
          placeholder="Введите задание на день"
          maxLength={30}
          style={inputStyle}
          onChange={(e) => setCurrentTask(e.target.value)}
          required="required"
          value={currentTask}
        />
        <button type="submit" style={buttonStyle}>
          Добавить
        </button>
      </form>
      <List listOfTasks={listOfTasks} setListOfTasks={setListOfTasks} />
    </>
  );
}

export default Form;
