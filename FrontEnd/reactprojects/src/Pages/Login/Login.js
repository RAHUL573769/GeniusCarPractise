import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [data, setData] = useState("");
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form
                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
              >
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your Email?</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: "Email is Required",
                      minLength: {
                        value: 6,
                        message: "Must be 6 Characyers" // JS only: <p>error message</p> TS only support string
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Invalid Format" // JS only: <p>error message</p> TS only support string
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email?.message}</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
