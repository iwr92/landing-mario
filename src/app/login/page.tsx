"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (session) {
    return (
      <div>
        <p>Bienvenido, {session.user?.email}</p>
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </div>
    );
  }

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: false, // Evita redirecciones automáticas
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}
