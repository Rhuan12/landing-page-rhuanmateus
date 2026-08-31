# CLAUDE.md — Portfólio Rhuan Mateus

Landing page de portfólio pessoal (Next.js, estática/client-side, sem backend).
Este arquivo documenta as convenções do projeto para manter consistência em
sessões futuras de desenvolvimento com Claude Code.

## Stack

- **Next.js 16 (App Router)** + **TypeScript** — `src/app`, `src/components`, `src/lib`, `src/hooks`.
- **Tailwind CSS v4** — configuração via CSS (`@theme inline` em [globals.css](src/app/globals.css)), sem `tailwind.config.js`. Cores e fontes customizadas viram utilitários automaticamente (ex: `--color-accent` → `bg-accent`, `text-accent`).
- **GSAP + ScrollTrigger** — animações disparadas por scroll.
- **Framer Motion** — micro-interações e transições de UI.
- **Lenis** — smooth scroll, sincronizado com o ticker do GSAP.
- **react-icons** (`react-icons/si`, `react-icons/fa`, `react-icons/md`) — ícones de marcas/redes sociais.

Sem banco de dados, sem API routes, sem formulário com persistência. O
"contato" é só um link `wa.me` (WhatsApp) — ver [lib/data.ts](src/lib/data.ts).

> **Nota histórica:** a primeira versão do site usava React Three Fiber/drei
> para uma cena 3D vibrante e colorida no Hero. Por decisão do usuário, o
> projeto migrou para uma identidade **dark, minimalista, com uma única cor
> de destaque** (verde). A dependência de Three.js foi removida por completo
> — não reintroduza `@react-three/*` sem confirmar essa decisão antes.

## Estrutura de pastas

```
src/
  app/                  # App Router: layout, page, globals.css
  components/
    layout/             # Navbar, Footer, SmoothScrollProvider (shell da página)
    sections/           # Hero, About, TechStack, Projects, Contact (uma seção = um arquivo)
    ui/                 # Peças reutilizáveis menores (ProjectCard, AboutPhoto)
  hooks/                # usePrefersReducedMotion, useMediaQuery
  lib/                  # gsap.ts (plugin registration), data.ts (conteúdo/dados)
```

Convenção: **uma seção da página = um componente em `sections/`**, importado
diretamente em [app/page.tsx](src/app/page.tsx). Peças visuais reaproveitáveis
entre seções (cards, placeholders de imagem) vão em `ui/`.

## Design system: dark + minimalista (single accent)

Estilo certificado via skill `ui-ux-pro-max`: **Dark Mode (OLED) + Minimalism
& Swiss Style**, tipografia **Space Grotesk (display) + Archivo (sans)**.

Tokens em [globals.css](src/app/globals.css) (`@theme inline`):

| Token | Uso |
|---|---|
| `--color-bg` | fundo da página (quase-preto, `#0a0a0a`) |
| `--color-surface` / `--color-surface-soft` | cards, badges, painéis |
| `--color-border` | bordas sutis (1px) — é o principal separador visual, não sombra |
| `--color-fg` / `--color-fg-muted` | texto primário / secundário |
| `--color-accent` | **única** cor de destaque (verde `#22c55e`) — CTAs, links ativos, ícones de bullet |
| `--color-accent-contrast` | texto sobre fundo `accent` |

Regras de minimalismo a respeitar em qualquer adição futura:
- **Uma cor de destaque só.** Não introduza uma segunda cor de "marca" nem
  gradientes multicoloridos — se precisar de mais contraste visual, use
  variações de opacidade/tom do próprio `accent` ou dos neutros.
- **Sem gradientes decorativos, sem blur/glow exagerado.** Um `blur` sutil de
  glow (ex: o CTA do Contato) é aceitável; um gradiente cobrindo a seção não.
  Separe seções com `border-t border-border`, não com cor de fundo diferente.
  Não recrie a antiga camada `.bg-aurora` nem os blobs 3D distorcidos.
- **Espaço em branco (negro) generoso** em vez de decoração. Prefira grid
  16px–64px de espaçamento.

## Quando usar GSAP vs Framer Motion

Regra prática adotada no projeto — **não misture as duas para o mesmo elemento**:

- **GSAP + ScrollTrigger** → animações amarradas à posição de scroll:
  - Reveals de seção acionados por `scrollTrigger: { trigger, start, toggleActions: 'play none none reverse' }`
    (ex: [About.tsx](src/components/sections/About.tsx), [Contact.tsx](src/components/sections/Contact.tsx)).
    Sempre com `toggleActions: 'play none none reverse'` para reverter suavemente
    quando o usuário sobe a página.
  - Timelines de entrada com `stagger` (ex: entrada do Hero).
  - Sempre dentro de `gsap.context(() => {...}, scopeRef)` num `useEffect`, com
    `return () => ctx.revert()` — isso mata os ScrollTriggers criados automaticamente.
  - Sempre guarde o efeito com `if (prefersReducedMotion) return;` no topo —
    ver [hooks/usePrefersReducedMotion.ts](src/hooks/usePrefersReducedMotion.ts).

- **Framer Motion** → estado de UI e interação local, sem depender da posição de scroll:
  - Hover/tap em botões e cards (`whileHover`, `whileTap`) — mantenha sutil
    (translate de poucos px, sem rotação/escala exagerada; minimalismo pede
    transições de 150–300ms, não efeitos "bounce").
  - Abrir/fechar menu mobile (`AnimatePresence`).
  - Reveals simples de entrada em viewport sem scrub, via `whileInView` (ex:
    grid de tech stack, cards de projeto).
  - Tilt 3D sutil por mouse (`useMotionValue` + `useTransform` + `useSpring`),
    como em [AboutPhoto.tsx](src/components/ui/AboutPhoto.tsx) e
    [ProjectCard.tsx](src/components/ui/ProjectCard.tsx) — ângulos pequenos (±4°).
  - `MotionConfig reducedMotion="user"` está aplicado globalmente em
    [layout.tsx](src/app/layout.tsx): toda animação Framer Motion já respeita
    `prefers-reduced-motion` automaticamente, sem lógica extra por componente.

- **CSS puro (`@keyframes` no globals.css)** → animações contínuas e baratas
  (`animate-pulse-soft` no CTA do WhatsApp, agora no tom do `accent`).

## Placeholders de conteúdo (ação manual necessária)

Estes valores são placeholders e precisam ser substituídos manualmente antes
de publicar — todos centralizados em [lib/data.ts](src/lib/data.ts):

- `SITE.whatsappNumber` — número real no formato DDI+DDD+número, só dígitos.
- `SITE.email`, `SITE.linkedin`, `SITE.github` — links reais.
- Imagens: adicionar em `public/images/rhuan.jpg` **ou** `rhuan.jpeg` (foto de
  perfil, proporção 3:4 — [AboutPhoto.tsx](src/components/ui/AboutPhoto.tsx)
  tenta `.jpg` e cai para `.jpeg` automaticamente; o componente aplica
  `grayscale` para casar com a paleta monocromática)
  e `public/images/projects/<slug>.jpg` (uma por projeto, ver os
  `slug`/`image` em `PROJECTS`). Até lá, os componentes mostram um fallback
  visual automático (inicial do projeto em `accent` sobre `surface-soft`) —
  não é erro.

## Acessibilidade

- Contraste: paleta dark foi escolhida com `--color-fg` (#f2f2f0) sobre
  `--color-bg`/`--color-surface` (>10:1) e `--color-fg-muted` calibrado para
  ficar acima de 4.5:1 sobre ambos os fundos escuros. Ao adicionar texto novo,
  confirme contraste antes de usar uma cor mais escura que `fg-muted`.
- Todo elemento decorativo (grid de fundo do Hero, glows) tem `aria-hidden`.
- Placeholders de imagem sempre têm `alt` descritivo e um fallback visual (não
  ficam com espaço vazio nem quebram o layout).
- Foco visível global via `:focus-visible` no globals.css (outline na cor
  `accent`) — não remover.
