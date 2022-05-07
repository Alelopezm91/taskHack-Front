import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../../../services/TaskService";

const TaskDetail = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getTask(id).then((task) => setTask(task));
  }, [id]);

  return (
    <div>
      <h1
        className="text-primary text-center my-4"
        style={{ fontSize: "45px" }}
      >
        {task.title}
      </h1>
      <div>{task.category}</div>
      <div dangerouslySetInnerHTML={{ __html: task.content }} />
    </div>
  );
};

export default TaskDetail;
