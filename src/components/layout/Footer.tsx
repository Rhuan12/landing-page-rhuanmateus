import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg py-8 text-center text-sm text-fg-muted">
      <p>
        © {new Date().getFullYear()} {SITE.name}. Feito com Next.js e muito café.
      </p>
    </footer>
  );
}
