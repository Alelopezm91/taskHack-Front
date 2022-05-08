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
import TasksList from "./views/Tasks/TasksList/TasksList";
import TasksByCategory from "./views/Tasks/TasksByCategory/TasksByCategory";
import TasksByCity from "./views/Tasks/TaskByCity/TaskByCity";
import Footer from "./components/Footer/Footer";

function App() {
  const { authenticationFetched } = useAuthContext();

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {authenticationFetched ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="tasks" element={<TasksList />} />
            <Route path="task/:id" element={<TaskDetail />} />
            <Route path="tasks/category/:category" element={<TasksByCategory />} />
            <Route path="tasks/:city" element={<TasksByCity />} />

            
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="task/new" element={<NewTask />} />
              <Route path="hired" element={<Hired />} />
              <Route path="users/:id" element={<UserDetail />} />
              <Route path="task/:id/edit" element={<EditTask />} />
              <Route path="hire/:userId" element={<CheckoutForm />} />
            </Route>
          </Routes>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
