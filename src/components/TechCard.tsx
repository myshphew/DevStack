import type { Tech } from "../type/type";
import { toast } from "react-toastify";


interface TechCardProps {
  tech: Tech;
  addStack: (tech: Tech) => void;
  selectedStacks: Tech[];
}

const TechCard = ({ tech, addStack, selectedStacks }: TechCardProps) => {
  const isSelected = selectedStacks.some((stack) => stack.id === tech.id);

  return (
    <div
      className={`rounded-2xl border ${
        isSelected ? "border-indigo-300" : "border-slate-100"
      } bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md`}
    >
      <div className="mb-4 flex items-start justify-between">
        <img
          className="w-8 h-8"
          src={`${tech.icon}`}
          alt="logo"
        ></img>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${tech.badgeColor}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="font-sora text-lg font-bold text-slate-800">
        {tech.name}
      </h3>

      <p className="font-sora mt-1.5 text-xs/normal text-slate-400">
        {tech.description}
      </p>

      <div
        className="mt-4 flex items-center justify-between border-t border-slate-100
        pt-3 text-[9px] text-slate-400"
      >
        <span className="text-xs font-sora rounded-lg px-2.5 py-1 bg-slate-50">
          {tech.category}
        </span>
        <span className="text-xs font-sora">{tech.difficulty}</span>
        <span className="flex gap-1 text-xs font-sora">
          <img src="/public/ratings.svg"></img>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => {
          if (!isSelected) {
            addStack(tech);
            toast.success("Tech added!");
          } else {
            toast.warning("Tech already added!");
          }
        }}
        className={`mt-3 w-full rounded-lg py-3 font-sora text-xs font-medium transition ${
          isSelected
            ? "cursor-default border border-slate-200 bg-white text-slate-400"
            : "cursor-pointer bg-indigo-400 text-white hover:bg-indigo-500"
        }`}
      >
        {isSelected ? "✓ Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
