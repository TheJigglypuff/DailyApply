import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className=" text-2xl font-semibold text-blue-500 ">TheTracker</span>

      <div className=" w-1/5 flex justify-between">
      <Link className="text-blue-500" to="/here">
          here
      </Link>

      <Link className="text-blue-500" to="/here1">
          nothere
      </Link>

      <Link className="text-blue-500" to="/here2">
          notheretoo
      </Link>
      </div>
  </div>
</nav>

  );
}

export default Navbar;