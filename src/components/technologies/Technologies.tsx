import { use, useState } from "react";
import type { ITechnology } from "../../types/itechnology";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";

interface ITech {
  technologiesPromise: Promise<ITechnology[]>;
}
const Technologies = ({ technologiesPromise }: ITech) => {
  const technologies = use(technologiesPromise);
  const [selectedTechs, setSelectedTech] = useState<ITechnology[]>([]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 container mx-auto">
        <div className="col-span-4">
          <h2 className="text-5xl font-bold tracking-tight mb-3">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl font-extralight mb-5">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="col-span-3">
          <AvailableTech
            technologies={technologies}
            selectedTechs={selectedTechs}
            setSelectedTech={setSelectedTech}
          />
        </div>
        <div className="col-span-1">
          <SelectedTech
            selectedTechs={selectedTechs}
            setSelectedTech={setSelectedTech}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
