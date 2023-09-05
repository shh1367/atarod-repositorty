import { useState } from "react";
import { MyContext } from "./myContext";
import TaskItems from "./TaskItems";
import TopItems from "./TopItem";

function App() {
  const [todoItems, setTodoItem] = useState([
    {
      id: 1,
      task: "کار شماره ۱ ",
      active: false
    },
    {
      id: 2,
      task: "کارشماره ۲",
      active: true
    },
    {
      id: 3,
      task: "کارشماره ۳",
      active: false
    }
    ,
  ])

  
  return (
    <div className="container w-100 h-100 p-4">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-4 h-fit">
          <MyContext.Provider value={{ todoItems, setTodoItem }}>
            <TopItems />
            <TaskItems />
          </MyContext.Provider>

        </div>
      </div>
    </div>
  );
}

export default App;
