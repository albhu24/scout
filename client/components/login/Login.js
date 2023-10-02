// import React from "react";
// import { Link } from "react-router-dom";
// import backgroundImage from "../../images/highrise.jpeg"; // Replace with your image path

// const Login = () => {
//   const handleClick = async () => {
//     // Your login logic here
//   };

//   return (
//     <div
//       className="h-screen flex flex-col justify-center items-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="bg-white p-10 w-96 rounded-lg shadow-lg text-center text-white" // Changed text color to white
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
//       >
//         <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>
//         <div className="mb-4">
//           <label
//             className="block text-white text-sm font-bold mb-2"
//             htmlFor="user"
//           >
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//             id="user"
//             type="text"
//             placeholder="Username"
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.5)", // Lighter background color
//               color: "white", // White text color
//             }}
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             className="block text-white text-sm font-bold mb-2"
//             htmlFor="pass"
//           >
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//             id="pass"
//             type="password"
//             placeholder="Password"
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.5)", // Lighter background color
//               color: "white", // White text color
//             }}
//           />
//         </div>
//         <div className="text-center">
//           <Link
//             to="/app"
//             onClick={handleClick}
//             className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white px-4 py-2 border border-white-500 hover:border-transparent rounded-lg transition duration-300"
//           >
//             Submit
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../images/highrise.jpeg";

const Login = () => {
  const handleClick = async () => {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const userData = { username: user, password: pass };
    // Your login logic here
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative p-10 w-4/5 md:w-1/2 lg:w-1/3 bg-opacity-40 bg-clip-padding backdrop-blur-md backdrop-saturate-150 rounded-xl text-center z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="user"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-opacity-50 focus:outline-none focus:shadow-outline"
            id="user"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="pass"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-opacity-50 focus:outline-none focus:shadow-outline"
            id="pass"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <Link
            to="/app"
            onClick={handleClick}
            className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white px-4 py-2 border border-white-500 hover:border-transparent rounded-lg transition duration-300"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
