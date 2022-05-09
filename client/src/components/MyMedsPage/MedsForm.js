import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React, { useState } from "react";

const MedsForm = ({ addDetails }) => {
  const [quantity, incrementMedicine] = useState(0);
  const [MedName, setMedName] = useState("");
  const [Morning, toggleMorning] = useState(false);
  const [Afternoon, toggleAfternoon] = useState(false);
  const [Night, toggleNight] = useState(false);
  const handleIncrement = () => {
    incrementMedicine(quantity + 1);
  };
  const handleDecrement = () => {
    incrementMedicine(quantity - 1 >= 0 ? quantity - 1 : 0);
  };
  const addMedDetail = (e) => {
    e.preventDefault();
    const Medicine = {
      medicine_name: MedName,
      quantity: quantity,
      morning: Morning,
      afternoon: Afternoon,
      night: Night,
    };
    console.log(Medicine);
    addDetails(Medicine);
    setMedName("");
    incrementMedicine(0);
    toggleNight(false);
    toggleAfternoon(false);
    toggleMorning(false);
  };
  return (
    <div className="addMedicine">
      <form
        className="medicine-form"
        id="appointment-form"
        onSubmit={addMedDetail}
      >
        <div className="medicineform-header">
          <h2>Medicine Details</h2>
        </div>
        <input
          type="text"
          placeholder="Medicine Name"
          className="medicine-input"
          value={MedName}
          onChange={(e) => setMedName(e.target.value)}
          required
        />
        <div className="quantity-section">
          <label className="qty-label">Quantity</label>
          <div className="med-quantity">
            <button
              type="button"
              className="decrement-btn"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="qty-input"
              readOnly
            />
            <button
              type="button"
              className="increment-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onClick={(e) => toggleMorning(e.target.checked)}
                checked={Morning}
              />
            }
            label="Morning"
            className="chk-box"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(e) => toggleAfternoon(e.target.checked)}
                checked={Afternoon}
              />
            }
            label="Afternoon"
            className="chk-box"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(e) => toggleNight(e.target.checked)}
                checked={Night}
              />
            }
            label="Night"
            className="chk-box"
          />
        </FormGroup>
        <button className="submit-medicine-btn">Save</button>
      </form>
    </div>
  );
};

export default MedsForm;
