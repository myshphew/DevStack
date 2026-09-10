import SelectedTechGrid from "./SelectedTechGrid";
import TechCard from "./TechCard";
import type { Tech } from "../type/type";

interface TechGridProps {
  techData: Tech[];
}

const TechGrid = ({ techData }: TechGridProps) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-[1fr_245px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {techData.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
      <SelectedTechGrid techData={techData} />
    </div>
  );
};

export default TechGrid;
