import Image from "../assets/heroimg.png";
const Profile = () => {
  return (
    <div
      id="profile"
      className=" bg-[#f9fafb] flex flex-col items-center justify-center min-h-screen px-8"
    >
      <h1 className="text-3xl text-accent font-semibold ">Profile</h1>
      <div className="flex items-center justify-between max-w-6xl w-full gap-2 mt-10 ">
        <div className="w-1/2">
          <p className="">
            Hello, I am Jobayer Mahmud, a Front-End Developer. I have a passion
            for creating intuitive user interfaces via React.
            <br />I taught at Programming Hero from September 2021 to September
            2024 and had previously worked on various projects from time to
            time.
            <br />I Also possess Back-End development knowledge and can build
            Full-Stack projects with Node & Angular. I strive to keep up with
            the latest trends in web development.
          </p>
          <div className="mt-5 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold ">
              Current tools & frameworks :
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                JavaScript
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                React.js
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                Node.js
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                MongoDB
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                Express.js
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                Git & Github
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                Tailwind CSS
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                REST APIs
              </span>
              <span className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-base-200 hover:bg-accent hover:text-base-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md">
                JWT
              </span>
            </div>
          </div>
        </div>

        <div className=" w-1/2 flex justify-center relative group">
          <img
            className=" rounded-md shadow-lg  object-cover  z-10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl "
            src={Image}
            alt="Jobayer Mahmud"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
