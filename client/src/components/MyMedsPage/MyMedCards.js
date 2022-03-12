import React from "react";
import MedCard from "./MedCard";
const MyMedCards = ({ Medicines }) => {
  return (
    <div className="Medicine-Cards">
      {Medicines.map((Medicine) => (
        <MedCard
        key={Medicine.key}
          Name={Medicine.medicineName}
          Qty={Medicine.Quantity}
          Morning={Medicine.Morning}
          Afternoon={Medicine.Afternoon}
          Night = {Medicine.Night}
        />
      ))}
    </div>
  );
};

export default MyMedCards;
