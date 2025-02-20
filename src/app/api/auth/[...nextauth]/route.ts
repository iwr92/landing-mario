import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // Simulación de usuario válido
        const user = { id: "1", name: "Usuario", email: "correo@example.com", password: "123456" };

        // Comparación de credenciales
        if (credentials.email === user.email && credentials.password === user.password) {
          return user;
        }

        return null; // No coincide = No autenticado
      }
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login", // Evita quedarse atascado en /api/auth/error
  },
  secret: process.env.NEXTAUTH_SECRET, // Verifica que está en .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
