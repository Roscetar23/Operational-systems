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
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="admin">Administrador</option>
          <option value="estudiante">Estudiante</option>
        </select>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
