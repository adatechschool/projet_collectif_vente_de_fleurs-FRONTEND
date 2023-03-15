import React from "react";

const LoginForm = () => {
  return (
    <div id="forms-container" className="flex justify-center mt-5">
      <form action="submit" className="flex flex-col py-2">
        <label>
          Your email:
          <input type="text" name="firstName" />
        </label>
        <label>
          Password:
          <input type="text" name="lastName" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
