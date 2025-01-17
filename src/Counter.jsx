import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="text-center bg-light p-4 rounded shadow-lg"
          style={{
            boxShadow: "0 4px 15px rgba(128, 128, 128, 0.5)", // Gray border shadow
          }}
        >
          <h1
            className="mb-4 fw-bold"
            style={{
              color: "white", // White text for heading
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
              backgroundColor: "#6c757d", 
              padding: "10px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            Counter Demo
          </h1>
          <div
            id="display"
            className="bg-white text-dark p-3 mb-4 rounded fs-1 fw-bold shadow-sm"
          >
            {count}
          </div>
          <button
            className="btn btn-success me-2 px-4 py-2 fw-bold shadow"
            onClick={inc}
          >
            Increment
          </button>
          <button
            className="btn btn-danger px-4 py-2 fw-bold shadow"
            onClick={dec}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
