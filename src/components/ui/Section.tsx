import type { ReactNode } from "react";

export function Section({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-5xl">
        {title ? (
          <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-terminal-green">
            <span className="text-muted">$</span> {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
