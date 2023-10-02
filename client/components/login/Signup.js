// import React from "react";
// import { Link } from "react-router-dom";
// import { redirect } from "react-router-dom";

// const Signup = () => {
//   const handleClick = async () => {
//     const fullName = document.getElementById("fullName").value;
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const userData = {
//       fullName: fullName,
//       username: username,
//       password: password,
//     };
//     const result = await fetch("/login", {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//     if (result.status === 200) {
//       console.log("redirect hit");
//     }
//     console.log(typeof result.status);
//   };
//   // return (
//   //   <div>
//   //     <div>
//   //       Name:
//   //       <input id="fullName" />
//   //     </div>
//   //     <div>
//   //       Username: <input id="username" />
//   //     </div>
//   //     <div>
//   //       Password: <input id="password" />
//   //     </div>
//   //     <Link to="/login" onClick={handleClick}>
//   //       Get Started!
//   //     </Link>
//   //   </div>
//   // );
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//         <h2 className="text-2xl font-semibold text-black mb-6">Get Started!</h2>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="fullName"
//           >
//             Full Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 placeholder-gray-200 leading-tight focus:outline-none focus:shadow-outline"
//             id="fullName"
//             type="text"
//             placeholder="Full Name"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="username"
//           >
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             placeholder="Username"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//           />
//         </div>
//         <div className="text-center">
//           <Link
//             to="/login"
//             onClick={handleClick}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../images/highrise.jpeg";

const Signup = () => {
  const handleClick = async () => {
    // Your signup logic here
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative p-10 w-4/5 md:w-1/2 lg:w-1/3 bg-opacity-40 bg-clip-padding backdrop-blur-md backdrop-saturate-150 rounded-xl text-center z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Get Started!</h2>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-opacity-50 focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-opacity-50 focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-opacity-50 focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <Link
            to="/login"
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

export default Signup;
