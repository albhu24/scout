import React from "react";
import { Link } from "react-router-dom";
// import "../../index.css";
import "../app.css";
// const Home = () => {
//   return (
//     <div class="flex flex-col">
//       <div>SCOUT</div>
//       <div>Mapping Your Next Move</div>
//       <Link className="btn btn-outline btn-info" to="/login">
//         Login
//       </Link>
//       <Link className="btn btn-outline btn-info" to="/signup">
//         Register
//       </Link>
//     </div>
//   );
// };
const Home = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
        <h1 className="text-6xl font-extrabold mb-4">SCOUT</h1>
        <p className="text-lg text-gray-600 mb-8">Mapping Your Next Move</p>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
