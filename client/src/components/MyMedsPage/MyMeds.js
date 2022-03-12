import React, { useState } from "react";
import MyMedsHeader from "./MyMedsHeader";
import MedsForm from "./MedsForm";
import MyMedCards from "./MyMedCards";
const MyMeds = () => {
  const [Medicine, addMedicine] = useState([
    {
      medicineName: "Paracetamol",
      Quantity: 30,
      Morning: true,
      Afternoon: true,
      Night: true,
    },
    {
      medicineName: "Citrezine",
      Quantity: 15,
      Morning: true,
      Afternoon: false,
      Night: false,
    },
  ]);
  return (
    <div className="meds-page">
      <MyMedsHeader />
      <MedsForm />
      <MyMedCards Medicines={Medicine} />
    </div>
  );
};

export default MyMeds;
