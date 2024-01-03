import Item from './Item';

function List({ listOfTasks, setListOfTasks }) {
  console.log(listOfTasks);

  return listOfTasks.length > 0 ? (
    <>
      {listOfTasks.map((text, index) => (
        <Item itemText={text} key={index} setListOfTasks={setListOfTasks} indexOfTask={index} listOfTasks = {listOfTasks}/>
      ))}

      <p>{`Всего дел: ${listOfTasks.length}`}</p>
    </>
  ) : (
    <p> Список дел пустой </p>
  );
}
export default List;
