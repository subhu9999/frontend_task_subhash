import React from "react";

const CustomInput = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col my-3">
      <label className="text-xl">{label}</label>

      <input
        type={type}
        placeholder={placeholder ? placeholder : ""}
        className="p-3 m-1 border-2 rounded-lg"
      />
    </div>
  );
};

export default CustomInput;
