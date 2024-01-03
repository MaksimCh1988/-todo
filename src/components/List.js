import Item from './Item';

function List(props) {
  let todoList = ['fdgdf'];
  return todoList.length > 0 ? (
    <>
       <Item/>
       <Item/>
       <Item/>
       <p>{`Всего дел: ${todoList.length}`}</p>
    </>
  ) : (
    <p> Список дел пустой </p>
  );
}
export default List;
