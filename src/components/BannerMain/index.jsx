import Avatars from "../../assets/image/avatars.jpeg";
import React from "react";

function BannerMain() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-[90vh]"
        id="main"
      >
        <img
          className="rounded-full shadow-lg translate-y-[60px] w-[300px] mx-auto"
          src={Avatars}
          alt=""
        />
        <div className="bg-gradient-to-t from-black to-black/55 backdrop-blur-lg z-20 rounded-full">
          <h1 className="text-4xl font-bold">
            My passion for writing code to raise my goals, and raise my level
            programming
          </h1>
        </div>
      </div>
    </>
  );
}

export default BannerMain;
