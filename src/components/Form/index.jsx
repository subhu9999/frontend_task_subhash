import React from "react";
import CustomInput from "./CustomInput";
import Button from "../Button";

const Form = () => {
  return (
    <form className="flex flex-col w-4/5">
      <CustomInput
        type="email"
        label="Email Address"
        placeholder="sdsfds@gmail.com"
      />
      <CustomInput type="password" label="Password" placeholder="******" />
      <div className="flex flex-row justify-between my-4 flex-wrap">
        <div>
          <input
            type="checkbox"
            id="checkRemember"
            name="checkRemember"
            value="checked"
          />
          <label htmlFor="checkRemenber"> Remember Me</label>
        </div>

        <a href="/" className="mainTheme">Forgot your password?</a>
      </div>

      <Button title="Sign In" bgColor="#e95d1d" />
    </form>
  );
};

export default Form;
