# 06: Hero — Cena 3D do Terminal (Desktop) & Boot Intro

**What to build:** A seção Hero com uma janela de terminal 3D flutuante (React Three Fiber) digitando comandos automaticamente, reagindo ao movimento do mouse em desktop (parallax leve), precedida por uma animação de "boot de terminal" exibida durante o carregamento dos assets 3D.

**Blocked by:** 01

**Status:** done

- [x] Cena 3D renderiza uma janela de terminal flutuante no Hero
- [x] Comandos são "digitados" automaticamente na janela (ex: `whoami`, `cat about.txt`, `ls projects/`), em loop ou sequência definida
- [x] Em desktop, a cena reage ao movimento do mouse com leve rotação/parallax
- [x] Uma intro de "boot de terminal" (texto tipo `> initializing...`) é exibida enquanto os assets 3D carregam, antes de revelar o conteúdo
- [x] Headline e CTA do Hero (texto de apresentação) renderizados junto à cena 3D
- [x] Cena não trava nem gera erros no console em navegadores desktop modernos (Chrome, Firefox, Safari)
- [x] Componente monta sem lançar erro mesmo se WebGL não estiver disponível (fallback gracioso, não precisa ser otimizado — otimização mobile é do ticket 07)
