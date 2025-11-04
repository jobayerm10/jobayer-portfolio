import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const LeftAside = () => {
  return (
    <div className="flex flex-col-reverse gap-5">
      <FaGithub className="text-2xl text-accent"></FaGithub>
      <FaLinkedin className="text-2xl text-accent"></FaLinkedin>
      <FaFacebook className="text-2xl text-accent"></FaFacebook>
    </div>
  );
};

export default LeftAside;
