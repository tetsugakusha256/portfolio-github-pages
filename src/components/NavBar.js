import React from "react";

export default function NavBar() {
  return (
    <div className="fixed bg-black w-full flex flex-row justify-between text-white">
      <div>Hire me !</div>
      <div className="flex flex-row">
        <div>Home</div>
        <div>Tech</div>
        <div>Project</div>
      </div>
    </div>
  );
}
