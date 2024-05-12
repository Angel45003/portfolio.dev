import React from "react";

function CreateCard({ Image, Title, Description, LinkGithub, Skills }) {
  return (
    <div className="md:w-[300px] inline-block bg-gradient-to-t from-neutral-950 to-black m-[10px] rounded-lg w-[100%] hover:bg-neutral-950 ">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="p-[6px]">
        <h1 className="text-3xl font-bold">{Title}</h1>
        <p className="opacity-50 text-xs">{Description}</p>
        <a href={LinkGithub} className="bg-black p-[6px] rounded-full">
          <span>Github</span>
        </a>
        <div>
          <span>{Skills}</span>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
