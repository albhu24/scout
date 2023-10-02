import React from "react";
import { Link } from "react-router-dom";
// import "../../index.css";
import "../app.css";
import backgroundImage from "../../images/highrise.jpeg"; // Replace with your image path

const Home = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative p-10 w-4/5 md:w-1/2 lg:w-1/3 bg-opacity-40 bg-clip-padding backdrop-blur-md backdrop-saturate-150 rounded-xl text-center z-10 space-y-6">
        <h1 className="text-6xl font-extrabold text-white">SCOUT</h1>
        <p className="text-lg text-white mb-8">Mapping Your Next Move</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="text-white border-2 border-white py-2 px-5 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white border-2 border-white py-2 px-5 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      >
    </div>
  );
};
export default Home;
