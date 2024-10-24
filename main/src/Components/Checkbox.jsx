import React, { useState } from "react";
import "../Css/Checkbox.css";

const Checkbox = () => {
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="square-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        id="checkbox"
        className="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        {checked ? "✓" : ""}
      </label>
    </div>
  );
};

export default Checkbox;
