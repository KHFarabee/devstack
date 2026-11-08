import { useState, type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../../types/itechnology";

interface ITech {
  technology: ITechnology;
  selectedTechs: ITechnology[];
  setSelectedTech: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechCard = ({ technology, selectedTechs, setSelectedTech }: ITech) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectTech = () => {
    setIsSelected(true);
    setSelectedTech([...selectedTechs, technology]);
  };

  return (
    <div className="card border-[#F1F5F9] border-[0.5px]">
      <div className="card-body">
        <div className="flex justify-between">
          <img src={technology.icon} alt="Tech Icon" className="h-10" />
          <span className={`badge badge-xs ${technology.badgeStyle}`}>
            {technology.badge}
          </span>
        </div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{technology.name}</h2>
        </div>
        <p className="font-extralight">{technology.description}</p>
        <div className="mt-6">
          <div className="flex justify-between gap-2 items-center mb-3">
            <span className="inline-block py-1 px-2 bg-gray-100 rounded-sm text-xs font-light">
              {technology.category}
            </span>
            <span className="font-light text-[#64748B] text-xs">
              {technology.difficulty}
            </span>
            <div className="flex gap-1 items-center">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">{technology.rating}</span>
            </div>
          </div>
          <button
            className={`btn btn-block btn-neutral ${isSelected ? "cursor-not-allowed" : ""}`}
            disabled={isSelected}
            onClick={handleSelectTech}
          >
            {isSelected ? "Selected" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
