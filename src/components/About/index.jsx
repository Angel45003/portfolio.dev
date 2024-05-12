import AvatarsImg from "../../assets/image/avatars.jpeg";
import React from "react";

function AboutPage() {
  return (
    <>
      <main
        className="md:flex md:justify-between flex:col w-[95%] mx-auto text-center items-center"
        id="about"
      >
        <div>
          <img src={AvatarsImg} className="rounded-full mx-auto" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            Hello!, I'm <span>Angel Nieto</span>
          </h1>
          <p className="opacity-50 text-center text-xs">
            Hello!, my name is Angel Nieto, or also known as Nieto, I am a
            FrontEnd Developer with few experiences in BackEnd.
          </p>
        </div>
      </main>
    </>
  );
}

export default AboutPage;
