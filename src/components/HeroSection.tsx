import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16">
      <div className="section-container w-full py-20 md:py-30">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <p className="font-mono text-sm uppercase tracking-[0.05em] text-primary-container mb-6">
              01 — Hola
            </p>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-[-0.02em] text-on-surface">
              Juan José<br />
              <span className="text-primary">Ramírez Vásquez</span>
            </h1>

            <p className="font-headline text-2xl md:text-3xl font-medium leading-snug text-on-surface-variant mt-4">
              Desarrollador de Software
            </p>

            <p className="font-body text-lg leading-relaxed text-on-surface-variant max-w-2xl mt-8">
              Encuentro problemas y los resuelvo con software. Construyo aplicaciones completas, de la base de datos a la interfaz: backend en Node.js, Python o C#; frontend en React; bases de datos relacionales como PostgreSQL, MySQL y SQL Server. Integro agentes de IA en mi flujo de trabajo para escribir mejor código, más rápido.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#proyectos">
                <Button variant="primary">Ver proyectos</Button>
              </a>
              <a href="#contacto">
                <Button variant="ghost">Contáctame</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
