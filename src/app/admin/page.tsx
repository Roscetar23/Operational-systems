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
    <div>
      <h1>Turnos Generados</h1>
      <ul>
        {turnos.map((turno, index) => (
          <li key={index}>
            <strong>Cédula:</strong> {turno.cedula},{" "}
            <strong>Correo Electrónico:</strong> {turno.email},{" "}
            <strong>Caso:</strong> {turno.caso}
            <button onClick={() => handleAtenderTurno(index)}>Atender</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
