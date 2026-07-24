import { useState, type FormEvent } from "react";
import { Button } from "./ui/Button";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="section-container py-30 border-t border-[#9a9a9f]/20">
      <p className="font-mono text-sm uppercase tracking-[0.05em] text-primary-container mb-6">
        05 — Contacto
      </p>

      <h2 className="font-headline text-4xl md:text-5xl font-medium leading-tight tracking-[-0.01em] text-on-surface max-w-3xl mb-16">
        ¿Buscas un desarrollador <br />
        para tu equipo? <span className="text-primary">Hablemos.</span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="relative">
            <input
              id="nombre"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent pt-6 pb-2 text-on-surface font-body text-base outline-none border-b border-[#9a9a9f] focus:border-primary-container transition-colors duration-200"
            />
            <label
              htmlFor="nombre"
              className="absolute left-0 top-0 font-mono text-xs uppercase tracking-[0.05em] text-on-surface-variant peer-focus:text-primary-container transition-colors duration-200"
            >
              Nombre
            </label>
          </div>

          <div className="relative">
            <input
              id="correo"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent pt-6 pb-2 text-on-surface font-body text-base outline-none border-b border-[#9a9a9f] focus:border-primary-container transition-colors duration-200"
            />
            <label
              htmlFor="correo"
              className="absolute left-0 top-0 font-mono text-xs uppercase tracking-[0.05em] text-on-surface-variant peer-focus:text-primary-container transition-colors duration-200"
            >
              Correo electrónico
            </label>
          </div>
        </div>

        <div className="relative mt-8">
          <textarea
            id="mensaje"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent pt-6 pb-2 text-on-surface font-body text-base outline-none border-b border-[#9a9a9f] focus:border-primary-container transition-colors duration-200 resize-none"
          />
          <label
            htmlFor="mensaje"
            className="absolute left-0 top-0 font-mono text-xs uppercase tracking-[0.05em] text-on-surface-variant peer-focus:text-primary-container transition-colors duration-200"
          >
            Mensaje
          </label>
        </div>

        <div className="mt-10">
          <Button type="submit" variant="primary" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar"}
          </Button>

          {status === "success" && (
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.05em] text-primary">
              Mensaje enviado con éxito
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.05em] text-[#ffb4ab]">
              Hubo un error al enviar el mensaje
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
