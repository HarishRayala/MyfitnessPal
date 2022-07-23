import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Blog.css";

const Navbarblog = () => {
  return (
    <>
      <div className="bigcontainer">
        <div className="midcontainer">
          <NavLink to="/">RECIPES</NavLink>
          <nav class="dropdown">
            <NavLink to="/blog" class="dropbtn">
              NUTRITION
            </NavLink>
            <div class="dropdown-content">
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/02/15-Great-Foods-For-Gut-Health-2-500x315.jpg.webp"
                  alt=""
                />
                <p>15 Great Foods For Gut Health</p>
              </Link>
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Featured200smooth-1-500x315.jpg"
                  alt=""
                />
                <p>5 Summer Desserts with Less Than 100 Calories</p>
              </Link>
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2017/10/How-to-Make-Your-Own-Almond-Butter-1-500x315.jpg.webp"
                  alt=""
                />
                <p>How To Make Your Own Almond</p>
              </Link>
            </div>
          </nav>

          <nav class="dropdown">
            <NavLink to="/blog">WEIGHT LOSS</NavLink>
            <div class="dropdown-content">
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/02/15-Great-Foods-For-Gut-Health-2-500x315.jpg.webp"
                  alt=""
                />
                <p>15 Great Foods For Gut Health</p>
              </Link>
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/How-to-Stay-Healthy-and-on-Track-With-Your-Health-Goals-on-Vacation-500x315.jpg"
                  alt=""
                />
                <p>5 Summer Desserts with Less Than 100 Calories</p>
              </Link>
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/02/inline-18-500x315.jpg"
                  alt=""
                />
                <p>How To Make Your Own Almond</p>
              </Link>
            </div>
          </nav>

          <nav class="dropdown">
            <NavLink to="/blog">FITNESS</NavLink>
            <div class="dropdown-content">
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/3-Perks-of-Hot-Weather-Workouts-500x315.jpg"
                  alt=""
                />
                <p>15 Great Foods For Gut Health</p>
              </Link>
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/5-Ways-to-Progress-From-Walking-to-Running-500x315.jpg"
                  alt=""
                />
                <p>5 Summer Desserts with Less Than 100 Calories</p>
              </Link>
              <Link to="/blog">
                <img
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/MHM-Blog-Post-2-Hero-1-500x315.jpg"
                  alt=""
                />
                <p>How To Make Your Own Almond</p>
              </Link>
            </div>
          </nav>
          <NavLink to="/blog">INSPIRATION</NavLink>
          <NavLink to="/blog">ESSENTIALS</NavLink>
          <NavLink to="/blog">VIDEO</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbarblog;
