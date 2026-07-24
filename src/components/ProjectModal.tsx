import { useEffect, useCallback } from "react";

interface ProjectModalProps {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectModal({ images, currentIndex, title, onClose, onPrev, onNext }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-surface-dim/95 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-label={`Imagen de ${title}`}
    >
      <div
        className="relative flex items-center justify-center max-w-5xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 md:top-0 md:-right-10 text-on-surface-variant hover:text-primary-container transition-colors duration-200 z-10"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 text-on-surface-variant hover:text-primary-container transition-colors duration-200 z-10 p-2"
          aria-label="Imagen anterior"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <img
          src={images[currentIndex]}
          alt={`${title} — Imagen ${currentIndex + 1} de ${images.length}`}
          className="max-h-[85vh] w-auto max-w-full rounded object-contain border border-[#9a9a9f]/10"
        />

        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 text-on-surface-variant hover:text-primary-container transition-colors duration-200 z-10 p-2"
          aria-label="Imagen siguiente"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.05em] text-on-surface-variant">
          {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
