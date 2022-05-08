import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../../../services/TaskService";

const TaskDetail = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getTask(id).then((task) => setTask(task));
  }, [id]);
  
  console.log(task)

  return (
    <div className="mt-4" style={{height:"100vh"}}>
      <h1
        className="text-primary text-center my-4 mb-4 mt-4"
        style={{ fontSize: "45px", color: "slategrey" }}
      >
        {task.title}
      </h1>
      <Link
        className="text-reset  text-decoration-none mb-4"
        to={`/tasks/${task.category}`}
      >
        <h3 className="text-secondary text-center mb-2 text-muted">
          {task.category}
        </h3>
      </Link>
      <div
        className="text-center mb-4"
        style={{ fontSize: "20px", color: "black" }}
        dangerouslySetInnerHTML={{ __html: task.content }}
      />
      <Link
        className="text-reset text-decoration-none"
        to={`/tasks/${task.city}`}
      >
        <h3 className="text-secondary text-center mb-2 text-muted">
          {task.city}
        </h3>
      </Link>
      <div style={{margin:"0 auto", textAlign:"center", marginTop:"5rem"}}>
        
      <button className="btn btn-dark">
        <a
          href="https://buy.stripe.com/test_cN24hdfpKdUJ4nu3cc"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light"
        >
          Go to payment
        </a>
      </button>
      </div>
      {/* <a
        href="https://buy.stripe.com/test_cN24hdfpKdUJ4nu3cc"
        target="_blank"
        rel="noreferrer"
        className=" mt-4btn btn-dark"
      >
        Go to payment
      </a> */}
    </div>
  );
};

export default TaskDetail;
