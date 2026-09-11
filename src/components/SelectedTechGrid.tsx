import SelectedTechCard from "./SelectedTechCard";
import type { Tech } from "../type/type";

interface SelectedTechGridProps {
  techData: Tech[];
  removeStack: (id: string) => void;
  removeAllStacks: () => void;
}

const SelectedTechGrid = ({
  techData,
  removeStack,
  removeAllStacks,
}: SelectedTechGridProps) => {
  return (
    <div className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
      <h3 className="text-[14px] font-bold text-slate-800">Your Stack</h3>

      <p className="mt-2 mb-4 font-sora text-[10px] text-slate-400">
        {techData.length === 0
          ? "No technologies selected yet."
          : `${techData.length} ${
              techData.length === 1 ? "Technology" : "Technologies"
            } Selected`}
      </p>
      {techData.length > 0 ? (
        <>
          <div>
            {techData.map((tech) => (
              <SelectedTechCard
                key={tech.id}
                tech={tech}
                removeStack={removeStack}
              />
            ))}
          </div>

          <button
            onClick={removeAllStacks}
            className="mt-4 w-full rounded-md border border-red-200 py-3 text-xs
            font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      ) : (
        <div className="mt-4 flex h-17 items-center justify-center rounded-lg border border-dashed border-slate-200">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      )}
    </div>
  );
};

export default SelectedTechGrid;
