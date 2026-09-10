const Nav = () => {
  return (
    <div className="mx-auto flex h-20 container items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <img src="/public/logo.svg" alt="logo" />

        <span className="text-[20px] font-bold">
          <span className="text-slate-800">Dev</span>
          <span className="text-pink-600">Stack</span>
        </span>
      </a>

      <div className="hidden items-center gap-8 text-sm font-medium md:flex">
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

      <div className="hidden items-center gap-5 md:flex">
        <a href="#" className="ttext-sm font-medium text-slate-600">
          Sign In
        </a>

        <a
          href="#"
          className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
        >
          Sign Up
        </a>
      </div>

      <button className="rounded-md p-2 text-slate-600 md:hidden">☰</button>
    </div>
  );
};

export default Nav;
