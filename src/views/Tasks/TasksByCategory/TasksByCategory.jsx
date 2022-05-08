import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasksByCategory } from "../../../services/TaskService";
import { Link } from "react-router-dom";
// import "./TaskByCategory.css"

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
            <div class="row rowy">
              <div class="mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <Link
                      className="text-reset text-decoration-none"
                      to={`/tasks/${task.city}`}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        {task.city}
                      </h6>
                    </Link>
                    <div
                      className="card-text"
                       dangerouslySetInnerHTML={{ __html: task.content }}
                    />
                    <a href={`/task/${task.id}`} class="btn btn-secondary">
                      Go to task
                    </a>
                  </div>
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
