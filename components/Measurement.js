import React from "react";

const Measurement = () => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Choose Measurement:</label><br />
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
      />
    </div>
  );
}

export default Measurement;