const EDUCATION = [
  {
    period: "Sexto semestre (en curso)",
    degree: "Tecnología en Desarrollo de Software",
    institution: "ITM — Instituto Tecnológico Metropolitano",
    description:
      "Formación sólida en desarrollo backend, análisis y arquitectura de software, complementada con aprendizaje autodidacta enfocado en desarrollo frontend, control de versiones con Git y la integración de agentes de IA en el flujo de trabajo.",
  },
];

export function EducationSection() {
  return (
    <section id="formacion" className="section-container py-30 border-t border-[#9a9a9f]/20">
      <p className="font-mono text-sm uppercase tracking-[0.05em] text-primary-container mb-6">
        04 — Formación
      </p>

      <h2 className="font-headline text-4xl md:text-5xl font-medium leading-tight tracking-[-0.01em] text-on-surface mb-16">
        Formación Académica
      </h2>

      <div className="flex flex-col">
        {EDUCATION.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 py-6 border-t border-[#9a9a9f]/20 first:border-t-0"
          >
            <p className="font-mono text-sm text-on-surface-variant">{item.period}</p>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <h3 className="font-headline text-xl font-medium text-on-surface">{item.degree}</h3>
                <span className="font-body text-base italic text-on-surface-variant">
                  {item.institution}
                </span>
              </div>

              <p className="font-body text-base leading-relaxed text-on-surface-variant mt-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
