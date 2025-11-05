import Lottie from "lottie-react";
import animationData from "../assets/intro-animation.json";

const IntroGif = () => {
  return (
    <div className="w-[350px] h-[350px] flex items-center justify-center">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default IntroGif;
