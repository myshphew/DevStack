const Hero = () => {
  return (
    <div className="mx-auto container">
      <div className="flex min-h-[470px] items-center justify-between gap-12 py-20">
        <div>
          <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-slate-900 md:text-[52px]">
            Build Your Ideal
          </h1>
          <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-indigo-500 md:text-[52px]">
            Development Stack
          </h1>

          <p className="mt-6 max-w-[560px] text-[15px] leading-6 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="bg-indigo-500 gradient-button rounded-md px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-8 py-2.5 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hidden w-[380px] items-center justify-center lg:flex">
          <img src="/public/Hero Isometric 3D Graphic Column.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
