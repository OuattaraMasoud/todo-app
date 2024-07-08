import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import React from "react";

export default function LoginForm() {
  const navigate = useNavigate(); // Get navigation hook


  return (
    <div className="bg-white px-10 py-20 mt-20 border-2 border-gray-100 rounded-3xl">
      <h1 className="text-5xl font-semibold">Connexion</h1>
      <p className="text-lg font-medium text-gray-500 mt-4">
        Saisissez vos informations pour vous connecter!
      </p>
      <form >
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Entrez votre Email"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Mot de passe</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <div className="mt-8 flex justify-between space-x-4 items-center">
            <div>
              <input type="checkbox" id="remember" className="" />
              <label className="font-medium text-base ml-2" htmlFor="remember">
                Se rappeler de moi
              </label>
            </div>

            <button className="font-medium text-base text-teal-700" onClick={ (event: { preventDefault: () => void })=>{
                event.preventDefault(); 
                console.log("Login form submitted!"); 
                navigate("/forgot-password"); 
              }}>
              Mot de passe oublié?
            </button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between lg:flex-row lg:items-start lg:gap-3 lg:w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
              <button className="p-2 m-2 bg-teal-700 rounded-xl text-white font-medium text-base active:scale-[.98] hover:scale-[1.01] active:duration-75 ease-in-out transition-all mb-3 lg:mb-0 w-full lg:w-auto" >
                Se connecter
              </button>
              <div className="flex flex-col items-center justify-center lg:hidden">
                <hr className="border-t border-gray-300 w-px h-6 bg-gray-300" />
                <span className="text-gray-400 mx-2">Ou</span>
                <hr className="border-t border-gray-300 w-px h-6 bg-gray-300" />
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center mx-3 ">
              <hr className="border-t border-gray-300 w-px h-4 bg-gray-300" />
              <span className="text-gray-400 mx-2">Ou</span>
              <hr className="border-t border-gray-300 w-px h-4 bg-gray-300" />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
              <button className="flex items-center justify-center bg-red-500 rounded-xl p-2 m-2 shadow-lg w-full lg:w-auto">
                <FcGoogle size={20} />
                <span className="ml-1 text-white font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center bg-black rounded-xl p-2 m-2 shadow-lg w-full lg:w-auto">
                <FaXTwitter size={20} color="white" />
                <span className="ml-1 text-white font-medium">Twitter</span>
              </button>
              <button className="flex items-center justify-center bg-blue-600 rounded-xl p-2 m-2 shadow-lg w-full lg:w-auto">
                <FaFacebook size={20} color="white" />
                <span className="ml-1 text-white font-medium">Facebook</span>
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start">
            <div className="flex justify-between space-x-4 items-center ">
              <p className=""> Vous n'avez pas de compte?</p>
              <button className="font-medium text-base text-teal-700 ml-2" type="submit" onClick={ (event: { preventDefault: () => void })=>{
                event.preventDefault(); 
                console.log("Login form submitted!"); 
                navigate("/register"); 
              }}>
                Inscription
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
