import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { deleteTask } from "../../services/TaskService";

const Profile = () => {
  const { user, getUser } = useAuthContext();

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      getUser();
    });
  };

  console.log(user);
  return (
    <div className="Profile">
      <h1 className="my-4 pb-3">
        <b>Profile</b>
      </h1>
      {user.image ? (
        <img src={user.image} alt="" />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt=""
        />
      )}
      <h3>
        My tasks
        <Link to="/task/new" className="btn btn-light border ms-3">
          <i className="fas fa-plus"></i>
        </Link>
      </h3>
      <hr />
      <div>
        <ul className="list-group">
          {user.tasks.map((task, i) => {
            return (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <Link
                  className="text-reset text-decoration-none"
                  to={`/task/${task.id}`}
                >
                  <p className="m-0">
                    {i + 1}. {task.title}
                  </p>
                </Link>
                <div>
                  <Link
                    className="btn btn-light btn-small me-3 border"
                    to={`/task/${task.id}/edit`}
                  >
                    <i className="fas fa-edit"></i>
                  </Link>
                  <button
                    className="btn btn-danger btn-xs pull-right remove-item"
                    onClick={() => handleDelete(task.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
