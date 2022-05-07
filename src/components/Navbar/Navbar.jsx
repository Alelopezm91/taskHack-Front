import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from "../../store/AcessTokenStore";
import "./Navbar.css"

const Navbar = () => {
  const { user } = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg Navbar-color">
      <div className="container-fluid Navbar-color">
        <NavLink className="text navbar-brand" to="/">
          TaskHacks
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink className=" text nav-link Navbar-color" to="/tasks">
                    Tasks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className=" text nav-link Navbar-color" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="text nav-item">
                  <NavLink
                    className=" text nav-link Navbar-color"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className=" text nav-item">
                  <NavLink className=" text nav-link Navbar-color" to="/tasks">
                    Tasks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link Navbar-color" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link Navbar-color" to="/task/new">
                    Create New Task
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
