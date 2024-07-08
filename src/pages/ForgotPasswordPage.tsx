import React from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-10 py-20 border-2 border-gray-100 rounded-3xl">
      <h1 className="text-5xl font-semibold">Mot de passe oublié</h1>
      <p className="text-lg font-medium text-gray-500 mt-4">
        Entrez votre email pour réinitialiser votre mot de passe
      </p>
      <form >
        <div className="mt-8">
          <div className="mt-4">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Entrez votre Email"
              required
            />
          </div>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
            <button
              type="submit"
              className="py-3 px-6 bg-teal-700 rounded-xl text-white font-medium text-base active:scale-[.98] hover:scale-[1.01] active:duration-75 ease-in-out transition-all"
              onClick={(event: { preventDefault: () => void }) => {
                event.preventDefault();
                console.log("Password reset requested!");
                navigate("/login");
              }
            }
            >
              Réinitialiser le mot de passe
            </button>
            <div className="flex items-center mt-4 lg:mt-0">
              <p className="text-lg text-gray-500">
                Retour à la{" "}
                <button
                  className="font-medium text-base text-teal-700 ml-2"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Connexion
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
