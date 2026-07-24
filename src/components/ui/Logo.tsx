interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#inicio" className={`font-headline font-semibold tracking-tight text-primary ${className}`}>
      JJRV
    </a>
  );
}
