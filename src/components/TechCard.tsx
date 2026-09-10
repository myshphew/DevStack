import type { Tech } from "../type/type";

interface TechCardProps {
  tech: Tech;
  addStack: (tech: Tech) => void;
  selectedStacks: Tech[];
}

const TechCard = ({ tech, addStack, selectedStacks }: TechCardProps) => {
  const isSelected = selectedStacks.some((stack) => stack.id === tech.id);

  return (
    <div
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm
    transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between">
        <img src={`/public/tech-icons${tech.icon}`} alt="logo"></img>
        <span
          className={`rounded-full px-2.5 py-1 text-[8px] font-semibold ${tech.badgeColor}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="text-[15px] font-bold text-slate-800">{tech.name}</h3>

      <p className="mt-2 min-h-[48px] text-[10px] leading-[1.55] text-slate-400">
        {tech.description}
      </p>

      <div
        className="mt-4 flex items-center justify-between border-t border-slate-100
        pt-3 text-[9px] text-slate-400"
      >
        <span>{tech.category}</span>
        <span>{tech.level}</span>
        <span>⭐ {tech.rating}</span>
      </div>

      <button
        onClick={() => addStack(tech)}
        disabled={isSelected}
        className={`mt-3 w-full rounded-md bg-slate-950 py-2.5 text-[10px]
        font-medium text-white transition hover:bg-slate-800 ${
          isSelected
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
