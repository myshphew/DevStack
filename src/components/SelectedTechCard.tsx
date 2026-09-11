import type { Tech } from "../type/type";
import { toast } from "react-toastify";

interface TechCardProps {
  tech: Tech;
  removeStack: (id: string) => void;
}

const SelectedTechCard = ({ tech, removeStack }: TechCardProps) => {
  return (
    <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3">
      <div className="flex items-center gap-4">
        <img
          className="h-6 w-6"
          src={`${tech.icon}`}
          alt="logo"
        ></img>

        <div>
          <p className="font-sora text-xs font-semibold text-slate-800">
            {tech.name}
          </p>

          <p className="font-sora text-[10px] text-slate-400">
            {tech.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          removeStack(tech.id);
          toast.success("Tech removed");
        }}
        className="text-slate-400 hover:text-red-500"
      >
        ×
      </button>
    </div>
  );
};

export default SelectedTechCard;
