let turnos = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { cedula, email, caso } = req.body;
    turnos.push({ cedula, email, caso });
    return res.status(200).json({ message: "Turno agregado" });
  } else if (req.method === "GET") {
    return res.status(200).json(turnos);
  }
}
