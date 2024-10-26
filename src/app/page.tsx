"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("estudiante");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/estudiantes");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Selecciona tu rol:
            </label>
            <select
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="admin">Administrador</option>
              <option value="estudiante">Estudiante</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
