// const Login = () => {
//   const handleClick = async () => {
//     const user = document.getElementById("user").value;
//     const pass = document.getElementById("pass").value;
//     const userData = { username: user, password: pass };
//     const result = await fetch("/signup", {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//     console.log(result.status);
//   };
//   return (
//     <div>
//       <div>
//         Username: <input id="user" />
//       </div>
//       <div>
//         Password:
//         <input id="pass" />
//       </div>
//       <div>
//         <Link onClick={handleClick} to="/app">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setAuth }) => {
  const handleClick = async () => {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const userData = { username: user, password: pass };
    const result = await fetch("/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(result.status);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-black mb-6">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="user"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="user"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pass"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="pass"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <Link
            to="/app"
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
