import React from "react";
import Button from "../Button";
import googleIcon from "../icons/google.png";
import githubIcon from "../icons/git.png"

const LoginAlt = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <span className="text-black mx-4 my-2 text-xl">Sign in with</span>
      <div className="flex justify-around">
        <Button size="w-2/5" title="Google" logo={googleIcon} />
        <Button size="w-2/5" title="Github" logo={githubIcon} />
      </div>
    </div>
  );
};

export default LoginAlt;
