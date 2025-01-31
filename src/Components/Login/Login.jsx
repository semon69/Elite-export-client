import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import lottieData from "./lottieLogin.json";
import Lottie from "lottie-react";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleShowPassword = () => {
    setShow(!show);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse md:flex-row gap-10">
          <div className=" md:w-1/2 lg:text-left">
            <Lottie animationData={lottieData} />
          </div>
          <div className="card shadow-2xl md:w-1/2 w-full p-4 border-4 border-white">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <div className="flex relative">
                  <input
                    {...register("password", { required: true })}
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <span
                    onClick={handleShowPassword}
                    className="cursor-pointer absolute right-3 top-3"
                  >
                    <FaEye></FaEye>
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-green-500 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="mt-4 text-center">
              <small>
                New to La Masia?{" "}
                <Link className="underline" to="/registration">
                  Create an account
                </Link>{" "}
              </small>
            </p>
            <div className="flex justify-center items-center my-3">
              {/* Button to open the modal */}
              <button
                className="border-4 border-green-500 font-bold hover:bg-green-100 px-4 py-2 rounded"
                onClick={() => setIsOpen(true)}
              >
                Test Credintial
              </button>
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
                    {/* Modal Content */}
                    <p className="text-center mb-4">
                      Email: demo@gmail.com <br />
                      Password: Demo@12 <br />
                    </p>

                    {/* Close Button */}
                    <button
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
