import React, { useContext } from "react";
import Header from "../../Home/Header";
import { useForm } from "react-hook-form";
import { IUserForm } from "../../../Common/Models/User";
import TextInput from "../../../Common/Inputs/TextInput";
import { rootStoreContext } from "../../../Common/Stores/rootStore";

const RegisterForm = () => {
  const { register, handleSubmit, errors, getValues } = useForm<IUserForm>();
  const rootStore = useContext(rootStoreContext);
  const { register: Register } = rootStore.userStore;
  const onSubmit = (formdata: IUserForm) => {
    Register(formdata);
    console.log(formdata.confirmPassword);
    console.log(formdata.password);
  };

  const password = getValues("password");
  console.log(password);
  return (
    <div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <Header content="Sign-Up" description="" />
            <form onSubmit={handleSubmit((formData) => onSubmit(formData))}>
              <div className="form-group">
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  register={register({ required: "Email is required" })}
                  error={errors.email}
                  label="Email"
                />
              </div>
              <div className="form-group">
                <TextInput
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  register={register({ required: "User name is required" })}
                  error={errors.username}
                  label="User Name"
                />
              </div>
              <div className="form-group">
                <TextInput
                  type="text"
                  name="displayName"
                  placeholder="Display Name"
                  register={register({ required: "Display name is required" })}
                  error={errors.displayName}
                  label="Display Name"
                />
              </div>
              <div className="form-group">
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  register={register({
                    required: "Password is required",
                    
                    validate: (value) => {
                      return (
                        [
                          /[a-z]/,
                          /[A-Z]/,
                          /[0-9]/,
                          /[^a-zA-Z0-9]/
                          
                        ].every((pattern) => pattern.test(value)) ||
                        "Password must contain atleast one Capital , one small letter , one number and one symbol"
                      );
                    },
                  })}
                  error={errors.password}
                  label="Password"
                />
              </div>
              <div className="form-group">
                <TextInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  register={register({
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === password || "Passwords doesn't match",
                  })}
                  error={errors.confirmPassword}
                  label="Confirm Password"
                />
              </div>
              <button type="submit" className="submitButton">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
