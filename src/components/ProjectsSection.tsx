import { useState } from "react";
import { Tag } from "./ui/Tag";
import { ProjectModal } from "./ProjectModal";

import chatApp1 from "../assets/chat-app-1.png";
import chatApp2 from "../assets/chat-app-2.png";
import chatApp3 from "../assets/chat-app-3.png";
import ecom1 from "../assets/e-comerce-1.png";
import ecom2 from "../assets/e-comerce-2.png";
import ecom3 from "../assets/e-comerce-3.png";
import ecom4 from "../assets/e-comerce-4.png";
import ecom5 from "../assets/e-comerce-5.png";
import skill1 from "../assets/skill-stitch-to-react-1.png";
import skill2 from "../assets/skill-stitch-to-react-2.png";
import sist1 from "../assets/sistema-practicas-1.png";
import sist2 from "../assets/sistema-practicas-2.png";
import sist3 from "../assets/sistema-practicas-3.png";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  codeUrl: string;
  demoUrl: string | null;
}

const PROJECTS: Project[] = [
  {
    title: "Chat App",
    description:
      "Aplicación de mensajería en tiempo real. Permite crear cuentas, buscar personas y chatear al instante mediante WebSockets.",
    images: [chatApp1, chatApp2, chatApp3],
    tags: ["Node.js", "Express", "Socket.IO", "JWT", "MySQL", "React.js"],
    codeUrl: "https://github.com/juanramirez-7dev/ChatApp",
    demoUrl: null,
  },

  {
    title: "Urban Wear E-commerce",
    description:
      "Sistema web de e-commerce para una tienda de ropa urbana. Permite a los usuarios explorar productos, realizar compras y gestionar pedidos, mientras que los administradores pueden gestionar inventario, productos, facturación y pedidos desde un panel administrativo.",
    images: [ecom1, ecom2, ecom3, ecom4, ecom5],
    tags: ["C#", "TypeScript", ".NET", "SQL Server", "React.js"],
    codeUrl: "https://github.com/juanramirez-7dev/Urban-Wear-E-comerce",
    demoUrl: null,
  },

  {
    title: "Skill — Stitch-to-React",
    description:
      "Skill para un agente de código con IA que convierte diseños de Google Stitch a código React siguiendo las mejores prácticas de desarrollo web.",
    images: [skill1, skill2],
    tags: ["Node.js", "OpenCode", "Skill", "MCP"],
    codeUrl: "https://github.com/juanramirez-7dev/stitch-to-react",
    demoUrl: null,
  },

  {
    title: "Sistema Prácticas Académicas",
    description:
      "Sistema web para la gestión de prácticas académicas. Permite a los estudiantes dar seguimiento a su proceso, subir la documentación requerida y ser notificados por empresas interesadas; a la universidad gestionar la documentación y el proceso de cada estudiante; y a las empresas encontrar perfiles para sus vacantes con filtros personalizados y detalles.",
    images: [sist1, sist2, sist3],
    tags: ["C#", ".NET", "SQL Server", "JWT", "React.js", "TypeScript", "Tailwind", "Git"],
    codeUrl: "https://github.com/juanramirez-7dev/Sistema-Practicas-Institucionales",
    demoUrl: null,
  },
];

export function ProjectsSection() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  function openModal(project: Project, index: number) {
    setModalProject(project);
    setModalIndex(index);
  }

  function closeModal() {
    setModalProject(null);
  }

  function prevImage() {
    if (!modalProject) return;
    setModalIndex((i) => (i === 0 ? modalProject.images.length - 1 : i - 1));
  }

  function nextImage() {
    if (!modalProject) return;
    setModalIndex((i) => (i === modalProject.images.length - 1 ? 0 : i + 1));
  }

  return (
    <section id="proyectos" className="section-container py-30 border-t border-[#9a9a9f]/20">
      <p className="font-mono text-sm uppercase tracking-[0.05em] text-primary-container mb-6">
        03 — Proyectos
      </p>

      <h2 className="font-headline text-4xl md:text-5xl font-medium leading-tight tracking-[-0.01em] text-on-surface mb-4">
        Proyectos
      </h2>

      <p className="font-body text-lg leading-relaxed text-on-surface-variant max-w-2xl mb-16">
        Una selección de trabajos recientes que exploran arquitecturas robustas y experiencias de
        usuario refinadas.
      </p>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group grid grid-cols-1 md:grid-cols-5 gap-8 pt-8 border-t border-[#9a9a9f]/20 hover:border-primary-container transition-colors duration-300"
          >
            <div className="md:col-span-2">
              <button
                onClick={() => openModal(project, 0)}
                className="w-full text-left"
                aria-label={`Ver imágenes de ${project.title}`}
              >
                <img
                  src={project.images[0]}
                  alt={`Captura del proyecto ${project.title}`}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full rounded object-cover border border-[#9a9a9f]/10 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                />
              </button>
            </div>

            <div className="md:col-span-3 flex flex-col justify-center">
              <h3 className="font-headline text-2xl font-medium text-on-surface group-hover:translate-x-1 transition-transform duration-300">
                {project.title}
              </h3>

              <p className="font-body text-base leading-relaxed text-on-surface-variant mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  className="font-mono text-xs uppercase tracking-[0.05em] text-on-surface-variant hover:text-primary-container transition-colors duration-200 underline decoration-1 underline-offset-4"
                >
                  Ver código
                </a>
                {
                  project.demoUrl && (
                    <a
                      target="_blank"
                      href={project.demoUrl}
                      className="font-mono text-xs uppercase tracking-[0.05em] text-on-surface-variant hover:text-primary-container transition-colors duration-200 underline decoration-1 underline-offset-4"
                    >
                      Ver demo
                    </a>
                  )
                }
              </div>
            </div>
          </article>
        ))}
      </div>

      {modalProject && (
        <ProjectModal
          images={modalProject.images}
          currentIndex={modalIndex}
          title={modalProject.title}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
