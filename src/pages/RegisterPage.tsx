import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { UserData } from "../interfaces/UserData";
import { registerUser } from "../services/aut-services";
import { FaEyeLowVision } from "react-icons/fa6";

const validateEmail = (email: string): string | undefined => {
  if (!email) return "L'email est requis";
  if (!/\S+@\S+\.\S+/.test(email)) return "Entrez un email valide";
  return undefined;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<UserData>>({});
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage(null);

    const formErrors: Partial<UserData> = {};

    const emailError = validateEmail(formData.email);
    if (emailError) {
      formErrors.email = emailError;
    }

    if (!formData.firstName) {
      formErrors.firstName = "Le prénom est requis";
    }
    if (!formData.lastName) {
      formErrors.lastName = "Le nom est requis";
    }
    if (!formData.username) {
      formErrors.username = "Le nom d'utilisateur est requis";
    }
    if (!formData.password) {
      formErrors.password = "Le mot de passe est requis";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await registerUser(formData);
      console.log("response=>>>>>>>>>>", response);
      setAlertMessage("Inscription réussie!");
      setAlertType("success");
      setLoading(false);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setAlertMessage(`Erreur lors de l'inscription: ${error.message}`);
      } else {
        setAlertMessage("Erreur inattendue est survenue.");
      }
      setAlertType("error");
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white px-10 py-20 border-2 border-gray-100 rounded-3xl">
      <h1 className="text-5xl font-semibold">Inscription</h1>
      <p className="text-lg font-medium text-gray-500 mt-4">
        Créez votre compte
      </p>
      {alertMessage && (
        <div
          className={`mt-4 p-4 rounded-xl ${
            alertType === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {alertMessage}
          <button
            onClick={() => setAlertMessage(null)}
            className="ml-4 font-bold"
          >
            x
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4">
            <div className="flex flex-col w-full lg:w-auto">
              <label className="text-lg font-medium">Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                  errors.lastName ? "border-red-300" : ""
                }`}
                placeholder="Entrez votre nom"
              />
              {errors.lastName && (
                <p className="text-red-500 mt-1 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="flex flex-col w-full lg:w-auto">
              <label className="text-lg font-medium">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                  errors.firstName ? "border-red-300" : ""
                }`}
                placeholder="Entrez votre prénom"
              />
              {errors.firstName && (
                <p className="text-red-500 mt-1 text-sm">{errors.firstName}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label className="text-lg font-medium">Nom d'utilisateur</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                errors.username ? "border-red-300" : ""
              }`}
              placeholder="Entrez votre nom d'utilisateur"
            />
            {errors.username && (
              <p className="text-red-500 mt-1 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                errors.email ? "border-red-300" : ""
              }`}
              placeholder="Entrez votre Email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mt-4 relative">
            <label className="text-lg font-medium">Mot de passe</label>
            <div className="flex items-center border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-transparent focus:outline-none ${
                  errors.password ? "border-red-300" : "border-gray-100"
                }`}
                placeholder="Entrez votre mot de passe"
              />
              {/* Bouton pour afficher/masquer le mot de passe */}
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeLowVision />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
            <button
              type="submit"
              className="py-3 px-6 bg-teal-700 rounded-xl text-white font-medium text-base active:scale-[.98] hover:scale-[1.01] active:duration-75 ease-in-out transition-all"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-2 border-gray-200 border-t-transparent rounded-full inline-block"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "S'inscrire"
              )}
            </button>
            <div className="flex items-center mt-4 lg:mt-0">
              <p className="text-lg text-gray-500">Vous avez déjà un compte?</p>
              <button
                className="font-medium text-base text-teal-700 ml-2"
                onClick={(event) => {
                  event.preventDefault();
                  console.log("Login form submitted!");
                  navigate("/");
                }}
              >
                Connexion
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
