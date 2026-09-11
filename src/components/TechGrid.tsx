import SelectedTechGrid from "./SelectedTechGrid";
import TechCard from "./TechCard";
import type { Tech } from "../type/type";
import { useState } from "react";
import { toast } from "react-toastify";

interface TechGridProps {
  techData: Tech[];
}

const TechGrid = ({ techData }: TechGridProps) => {
  const [selectedStacks, setSelectedStacks] = useState<Tech[]>([]);
  const addStack = (tech: Tech) => {
    setSelectedStacks([...selectedStacks, tech]);
  };
  const removeStack = (id: string) => {
    setSelectedStacks(selectedStacks.filter((tech) => tech.id !== id));
  };

  const removeAllStacks = () => {
    setSelectedStacks([]);
    toast.success("All tech removed");
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_245px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techData.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            addStack={addStack}
            selectedStacks={selectedStacks}
          />
        ))}
      </div>
      <SelectedTechGrid
        techData={selectedStacks}
        removeStack={removeStack}
        removeAllStacks={removeAllStacks}
      />
    </div>
  );
};

export default TechGrid;
