import SelectedTechCard from "./SelectedTechCard";
import type { Tech } from "../type/type";

interface SelectedTechGridProps {
  techData: Tech[];
  removeStack: (id: number) => void;
  removeAllStacks: () => void;
}

const SelectedTechGrid = ({
  techData,
  removeStack,
  removeAllStacks,
}: SelectedTechGridProps) => {
  return (
    <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[14px] font-bold text-slate-800">Your Stack</h3>

      <p className="mt-1 text-[11px] text-slate-400">
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
            className="mt-8 w-full rounded-md border border-red-200 py-2 text-[11px]
            font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      ) : (
        <div className="mt-4 flex h-[68px] items-center justify-center rounded-lg border border-dashed border-slate-200">
          <p className="text-[11px] text-slate-400">
            Your stack is empty.
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedTechGrid;
