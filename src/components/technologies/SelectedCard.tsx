import type { Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";
import type { ITechnology } from "../../types/itechnology";

interface ItechProps {
  technology: ITechnology;
  selectedTechs: ITechnology[];
  setSelectedTech: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedCard = ({
  technology,
  selectedTechs,
  setSelectedTech,
}: ItechProps) => {
  const handleRemoveTech = (technology: ITechnology) => {
    const restTech = selectedTechs.filter(
      (selectedTech) => technology.id !== selectedTech.id,
    );
    setSelectedTech(restTech);
  };
  return (
    <div className="border border-[#E2E8F0] p-3 my-2 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={technology.icon} alt="Tech Icon" className="h-8" />
        <div>
          <h3 className="font-bold text-base ">{technology.name}</h3>
          <p className="font-extralight text-[10px]">{technology.category}</p>
        </div>
      </div>
      <span>
        <IoCloseOutline
          className="text-3xl text-[#94A3B8] cursor-pointer"
          onClick={() => handleRemoveTech(technology)}
        />
      </span>
    </div>
  );
};

export default SelectedCard;
