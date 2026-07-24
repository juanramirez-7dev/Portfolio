import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Logo } from "./ui/Logo";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juan-josé-ramírez-vásquez-90b57b327", icon: IconBrandLinkedin },
  { label: "GitHub", href: "https://github.com/juanramirez-7dev", icon: IconBrandGithub },
];

export function Footer() {
  return (
    <footer className="border-t border-[#9a9a9f]/20">
      <div className="section-container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Logo className="text-lg" />
          <p className="font-body text-sm text-on-surface-variant">
            &copy; 2024 Juan José Ramírez Vásquez.
          </p>
        </div>

        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                className="block text-on-surface-variant hover:text-primary-container transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
