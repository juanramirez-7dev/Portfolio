import { Tag } from "./ui/Tag";

interface StackCategory {
  title: string;
  items: string[];
}

const CATEGORIES: StackCategory[] = [
  { title: "Backend", items: ["Node.js", "C#", "Python"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Bases de datos", items: ["SQL Server", "MySQL", "PostgreSQL"] },
  { title: "Herramientas", items: ["Git", "GitHub", "Agentes de IA"] },
];

export function StackSection() {
  return (
    <section id="stack" className="section-container py-30 border-t border-[#9a9a9f]/20">
      <p className="font-mono text-sm uppercase tracking-[0.05em] text-primary-container mb-6">
        02 — Stack
      </p>

      <h2 className="font-headline text-4xl md:text-5xl font-medium leading-tight tracking-[-0.01em] text-on-surface mb-4">
        Tecnologías y herramientas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
        {CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="font-headline text-xl font-medium text-on-surface mb-6 pb-3 border-b border-[#9a9a9f]/20">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
