import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/itechnology";
import TechCard from "./TechCard";

interface ITechnologies {
  technologies: ITechnology[];
  selectedTechs: ITechnology[];
  setSelectedTech: Dispatch<SetStateAction<ITechnology[]>>;
}
const AvailableTech = ({
  technologies,
  selectedTechs,
  setSelectedTech,
}: ITechnologies) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {technologies.map((technology) => {
        return (
          <TechCard
            technology={technology}
            key={technology.id}
            selectedTechs={selectedTechs}
            setSelectedTech={setSelectedTech}
          />
        );
      })}
    </div>
  );
};

export default AvailableTech;
