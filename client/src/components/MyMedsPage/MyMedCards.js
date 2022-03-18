import React from "react";
import MedCard from "./MedCard";
const MyMedCards = ({ Medicines,onDelete}) => {
  return (
    <div className="Medicine-Cards">
      {Medicines.map((Medicine) => (
        <MedCard
          key={Medicine.key}
          Name={Medicine.medicineName}
          Qty={Medicine.Quantity}
          Morning={Medicine.Morning}
          Afternoon={Medicine.Afternoon}
          Night={Medicine.Night}
          deleteMed={onDelete}
        />
      ))}
    </div>
  );
};

export default MyMedCards;
