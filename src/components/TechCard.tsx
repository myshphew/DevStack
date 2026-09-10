const TechCard = () => {
  return (
    <div
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm
    transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between">
        <img src="/public/tech-icons/React.svg" alt="react-logo"></img>
        <span className="rounded-full px-2.5 py-1 text-[8px] font-semibold bg-sky-50 text-sky-500">
          Popular
        </span>
      </div>

      <h3 className="text-[15px] font-bold text-slate-800">React</h3>

      <p className="mt-2 min-h-[48px] text-[10px] leading-[1.55] text-slate-400">
        A declarative, component-based JavaScript library for building modern
        user interfaces.
      </p>

      <div
        className="mt-4 flex items-center justify-between border-t border-slate-100
        pt-3 text-[9px] text-slate-400"
      >
        <span>Frontend</span>
        <span>Beginner-Friendly</span>
        <span>⭐ 4.9</span>
      </div>

      <button
        className="mt-3 w-full rounded-md bg-slate-950 py-2.5 text-[10px]
        font-medium text-white transition hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
