"use client";

import { useState } from "react";

export default function Estudiantes() {
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [caso, setCaso] = useState("resolver 1");

  const handleGenerarTurno = async () => {
    const turno = { cedula, email, caso };
    const res = await fetch("/api/turnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(turno),
    });
    if (res.ok) {
      alert("Turno generado");
      setCedula("");
      setEmail("");
      setCaso("resolver 1");
    } else {
      console.log("Error en la generación del turno");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-teal-600 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Generar Turno
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Número de cédula:
            </label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ingrese su cédula"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Correo Electrónico:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Caso a resolver:
            </label>
            <select
              value={caso}
              onChange={(e) => setCaso(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="resolver 1">Resolver 1</option>
              <option value="resolver 2">Resolver 2</option>
            </select>
          </div>
          <button
            onClick={handleGenerarTurno}
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-300"
          >
            Generar
          </button>
        </div>
      </div>
    </div>
  );
}
