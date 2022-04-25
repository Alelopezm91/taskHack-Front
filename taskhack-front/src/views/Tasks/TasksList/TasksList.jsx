import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../../services/TaskService";
import { Link } from "react-router-dom";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="py-4">
        <b>Find your proyect!</b>
      </h1>
      <hr />
      <div className="row gx-3">
        {tasks.map((task, i) => {
            console.log(task)
          return (
            <div key={task._id} className="col-4 g-2">
              <div className="card text-center" key={task._id}>
                <div className="card-header">{task.title}</div>
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.posts?.length}</p>
                  <Link to={`/task/${task._id}`} className="btn btn-primary">
                    View my Tasks
                  </Link>
                </div>
                <div className="card-footer text-muted">
                  last update {i + 1} days ago
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksList;
