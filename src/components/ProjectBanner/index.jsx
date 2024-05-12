import React from "react";
import CreateCard from "./create_card";
import ProjectChat from "../../assets/image/project_chat.png";
import ProjectNietoLink from "../../assets/image/project_nietolink.png";
import ProjectOmni from "../../assets/image/project_omni.png";

function ProjectBanner() {
  return (
    <main
      className="flex justify-center items-center flex-col mt-[90px] text-center"
      id="project"
    >
      <div>
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="p-[6px] opacity-50">These are some notable projects.</p>
      </div>
      <div>
        <CreateCard
          Image={ProjectOmni}
          Title="OmniBot Page"
          Description="
A Telegram Bot, with the collaboration of a colleague, the official page."
        />
        <CreateCard
          Image={ProjectNietoLink}
          Title="Nieto.link"
          Description="A Copy of codi.link or CodePen, using vanilla Javascript."
          LinkGithub="https://github.com/Angel45003/nieto.link"
        />
        <CreateCard
          Image={ProjectChat}
          Title="App Chat"
          Description="
A Chat App using ReactJS and Socket.io"
          LinkGithub="https://github.com/Angel45003/app-chat-reactjs"
        />
      </div>
    </main>
  );
}

export default ProjectBanner;
