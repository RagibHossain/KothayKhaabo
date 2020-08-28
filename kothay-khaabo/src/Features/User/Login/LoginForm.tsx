import React, { useContext } from "react";
import Header from "../../Home/Header";
import { useForm } from "react-hook-form";
import { IUserForm } from "../../../Common/Models/User";
import TextInput from "../../../Common/Inputs/TextInput";
import { rootStoreContext } from "../../../Common/Stores/rootStore";
const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm<IUserForm>();
  const rootStore = useContext(rootStoreContext);
  const { login } = rootStore.userStore;

  const onSubmit = (formdata: IUserForm) => {
    login(formdata);
  };
  return (
    <div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <Header content="Login Form" description="" />
            <form onSubmit={handleSubmit((formdata) => onSubmit(formdata))}>
              <div className="form-group ">
                <TextInput
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="User Name"
                  register={register({ required: "required" })}
                  error={errors.email}
                />
              </div>
              <div className="form-group">
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  register={register({ required: "required" })}
                  error={errors.password}
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

export default LoginForm;
