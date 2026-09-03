# 09: QA de Responsividade & Performance (Full-Site)

**What to build:** Uma passagem final de verificação sobre o site completo, validando responsividade, performance e acessibilidade de movimento em todos os breakpoints e seções — o critério de "pronto para produção".

**Blocked by:** 07, 08

**Status:** ready-for-agent

- [ ] Site verificado visualmente em mobile (~375px), tablet (~768px) e desktop (~1280px), sem quebras de layout em nenhuma seção
- [ ] Relatório Lighthouse rodado em mobile e desktop; sem regressões óbvias de performance causadas pela cena 3D (sem jank perceptível em device físico mobile de gama média)
- [ ] `prefers-reduced-motion` verificado manualmente em todo o site (não só no Hero), garantindo que nenhuma animação intensa ignora a preferência
- [ ] Todos os links (nav, projetos, contato) verificados como funcionais, sem 404 ou âncoras quebradas
- [ ] Nenhum erro no console do navegador em uma navegação completa pelo site (desktop e mobile)
- [ ] Deploy final na Vercel verificado como refletindo o estado mais recente de todas as seções
