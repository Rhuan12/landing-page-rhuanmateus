# 07: Hero — Adaptação Mobile do 3D & Reduced Motion

**What to build:** Uma versão simplificada da cena 3D do Hero para viewports mobile (mesma linguagem visual, menor complexidade), e suporte a `prefers-reduced-motion` em todo o Hero (parallax e digitação automática).

**Blocked by:** 06

**Status:** in-review (all automatable items done; one item needs a human with a physical device)

- [x] Em viewports mobile, a cena 3D mantém o conceito (janela de terminal 3D) mas com menos partículas/geometria e sem sombras pesadas (Sparkles count 80→18, sem pointLight, sem parallax)
- [x] Cena mobile permanece 3D real (não é substituída por CSS/imagem estática) — mesmo `<Canvas>`/R3F, apenas com menos elementos
- [ ] **Performance validada manualmente em pelo menos um device físico mobile de gama média, sem jank perceptível** — não pode ser verificado por mim; peço que você confira num celular real e me avise se algo travar
- [x] Quando `prefers-reduced-motion: reduce` está ativo, o parallax de mouse é desabilitado
- [x] Quando `prefers-reduced-motion: reduce` está ativo, a digitação automática de comandos é reduzida ou substituída por um estado estático equivalente (transcript completo exibido de uma vez, sem cursor piscando)
- [x] Boot intro (do ticket 06) respeita `prefers-reduced-motion` (duração reduzida de ~1.3s para 150ms)
