import { computeHeadingLevel } from "@testing-library/react";
import { useContext } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { MyContext } from "./myContext";

const TopItems = () => {
  const [task, setTask] = useState('')

  const { todoItems, setTodoItem } = useContext(MyContext);

  const inputAddItemHandler = (event) => {
    setTask(event.target.value)
    console.log(task);



  }
  const sendItemHandler = (event) => {
    event.preventDefault();
    setTodoItem([ ...todoItems, {
      id: Math.random(),
      task: task,
      active: false
    }]);
    setTask('');
  }


  return (
    <Fragment>
      <h4 className="text-center text-info text-shadow">
        اپلیکیشن مدیریت برنامه ها
      </h4>
      <form onSubmit={sendItemHandler}>
        <div className="form-group d-flex">
          <input placeholder="یک مورد وارد نمایید" type="text" className="form-control" value={task} on onChange={inputAddItemHandler} />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>

        </div>
      </form>
    </Fragment>
  );
};

export default TopItems;
