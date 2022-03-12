import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React, { useState } from "react";

const MedsForm = () => {
  
  const [quantity, incrementMedicine] = useState(0);
  const handleIncrement = () => {
    incrementMedicine(quantity + 1);
  };
  const handleDecrement = () => {
    incrementMedicine(quantity - 1 >= 0 ? quantity - 1 : 0);
  };
  const addDetails = () =>{

  }
  return (
    <div className="addMedicine">
      <form className="medicine-form" id="appointment-form" onSubmit={addDetails}>
        <div className="medicineform-header">
          <h2>Medicine Details</h2>
        </div>
        <input
          type="text"
          placeholder="Medicine Name"
          className="medicine-input"
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
            <input type="text" value={quantity} className="qty-input" />
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
            control={<Checkbox />}
            label="Morning"
            className="chk-box"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Afternoon"
            className="chk-box"
          />
          <FormControlLabel
            control={<Checkbox />}
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
