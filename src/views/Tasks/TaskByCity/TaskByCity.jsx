import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasksByCity } from "../../../services/TaskService";

const TasksByCity = () => {
  const [tasks, setTasks] = useState([]);
  const { city } = useParams();

  useEffect(() => {
    getTasksByCity(city).then((task) => setTasks(task));
  }, [city]);

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
                <div>{task.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksByCity;
