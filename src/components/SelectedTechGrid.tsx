import SelectedTechCard from "./SelectedTechCard";

const SelectedTechGrid = () => {
  return (
    <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[14px] font-bold text-slate-800">Your Stack</h3>

      <p className="mt-1 text-[11px] text-slate-400">2 Technology Selected</p>
      <div>
        <SelectedTechCard/>
        <SelectedTechCard/>
      </div>
      <button className="mt-8 w-full rounded-md border border-red-200 py-2 text-[11px] font-semibold text-red-500 transition hover:bg-red-50">
                Remove All
            </button>
    </div>
  );
};

export default SelectedTechGrid;
