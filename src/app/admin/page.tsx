"use client";

import { useEffect, useState } from "react";

type Turno = {
  cedula: string;
  email: string;
  caso: string;
};

export default function Admin() {
  const [turnos, setTurnos] = useState<Turno[]>([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      const res = await fetch("/api/turnos");
      const data = await res.json();
      if (Array.isArray(data)) {
        setTurnos(data);
      } else {
        console.error("Formato de datos inválido:", data);
      }
    };
    fetchTurnos();
  }, []);

  const handleAtenderTurno = async (index: number) => {
    const turnoAtendido = turnos[index];
    if (turnoAtendido) {
      alert(
        `Atendiendo el turno de ${turnoAtendido.cedula} - Caso: ${turnoAtendido.caso}`
      );
      const nuevosTurnos = turnos.filter((_, i) => i !== index);
      setTurnos(nuevosTurnos);
    } else {
      alert("El turno seleccionado no es válido");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-600 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Turnos Generados
        </h1>
        <ul className="space-y-4">
          {turnos.length > 0 ? (
            turnos.map((turno, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-md flex items-center justify-between"
              >
                <div>
                  <p>
                    <strong>Cédula:</strong> {turno.cedula}
                  </p>
                  <p>
                    <strong>Correo Electrónico:</strong> {turno.email}
                  </p>
                  <p>
                    <strong>Caso:</strong> {turno.caso}
                  </p>
                </div>
                <button
                  onClick={() => handleAtenderTurno(index)}
                  className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded-lg font-medium transition duration-300"
                >
                  Atender
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No hay turnos pendientes.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
