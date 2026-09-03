# Spec: Landing Page Portfólio — Rhuan Mateus

> Gerado a partir de sessão de `/grilling`. Não publicado em issue tracker (tracker/labels ainda não configurados via `/setup-matt-pocock-skills`).

## Problem Statement

Rhuan é desenvolvedor fullstack (foco em automação com Python), no penúltimo semestre de Ciência da Computação na UECE, com 3 anos de experiência. Ele não possui hoje nenhuma presença web centralizada que apresente quem ele é, sua trajetória e os projetos que já construiu (para clientes e pessoais). Sem isso, ele depende de conversas individuais ou perfis espalhados (GitHub, LinkedIn) para provar seu trabalho a recrutadores e clientes em potencial, o que dificulta buscar novas oportunidades de forma CLT ou freelance.

## Solution

Uma landing page de página única, com identidade visual "terminal" (preto + verde + acento âmbar), que funciona como portfólio central: apresenta quem Rhuan é (incluindo traços pessoais como fé e música, com leveza), lista seus 5 projetos mais relevantes com contexto e links quando disponíveis, exibe seu stack técnico, e centraliza os canais de contato — tudo em uma experiência visualmente marcante (com um hero 3D interativo) e responsiva para mobile.

## User Stories

1. Como visitante (recrutador), quero entender em poucos segundos quem é Rhuan e o que ele faz, para decidir rapidamente se ele é um bom fit para uma vaga.
2. Como visitante (cliente em potencial), quero ver projetos reais que Rhuan já construiu, para avaliar a qualidade do trabalho antes de contratar um freela.
3. Como visitante em um celular, quero que o site carregue rápido e funcione bem mesmo sem uma GPU potente, para não ter uma experiência travada ou quebrada.
4. Como visitante, quero ver a seção Hero com um efeito 3D chamativo (terminal digitando comandos), para ter uma primeira impressão memorável do site.
5. Como visitante em desktop, quero que o objeto 3D do hero reaja ao movimento do meu mouse (parallax), para sentir a página como algo interativo, não estático.
6. Como visitante mobile, quero uma versão simplificada da cena 3D do hero (menos partículas/geometria), para que o site continue fluido no meu aparelho.
7. Como visitante, quero ver uma breve animação de "boot de terminal" (`> initializing...`) enquanto a página carrega, para que a espera pareça parte da experiência, não um bug.
8. Como visitante, quero navegar entre as seções (Sobre, Skills, Projetos, Contato) por um menu fixo no topo, para não precisar rolar a página inteira procurando informação.
9. Como visitante mobile, quero acessar esse mesmo menu de navegação através de um botão hambúrguer, para navegar com facilidade em telas pequenas.
10. Como visitante, quero que o clique em um link do menu role suavemente até a seção, para uma navegação mais agradável do que um salto abrupto.
11. Como visitante, quero ler uma bio pessoal e autêntica na seção Sobre, que mencione brevemente fé e música além da parte técnica, para conhecer a pessoa por trás do código, não só uma lista de skills.
12. Como visitante, quero ver o tempo de experiência (3 anos) e a situação acadêmica atual (penúltimo semestre de Ciência da Computação na UECE) na seção Sobre, para entender o nível de maturidade profissional de Rhuan.
13. Como visitante, quero ver uma foto (ou placeholder, até a foto real ser adicionada) na seção Sobre, para associar um rosto ao portfólio.
14. Como visitante, quero ver as tecnologias que Rhuan domina agrupadas por categoria (ex: Linguagens, Frameworks & Bibliotecas, Ferramentas & Infra), para avaliar rapidamente o stack sem precisar ler uma lista solta.
15. Como visitante, quero ver os 5 projetos de Rhuan em cards, ordenados do mais impactante para o menos, para que os melhores exemplos apareçam primeiro.
16. Como visitante, quero, para os projetos com link público (MW Homes KC, Gunnar MF Engenharia), poder clicar e visitar o site ao vivo, para ver o resultado funcionando na prática.
17. Como visitante, quero, para os projetos privados (Etiquetas Padaria, Controle de Pagamentos, Sistema de RSS), ver uma descrição clara do que o sistema faz e as tecnologias usadas, mesmo sem link ou imagem, para ainda entender o escopo e a complexidade do trabalho.
18. Como visitante, quero que os cards de projetos privados (sem imagem) tenham um tratamento visual estilizado (padrão de fundo, ícones de tecnologia) em vez de parecerem incompletos, para manter a qualidade visual consistente em toda a seção de projetos.
19. Como visitante, quero encontrar facilmente os canais de contato de Rhuan (e-mail, GitHub, LinkedIn, Instagram) na seção Contato, para poder entrar em contato pelo canal que preferir.
20. Como visitante, quero que os links de contato sejam diretos (mailto, URLs externas), sem precisar preencher um formulário, para minimizar fricção ao entrar em contato.
21. Como visitante, quero perceber, pelo tom do texto do site, que Rhuan está aberto tanto a vagas CLT quanto a projetos freelance, para saber que tipo de proposta faz sentido enviar.
22. Como visitante com sensibilidade a movimento, quero que animações intensas (parallax, 3D, transições) respeitem a preferência do sistema por `prefers-reduced-motion`, para não ter desconforto ao navegar.
23. Como Rhuan (dono do site), quero poder trocar a foto placeholder por uma foto real facilmente, para atualizar o site assim que tiver a imagem pronta.
24. Como Rhuan (dono do site), quero que o deploy aconteça automaticamente na Vercel a cada push, para publicar atualizações sem esforço manual.
25. Como Rhuan (dono do site), quero poder apontar um domínio próprio (`rhuanmateus-dev.com.br`) para o projeto no futuro, sem precisar reescrever o site, para atualizar a URL quando o domínio for comprado.
26. Como visitante em qualquer dispositivo (desktop, tablet, mobile), quero que o layout se adapte corretamente ao tamanho da tela, para ter uma boa experiência independente do dispositivo usado.
27. Como visitante, quero que a identidade visual (preto + verde terminal + acento âmbar, tipografia monoespaçada) seja consistente em todas as seções, para que o site pareça coeso e intencional, não um conjunto de componentes soltos.
28. Como visitante, quero que o site seja exclusivamente dark mode (sem alternância de tema), para preservar a identidade visual "terminal" que só funciona no escuro.

## Implementation Decisions

**Stack técnica**
- Framework: Next.js (React) — deploy na Vercel, zero-config.
- 3D: React Three Fiber (Three.js) para a cena do hero.
- Animação: Framer Motion como padrão para transições/scroll-reveal; GSAP usado pontualmente onde Framer Motion não cobrir bem (ex: sequência de "digitação" de comandos, timelines mais complexas).
- Estilização: Tailwind CSS (compatível com paleta de design tokens customizada).
- Idioma do conteúdo: pt-BR (sem toggle de idioma nesta fase).

**Identidade visual**
- Paleta: fundo preto azulado (tom próximo a `#0d1117`), verde terminal moderado (tom próximo ao verde usado pelo GitHub, não neon puro tipo Matrix), acento âmbar/laranja para hover states, badges e destaques pontuais.
- Tipografia: fonte monoespaçada (`JetBrains Mono`) para títulos, labels, código e o efeito de digitação; fonte sans-serif (`Inter`) para corpo de texto longo (bio, descrições de projeto).
- Modo: dark-only, sem toggle de light mode.

**Estrutura de seções (ordem)**
1. Header fixo (logo/nome + nav com scroll suave + hambúrguer no mobile)
2. Hero (cena 3D + headline + CTA)
3. Sobre (bio + foto/placeholder + status acadêmico/profissional)
4. Skills (agrupadas por categoria)
5. Projetos (5 cards, ordem: MW Homes KC → Gunnar MF Engenharia → Controle de Pagamentos → Sistema de Impressão de Etiquetas / Sistema de RSS — ordem final dos dois últimos a critério da implementação)
6. Contato (links diretos: e-mail, GitHub, LinkedIn, Instagram)
7. Footer (links rápidos, copyright)

**Hero 3D**
- Objeto: janela de terminal 3D flutuante, com comandos sendo "digitados" automaticamente (ex: `whoami`, `cat about.txt`, `ls projects/`).
- Interação desktop: leve rotação/parallax reagindo ao movimento do mouse.
- Interação mobile: versão simplificada da mesma cena (menos partículas, geometria mais simples, sem sombras pesadas) para preservar performance — não deve ser trocada por uma versão 2D/CSS, mantém-se 3D real com complexidade reduzida.
- Loading: intro curta com sequência de "boot de terminal" (texto tipo `> initializing...`) exibida enquanto os assets 3D carregam, antes de revelar o conteúdo do site.
- Acessibilidade: cena e animações do hero respeitam `prefers-reduced-motion` (reduz/desliga parallax e auto-play de digitação quando o usuário sinaliza preferência por menos movimento).

**Conteúdo — Sobre**
- Persona: dev fullstack, foco em automação com Python, penúltimo semestre de Ciência da Computação (UECE), 3 anos de experiência.
- Tom: pessoal e caloroso, primeira pessoa; menciona brevemente fé (cristão, discípulo de Jesus) e música como parte da identidade, sem dominar o texto.
- Objetivo/CTA: sinaliza abertura a oportunidades CLT e freelance/PJ, tom convidativo sem soar apelativo.

**Conteúdo — Skills**
- Categorias sugeridas: Linguagens (Python, JavaScript, TypeScript, HTML5, CSS3), Frameworks & Bibliotecas (React, Node.js, Tailwind), Dados/Infra (Supabase), Ferramentas & Práticas (Git, Automação).

**Conteúdo — Projetos**
1. **MW Homes KC** — sistema de anúncio de aluguel de casas (Kansas City, EUA). Link ao vivo: `https://www.mwhomeskc.com/`. Screenshot a ser capturado do site ao vivo.
2. **Gunnar MF Engenharia** — landing page institucional. Link ao vivo: `https://www.gunnarmfengenharia.com.br/`. Screenshot a ser capturado do site ao vivo.
3. **Sistema de Controle de Pagamentos e Recebimentos** — controle de orçamentos, solicitação de pedidos, controle de pagamentos, dashboards. Projeto privado: sem link, sem screenshot — card com descrição + tags de tecnologia.
4. **Sistema de Impressão de Etiquetas** (Padaria) — calcula quantidade exata de etiquetas a imprimir; Python + Streamlit + Supabase. Projeto privado: sem link, sem screenshot — card com descrição + tags de tecnologia.
5. **Sistema de RSS** — agrega fontes RSS, alimenta banco de dados, exibe em cards com ações de marcar para ler depois, importante, arquivar e marcar como lido. Projeto privado: sem link, sem screenshot — card com descrição + tags de tecnologia.
- Cards de projetos privados usam tratamento visual estilizado (padrão de fundo/grid, ícones de tecnologia) em vez de imagem, para manter consistência visual com os cards que têm screenshot.

**Conteúdo — Contato**
- Canais: e-mail (`rhuan.m.filgueira@gmail.com`), GitHub (`https://github.com/Rhuan12`), LinkedIn (`https://www.linkedin.com/in/rhuan-mateus-187520221/`), Instagram (`https://www.instagram.com/rhuanm12/`).
- Sem formulário de contato — apenas links diretos (mailto/externos).

**Assets pendentes**
- Foto de perfil: usar placeholder estilizado até Rhuan enviar a foto real.
- Screenshots de MW Homes KC e Gunnar MF Engenharia: capturar depois (não bloqueia a primeira versão).

**Deploy/domínio**
- Hospedagem: Vercel, subdomínio padrão (`*.vercel.app`) nesta fase.
- Domínio próprio (`rhuanmateus-dev.com.br`) será apontado no futuro — estrutura do projeto não deve assumir hardcoded o domínio atual em lugares que dificultem essa troca (ex: usar variável de ambiente para URL canônica em metadados/SEO).

## Testing Decisions

Este projeto é majoritariamente uma interface visual/apresentacional (sem lógica de negócio complexa), então o foco de teste é diferente de um projeto com regras de domínio pesadas:

- **Seam preferencial**: nível de componente/página, testado via renderização (React Testing Library) para conteúdo estático (seções renderizam o texto/links corretos) e via testes end-to-end (Playwright) para fluxos de interação (nav com scroll suave, menu mobile abre/fecha, links de contato têm `href` corretos, cards de projeto têm link correto quando aplicável).
- Um teste bom aqui verifica **comportamento observável pelo visitante** (o link de contato aponta para o e-mail certo, o menu mobile realmente abre, a seção correta é exibida em viewport mobile vs desktop) — não detalhes de implementação (não testar props internas de componentes Three.js, não testar a matemática exata da rotação do parallax).
- **Módulos a testar**:
  - Header/Nav (scroll suave, estado do menu mobile, links corretos)
  - Seção Contato (todos os `href` corretos e abrem no destino esperado)
  - Cards de Projeto (renderizam título, descrição, tags; link só aparece quando o projeto tem link público)
  - Comportamento responsivo (breakpoints principais: mobile ~375px, tablet ~768px, desktop ~1280px) via testes de snapshot visual ou Playwright em múltiplos viewports
- **Cena 3D (Hero)**: não é prática testar via testes automatizados tradicionais (renderização WebGL). Cobertura recomendada:
  - Teste de que o componente monta sem lançar erro (smoke test)
  - Teste manual/QA visual em pelo menos um device físico mobile de referência (não só devtools) para validar performance real
  - Checagem de performance via Lighthouse (mobile e desktop) como parte do critério de "pronto" — sem meta numérica fixada nesta spec, mas deve rodar de forma fluida (sem jank perceptível) em um celular de gama média
  - Verificação manual de que `prefers-reduced-motion` reduz corretamente as animações
- **Prior art**: não há testes existentes no repositório (projeto greenfield) — este será o primeiro padrão de teste do projeto, então a escolha de RTL + Playwright deve ser tratada como a convenção a seguir daqui em diante.

## Out of Scope

- Blog ou sistema de conteúdo (CMS).
- Formulário de contato funcional (usa-se apenas links diretos).
- Alternância de tema (light mode).
- Toggle de idioma (inglês) — conteúdo é pt-BR apenas nesta fase.
- Download de currículo em PDF.
- Depoimentos/recomendações de clientes.
- Analytics avançado ou dashboards de métricas (uso de uma ferramenta simples tipo Vercel Analytics pode ser adicionado sem exigir decisão de produto adicional, mas não é requisito desta spec).
- Compra e configuração do domínio próprio `rhuanmateus-dev.com.br` (será feita depois; a estrutura só precisa não impedir essa troca futura).
- Geração/captura real dos screenshots de MW Homes KC e Gunnar MF Engenharia (tarefa de conteúdo, não de implementação).
- Upload da foto de perfil real (Rhuan enviará depois).

## Further Notes

- Esta spec foi gerada via `/grilling` (sessão de perguntas e respostas estruturada) e não via exploração de um issue tracker, já que o tracker e o vocabulário de labels de triagem (`/setup-matt-pocock-skills`) não estavam configurados nesta sessão. Se o usuário configurar o tracker depois, esta spec pode ser publicada seguindo o processo padrão do `/to-spec` (aplicando a label `ready-for-agent`).
- Diretório do projeto está vazio no momento da escrita desta spec (sem git init, sem scaffold) — trata-se de um projeto greenfield.
- A tensão central de produto identificada durante o grilling foi "3D bacana" vs. "responsivo/rápido no mobile"; a decisão registrada (cena 3D simplificada no mobile, não removida) deve ser tratada como restrição de design em qualquer implementação futura do Hero.
