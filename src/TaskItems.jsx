import { useContext } from "react";
import { MyContext } from "./myContext";

const TaskItems = () => {

  const { todoItems, setTodoItem } = useContext(MyContext);

  const taskActiveHandler = (id) => {


    const tempTodoItem = [...todoItems]

    const selectedId = tempTodoItem.findIndex(t => t.id == id);
    tempTodoItem[selectedId].active = !tempTodoItem[selectedId].active
    setTodoItem(tempTodoItem);







  }

  // console.log(todoItems);
  if (todoItems.length > 0) {
    return (
      <ul className="list-group m-0 p-0 mt-2">
        {
          todoItems.map(item => (
            <li className={`list-group-item d-flex justify-content-between ${item.active ? "list-group-item-success" : ""}`} >
              {item.task}
              <span>
                {item.active ? <i className="me-3 pointer fa fa-check text-success transition_200 text_hover_shadow" onClick={()=> taskActiveHandler(item.id)}></i> :
                  <i className="me-3 pointer fa fa-times text-warning transition_200 text_hover_shadow" onClick={() => taskActiveHandler(item.id)}></i>
                }
                <i className="me-3 pointer fa fa-trash text-danger transition_200 text_hover_shadow" ></i>
              </span>
            </li>
          ))
        }
      </ul>
    )

  } else {
    return <h4 className="text-center text-danger mt-4" >اطلاعاتی وارد نشده است !!!</h4>

  }

}
export default TaskItems;