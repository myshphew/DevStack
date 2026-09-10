import type { Tech } from "../type/type";

interface TechCardProps {
  tech: Tech;
}

const SelectedTechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
      <div className="flex items-center gap-2">
        <img src={`/public${tech.icon}`} alt="logo"></img>

        <div>
          <p className="text-[12px] font-semibold text-slate-700">
            {tech.name}
          </p>

          <p className="text-[8px] text-slate-400">{tech.category}</p>
        </div>
      </div>

      <button className="text-slate-400 hover:text-red-500">×</button>
    </div>
  );
};

export default SelectedTechCard;
