import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import ProtectedRoute from "./guards/ProtectedRoute";
import Home from "./views/Home/Home";
import { useAuthContext } from "./contexts/AuthContext";
import Favourites from "./views/Favourites/Favourites";
import NewTask from "./views/Tasks/NewTask/NewTask";
import EditTask from "./views/Tasks/EditTask/EditTask";
import TaskDetail from "./views/Tasks/TaskDetail/TaskDetail";
import CheckoutForm from "./views/Tasks/CheckoutForm/CheckoutForm";
import UserDetail from "./views/Users/UserDetail/UserDetail";
import Hired from "./views/Hired/Hired";

function App() {
  const { authenticationChecked } = useAuthContext();

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {authenticationChecked ? (
          <Routes>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="task/new" element={<NewTask/>}/>
              <Route path="hired" element={<Hired/>}/>
              <Route path="users/:id" element={<UserDetail/>}/>
              <Route path="task/:id/edit" element={<EditTask/>}/>
              <Route path="task/:id" element={<TaskDetail/>}/>
              <Route path="hire/:userId" element={<CheckoutForm/>}/>
            </Route>
          </Routes>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
