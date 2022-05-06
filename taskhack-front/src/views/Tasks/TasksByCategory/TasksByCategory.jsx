import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasksByCategory } from "../../../services/TaskService";


const TasksByCategory = () => {
  const [tasks, setTasks] = useState([]);
    const { category } = useParams();

     useEffect(() => {
       getTasksByCategory(category).then((task) => setTasks(task));
     }, [category]);

  return (
    <div className="container">
      <h1 className="py-4">
        <b>Find your proyect!</b>
      </h1>
      <hr />
      <div className="row gx-3">
        {tasks?.map((task, i) => {
          console.log(task);
          return (
            <div key={task._id} className="col-4 g-2">
                <div className="card-body">
                  <div>
                    {task.title}
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksByCategory;
