import React from "react";

const Button = ({ title, logo, size, bgColor }) => {
  return (
    <button
      className={`flex flex-row bg-grey hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-4 bg-transparent justify-center border-2 rounded-lg content-center ${size}`}
      style={{
        backgroundColor: bgColor ? bgColor : "",
        color: bgColor ? "white" : "",
      }}
    >
      {logo && (
        <img
          src={logo}
          style={{
            width: "20px",
            height: "20px",
            marginRight: "10px",
            alignSelf: "center",
          }}
          alt=""
        />
      )}
      <span>{title}</span>
    </button>
  );
};

export default Button;
