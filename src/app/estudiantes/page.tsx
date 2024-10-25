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
    <div>
      <h1>Generar Turno</h1>
      <div>
        <label>Numero de cedula</label>
        <input
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          placeholder="Ingrese su cedula"
        />
      </div>
      <div>
        <label>Correo Electronico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingrese su correo electronico"
        />
      </div>

      <div>
        <label>Caso a resolver: </label>
        <select value={caso} onChange={(e) => setCaso(e.target.value)}>
          <option value="resolver 1">Resolver 1</option>
          <option value="resolver 2">Resolver 2</option>
        </select>
      </div>
      <button onClick={handleGenerarTurno}>Generar</button>
    </div>
  );
}
