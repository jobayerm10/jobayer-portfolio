import { Typewriter } from "react-simple-typewriter";
import IntroGif from "./IntroGif";

const Intro = () => {
  return (
    <div className="flex items-center justify-between min-h-screen  px-8">
      <div className="flex flex-col items-start text-left">
        <h4 className="text-xl font-medium">Hi, I'm</h4>

        <p className="text-5xl mt-3 font-bold text-accent">
          JOBAYER <span>MAHMUD</span>
        </p>

        <p className="mt-4 text-5xl text-accent font-semibold">
          I{" "}
          <span className="text-amber-700">
            <Typewriter
              words={["create", "develop", "maintain"]}
              loop={0}
              cursor={false}
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>{" "}
          websites
        </p>

        <p className="font-medium mt-2 w-[50%]">
          I am a Front-End developer, Educator and a Tech enthusiast. I am
          always looking for new opportunities to learn and grow
        </p>
      </div>

      <IntroGif></IntroGif>
    </div>
  );
};

export default Intro;
