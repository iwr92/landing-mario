'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // re_ci9ZSaWG_4DCepvtoJ1Q73G39KV1SrNhh

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');
  //   setSuccess(false);

  //   try {
  //     // await sendContactEmail(formData);
  //     setSuccess(true);
  //     setFormData({ name: '', email: '', message: '' });
  //   } catch (err) {
  //     setError('Error al enviar el mensaje. Inténtalo de nuevo.');
  //   }
  //   setLoading(false);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (err) {
      setError('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-5xl font-bold mb-7 text-center">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="off"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="off"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          autoComplete="off"
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-[#4a759f] text-white rounded-md hover:bg-[#5a8ec2] disabled:bg-gray-400"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {success && (
          <p className="text-green-600 text-center">
            Mensaje enviado con éxito.
          </p>
        )}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}
