const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white drop-shadow-xs flex h-20">
      <div className="mx-auto flex container items-center justify-between px-11">
        <button className="rounded-md p-2 text-slate-600 lg:hidden">
          <img
            className="h-8 w-8"
            src="/src/assets/burger-menu-svgrepo-com.svg"
          ></img>
        </button>
        <a href="#" className="flex items-center gap-2">
          <img src="/public/logo.svg" alt="logo" />

          <span className="text-[20px] font-bold">
            <span className="text-slate-800">Dev </span>
            <span className="text-[#3a7ff2]">Stack</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-xs font-medium lg:flex">
          <a href="#" className="text-indigo-500">
            Home
          </a>
          <a
            href="#technologies"
            className="text-slate-500 transition hover:text-indigo-500"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-slate-500 transition hover:text-indigo-500"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-slate-500 transition hover:text-indigo-500"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-slate-500 transition hover:text-indigo-500"
          >
            Contact
          </a>
        </div>

        <div className="items-center gap-5 flex">
          <a
            href="#"
            className="text-sm text-nowrap font-medium text-slate-600"
          >
            Sign In
          </a>

          <a
            href="#"
            className="rounded-full bg-indigo-400 px-5 py-2 text-sm text-nowrap font-semibold text-white transition hover:bg-indigo-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
