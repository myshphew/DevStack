
const SelectedTechCard = () => {
  return (
    <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
      <div className="flex items-center gap-2">
        <span className="font-bold text-orange-500">S</span>

        <div>
          <p className="text-[12px] font-semibold text-slate-700">Svelte</p>

          <p className="text-[8px] text-slate-400">Frontend</p>
        </div>
      </div>

      <button className="text-slate-400 hover:text-red-500">×</button>
    </div>
  );
};

export default SelectedTechCard;
