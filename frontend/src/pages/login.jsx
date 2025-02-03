import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Error en el inicio de sesión", error);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Iniciar Sesión</h1>
      <Input placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button className="mt-2" onClick={handleLogin}>Ingresar</Button>
    </div>
  );
}
