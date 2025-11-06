const Header = () => {
  return (
    <div className="flex justify-between items-center rounded-xl px-3 py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#111a28]/70 border border-white/10 shadow-sm">
      <div className="text-4xl text-accent font-extrabold">JOBAYER.</div>
      <div className="flex gap-10 ">
        <div className="flex text-accent font-medium gap-10 mt-2">
          <a href="#profile">Profile</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          target="_blank"
          href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
          className=" px-5 py-2 font-medium border rounded-md bg-amber-600 hover:bg-amber-700 hover:scale-110 hover:-translate-y-1
                   transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
