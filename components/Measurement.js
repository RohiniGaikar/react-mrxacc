import React from "react";

const Measurement = () => {
  return (
    <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "1rem",
                //marginBottom: "6rem"
              }}>
            
    
      <label style={{
                      marginTop: "3rem"
          }}>Choose Measurement:</label><br />
          <input  type="text" className="form-control" placeholder="Search..." aria-label="Search" />
      <input
        type="text"
        className="form-control" />
       
    </div>
  );
}

export default Measurement;