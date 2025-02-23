import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav h-[100px] bg-[#1a1a2e] shadow-md">
      <div className="navwrapper w-[70%] h-[100%] m-auto flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-extrabold tracking-wide">
  <span className="text-[#ffa500]">Hiren</span>
</Link>

        <div className="sociallink flex gap-[20px]">
          <Link
            to="/"
            className="relative text-white text-lg transition-all duration-300 hover:text-[#6742a3] hover:scale-110 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#6742a3] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/project"
            className="relative text-white text-lg transition-all duration-300 hover:text-[#6742a3] hover:scale-110 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#6742a3] after:transition-all after:duration-300 hover:after:w-full"
          >
            Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
