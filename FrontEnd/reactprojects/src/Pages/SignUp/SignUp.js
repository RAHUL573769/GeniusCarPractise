import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { handleRegister } = useContext(AuthContext);
  const onSubmit = (data) => {
    handleRegister(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is Required" // JS only: <p>error message</p> TS only support string
                    })}
                    placeholder="First name"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.name && (
                    <span className="text-red-300">{errors.name?.message}</span>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is Required" // JS only: <p>error message</p> TS only support string
                    })}
                    placeholder="Enter Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.email && (
                    <span className="text-red-300">{errors.name?.message}</span>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password?</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is Required" // JS only: <p>error message</p> TS only support string
                    })}
                    placeholder="Enter Password"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.password && (
                    <span className="text-red-300">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
