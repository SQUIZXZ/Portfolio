import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-wrapper w-100 flex justify-between items-center bg-yellow-500">
          <div>FullstackFin</div>
          <ul className="flex space-x-10 bg-gray-500 p-6 rounded-full">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
    </nav>
  );
}
