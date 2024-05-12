import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-black/55 backdrop-blur-lg sticky top-0 z-50">
      <div className="list-none">
        <li>
          <a href="#" className="text-2xl">
            <i class="bx bxl-github"></i>
          </a>
        </li>
      </div>
      <div className="flex justify-center *:p-[6px] list-none">
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
