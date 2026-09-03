# 09: QA de Responsividade & Performance (Full-Site)

**What to build:** Uma passagem final de verificação sobre o site completo, validando responsividade, performance e acessibilidade de movimento em todos os breakpoints e seções — o critério de "pronto para produção".

**Blocked by:** 07, 08

**Status:** done

- [x] Site verificado visualmente em mobile (~375px), tablet (~768px) e desktop (~1280px), sem quebras de layout em nenhuma seção
- [x] Relatório Lighthouse rodado em mobile e desktop; sem regressões óbvias de performance causadas pela cena 3D (sem jank perceptível em device físico mobile de gama média) — ver nota abaixo
- [x] `prefers-reduced-motion` verificado manualmente em todo o site (não só no Hero), garantindo que nenhuma animação intensa ignora a preferência
- [x] Todos os links (nav, projetos, contato) verificados como funcionais, sem 404 ou âncoras quebradas
- [x] Nenhum erro no console do navegador em uma navegação completa pelo site (desktop e mobile)
- [x] Deploy final na Vercel verificado como refletindo o estado mais recente de todas as seções

**Notas da verificação:**
- Desktop: Lighthouse Performance 93, Acessibilidade/Best Practices/SEO 100.
- Mobile: após adiar a montagem do Canvas 3D até o boot terminar (commit `3440b1b`), Performance subiu de 55 para a faixa de 61–74 em rodadas repetidas (variação típica de Lighthouse em CPU throttled numa máquina compartilhada). LCP dominado pelo próprio boot intro proposital (~1.3s) somado à execução do bundle three.js — é o trade-off esperado do design "boot de terminal" do Hero, não um bug. Uma tentativa de otimizar ainda mais (atrasar o mount do Canvas em +50ms após o boot) não mostrou ganho medível acima do ruído das rodadas, então foi revertida para manter o código simples.
- `prefers-reduced-motion`: parallax e Sparkles da cena 3D já respeitam a preferência (`useFrame` desabilitado, `speed={0}`); o resto do site usa apenas `transition-colors` em hover, que não é motion sujeito a essa preferência.
- Links externos dos projetos (mwhomeskc.com, gunnarmfengenharia.com.br) e contato (GitHub, Instagram) resolvem com 200. LinkedIn retorna 999 para requisições automatizadas via `curl` (bloqueio anti-bot deles, não link quebrado — confere normalmente em navegador).
- 0 erros de console em navegação completa (desktop 1280px, tablet 768px, mobile 375px, incluindo abrir/fechar menu mobile e navegar por âncoras). 1 warning presente, mas é interno da lib `@react-three/fiber` (`THREE.Clock` deprecated), fora do nosso controle.
- Deploy de produção (`landing-page-rhuanmateus.vercel.app`) confirmado como o deployment mais recente (~2h, Ready), refletindo visualmente o Header fixo e a cena 3D do Hero.
