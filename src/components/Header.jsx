import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between sticky rounded-xl px-3 py-5">
      <img
        src={logo}
        className="w-40 h-10 object-contain"
        alt="Jobayer Mahmud"
      />
      <div className="flex gap-10 text-accent font-bold">
        <div className="flex gap-10 mt-2">
          <a href="#profile">Profile</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn px-10  hover:!bg-[#3f5040] hover:text-[#fff]  "
        >
          Resume
        </a>

        <label className="flex cursor-pointer gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
