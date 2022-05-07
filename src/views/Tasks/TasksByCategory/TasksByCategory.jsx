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
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{task.category}</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksByCategory;
