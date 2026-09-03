# 07: Hero — Adaptação Mobile do 3D & Reduced Motion

**What to build:** Uma versão simplificada da cena 3D do Hero para viewports mobile (mesma linguagem visual, menor complexidade), e suporte a `prefers-reduced-motion` em todo o Hero (parallax e digitação automática).

**Blocked by:** 06

**Status:** ready-for-agent

- [ ] Em viewports mobile, a cena 3D mantém o conceito (janela de terminal 3D) mas com menos partículas/geometria e sem sombras pesadas
- [ ] Cena mobile permanece 3D real (não é substituída por CSS/imagem estática)
- [ ] Performance validada manualmente em pelo menos um device físico mobile de gama média, sem jank perceptível
- [ ] Quando `prefers-reduced-motion: reduce` está ativo, o parallax de mouse é desabilitado
- [ ] Quando `prefers-reduced-motion: reduce` está ativo, a digitação automática de comandos é reduzida ou substituída por um estado estático equivalente
- [ ] Boot intro (do ticket 06) respeita `prefers-reduced-motion` (duração reduzida ou pulada)
