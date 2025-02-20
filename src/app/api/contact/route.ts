import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 🔹 Responde inmediatamente al cliente

    const response = new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    // 🔹 Luego, envía el correo en segundo plano
    resend.emails
      .send({
        from: 'onboarding@resend.dev', // Cambia a un remitente verificado
        to: ['ismaelwrios7@gmail.com'],
        subject: 'Nuevo mensaje de contacto',
        html: `<p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensaje:</strong> ${message}</p>`,
      })
      .catch((err) => console.error('Error enviando email:', err));

    return response;
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: 'Error al procesar la solicitud',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
