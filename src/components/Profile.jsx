import Image from "../assets/heroImg.jpg";
const Profile = () => {
  return (
    <div
      id="profile"
      className="flex flex-col items-center justify-center min-h-screen px-8"
    >
      <h1 className="text-4xl text-center text-accent font-semibold ">
        Profile
      </h1>
      <div className="border w-30 bg-accent mt-5"></div>
      <div className="flex items-center justify-between max-w-6xl w-full gap-2 mt-10">
        <div className="w-1/2">
          <p className="text-xl  leading-relaxed">
            Hello, I am Jobayer Mahmud, a Front-End Developer. I have a passion
            for creating intuitive user interfaces via React.
            <br />I taught at Programming Hero from September 2021 to September
            2024 and had previously worked on various projects from time to
            time.
            <br />I Also possess Back-End development knowledge and can build
            Full-Stack projects with Node & Angular. I strive to keep up with
            the latest trends in web development.
          </p>
        </div>
        <div className="w-1/2 flex justify-center relative group">
          <img
            className=" rounded-md shadow-lg w-1/2  object-cover  z-10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl "
            src={Image}
            alt="Jobayer Mahmud"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
