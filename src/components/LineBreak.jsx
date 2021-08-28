import React from "react";

const LineBreak = () => {
  return (
    <div className="flex flex-row m-2 flex-wrap">
      <hr
        style={{
          height: 5,
          width: "100%",
          alignSelf: "center",
          marginTop: "10px",
        }}
        className="text-gray-700"
      />
      <span className="text-gray-500 m-2 text-lg">Or continue with</span>
      <hr
        style={{
          height: 5,
          alignSelf: "center",
          marginTop: "2px",
          width: "100%",
        }}
        className="text-gray-500"
      />
    </div>
  );
};

export default LineBreak;