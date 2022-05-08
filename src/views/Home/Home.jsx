import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UserService";
import { Link } from "react-router-dom";
import "./Home.css";
import Gardening from "../../assets/gardening.jpg";
import Moving from "../../assets/moving.jpg"
import Mounting from "../../assets/mounting.jpg"
import Cleaning from "../../assets/cleaning.jpg"
import Delivery from "../../assets/delivery.jpg"
import Cooking from "../../assets/cooking.jpeg"
import HomeBanner from "../../assets/kaspars-upmanis-nD2WzCZrlLE-unsplash.jpg"
import Madrid from "../../assets/madrid.png";
import Barcelona from "../../assets/barcelona.png"
import Valencia from "../../assets/valencia.png"

const Home = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  console.log(users);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="banner mb-2">
        <img src={HomeBanner} alt="Home Banner pic" />
        <div className="centered">
          <h1>Everyday life made easier!</h1>
          <div className="about-banner">
            <p>When life gets busy, you don’t have to tackle it alone.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <h1 className="py-4">
          <b>Find your next proyect!</b>
        </h1>
        <hr />
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Gardening} alt="Gardening Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>Gardening</h1>
                <p>Hire a Tasker to help with yardwork & landscaping!</p>
                <Link
                  to={`/tasks/category/gardening`}
                  className="btn btn-light"
                >
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Moving} alt="Moving Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>Moving</h1>
                <p>Hire a Tasker to help with yardwork & landscaping!</p>
                <Link to={`/tasks/category/moving`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Mounting} alt="Mounting Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>Mounting</h1>
                <p>Hire a Tasker to help with yardwork & landscaping!</p>
                <Link to={`/tasks/category/mounting`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Cleaning} alt="Cleaning Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>Cleaning</h1>
                <p>Hire a Tasker to help with yardwork & landscaping!</p>
                <Link to={`/tasks/category/cleaning`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Delivery} alt="Delivery Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>Delivery</h1>
                <p>Hire a Tasker to help with yardwork & landscaping!</p>
                <Link to={`/tasks/category/delivery`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Cooking} alt="Cooking Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>Cooking</h1>
                <p>Hire a Tasker to help with yardwork & landscaping!</p>
                <Link to={`/tasks/category/cooking`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h1 className="py-4">
          <b>Tasks in your city!</b>
        </h1>
        <hr />
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Madrid} alt="Madrid icon" />
              </div>
              <div className="flip-card-back">
                <h1>Madrid</h1>
                <p>Find all the tasks in your city </p>
                <Link to={`/tasks/Madrid`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Barcelona} alt="Barcelona icon" />
              </div>
              <div className="flip-card-back">
                <h1>Barcelona</h1>
                <p>Find all the tasks in your city </p>
                <Link to={`/tasks/Barcelona`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Valencia} alt="Valencia icon" />
              </div>
              <div className="flip-card-back">
                <h1>Valencia</h1>
                <p>Find all the tasks in your city </p>
                <Link to={`/tasks/Valencia`} className="btn btn-light">
                  View tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

