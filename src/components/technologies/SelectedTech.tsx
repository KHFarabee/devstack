import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/itechnology";
import SelectedCard from "./SelectedCard";

interface ItechProps {
  selectedTechs: ITechnology[];
  setSelectedTech: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedTech = ({ selectedTechs, setSelectedTech }: ItechProps) => {
  const handleRemoveAllBtn = () => {
    setSelectedTech([]);
  };
  const renderEmpty = () => {
    return (
      <div className="border-dashed border-[#E2E8F0] border py-5 rounded-lg flex justify-center items-center">
        <p className="text-[#94A3B8]">Your stack is empty.</p>
      </div>
    );
  };
  const renderTechs = () => {
    return (
      <div>
        {selectedTechs.map((tech) => (
          <SelectedCard
            technology={tech}
            setSelectedTech={setSelectedTech}
            selectedTechs={selectedTechs}
          />
        ))}
        <button
          onClick={handleRemoveAllBtn}
          className="btn btn-outline btn-error btn-block"
        >
          Remove All
        </button>
      </div>
    );
  };
  return (
    <div className="border-[#F1F5F9] border py-6 px-5 rounded-lg">
      <div className="mb-5">
        <h2 className="font-bold text-lg">Your Stack</h2>
        <p className="text-[#94A3B8] font-extralight">
          {selectedTechs
            ? `${selectedTechs.length} Technology Selected`
            : "No technologies selected yet."}
        </p>
      </div>

      {selectedTechs.length ? renderTechs() : renderEmpty()}
    </div>
  );
};

export default SelectedTech;
