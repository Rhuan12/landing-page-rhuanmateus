# 01: Scaffold, Design Tokens & Pipeline de Deploy

**What to build:** Projeto Next.js configurado com Tailwind CSS, tokens de design (cores, tipografia, dark-mode-only) aplicados globalmente, e pipeline de deploy contínuo na Vercel. O resultado é uma página mínima, mas já com a identidade visual correta, publicada em uma URL ao vivo — a base sobre a qual todas as outras seções serão construídas.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] Projeto Next.js (App Router) inicializado com TypeScript e Tailwind CSS configurado
- [ ] Tokens de design definidos (fundo preto azulado ~`#0d1117`, verde terminal moderado, acento âmbar/laranja) como variáveis/tema Tailwind, sem alternância de light mode
- [ ] Fontes carregadas e aplicadas: `JetBrains Mono` (títulos/destaques) e `Inter` (corpo de texto)
- [ ] Estrutura de layout base (`<html>`/`<body>`, container de página) já com fundo escuro e fonte corporal aplicados
- [ ] Repositório conectado à Vercel com deploy automático a cada push
- [ ] URL pública (subdomínio `*.vercel.app`) acessível, mostrando uma página inicial mínima com o tema aplicado corretamente
- [ ] Metadados de SEO básicos (title, description, favicon) usando variável de ambiente para a URL canônica, para permitir troca futura de domínio sem alterar código
