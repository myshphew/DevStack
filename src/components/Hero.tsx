const Hero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-105 items-center justify-between lg:gap-8">
        <div className="mt-20">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-1.5px] text-slate-900 lg:text-5xl">
            Build Your Ideal
          </h1>
          <h1 className="brand-gradient-text text-5xl/tight font-extrabold tracking-[-1.5px] text-transparent lg:text-6xl">
            Development Stack
          </h1>

          <p className="mt-6 max-w-140 text-[15px] leading-6 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="bg-linear-to-r from-[#53dbf2] to-[#3a7ff2] rounded-md px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition"
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

        <div className="w-95 items-center justify-center lg:flex">
          <img src="/public/hero.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
