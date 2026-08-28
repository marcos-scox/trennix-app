# Plano de design mobile — TRENNIX

## Direção do produto

O TRENNIX será um aplicativo Android de academia para acompanhar treinos de força, organizar a semana, consultar exercícios e registrar progresso. O Forja será usado somente como referência técnica de organização de um app Expo/React Native com navegação inferior, armazenamento local e workflow de APK; o TRENNIX terá conteúdo, nome, iconografia e identidade próprios.

A experiência será pensada para uso em **portrait 9:16**, com operação confortável por uma mão, alvos de toque de pelo menos 44 dp, textos em português do Brasil e feedback visual imediato para iniciar, concluir ou editar um treino.

## Lista de telas

| Tela | Conteúdo principal | Funcionalidade |
|---|---|---|
| **Início** | Saudação, treino do dia, progresso semanal e próximo treino | Abrir o treino do dia, marcar treino como concluído e acessar o progresso |
| **Biblioteca** | Busca, filtros por grupo muscular e lista de exercícios | Pesquisar, filtrar e abrir detalhes de um exercício |
| **Detalhe do exercício** | Nome, grupo muscular, instruções, séries, repetições e descanso | Ajustar séries/repetições, iniciar o exercício e voltar à biblioteca |
| **Agenda** | Dias da semana, treinos planejados e status de conclusão | Selecionar um dia, abrir treino e acompanhar o planejamento semanal |
| **Treino ativo** | Exercício atual, série, carga, repetições, cronômetro e descanso | Registrar séries, avançar exercício, pausar e finalizar o treino |
| **Histórico** | Treinos concluídos, duração, volume e calendário de atividade | Consultar sessões anteriores e abrir o resumo de cada treino |
| **Resumo do treino** | Exercícios realizados, volume total, duração e observações | Salvar a sessão localmente e retornar ao início ou histórico |
| **Chat IA** | Conversa com treinador inteligente e sugestões de treino | Enviar dúvidas e receber recomendações demonstrativas; sem conta ou servidor no primeiro escopo |
| **Configurações** | Perfil local, unidades, tema, lembretes e preferências | Alterar preferências e consultar informações do aplicativo |

## Navegação

A navegação principal usará uma barra inferior fixa com cinco destinos: **Início**, **Biblioteca**, **Agenda**, **Chat IA** e **Configurações**. O **Histórico** será acessível pelo cartão de progresso no Início e pelo resumo do treino, evitando adicionar uma sexta aba e mantendo a leitura da barra inferior simples.

Cada tela usará o `ScreenContainer` para respeitar áreas seguras. Listas longas serão implementadas com `FlatList`; cartões e botões usarão estados de pressionado, e ações primárias terão feedback tátil no Android quando disponível.

## Fluxos principais

### Iniciar o treino do dia

1. O usuário abre **Início** e vê o cartão “Treino de hoje”.
2. Toca em **Começar treino**.
3. O aplicativo abre **Treino ativo** com o primeiro exercício e a primeira série.
4. O usuário registra carga e repetições, toca em **Concluir série** e usa o cronômetro de descanso.
5. Ao finalizar todos os exercícios, toca em **Finalizar treino**.
6. O aplicativo mostra **Resumo do treino** e salva a sessão no armazenamento local.

### Encontrar e preparar um exercício

1. O usuário entra em **Biblioteca**.
2. Digita o nome no campo de busca ou escolhe um grupo muscular.
3. Toca em um item da lista.
4. Consulta **Detalhe do exercício**, altera séries ou repetições e toca em **Adicionar ao treino**.
5. O exercício passa a integrar o próximo treino planejado.

### Consultar progresso

1. O usuário toca em **Ver progresso** no Início.
2. A tela de **Histórico** apresenta sessões concluídas em ordem recente.
3. O usuário abre uma sessão e consulta duração, volume, exercícios e observações.

## Identidade visual

A referência usa uma linguagem escura, compacta e atlética. O TRENNIX manterá essa direção, mas com uma assinatura própria baseada em **verde ácido controlado**, superfícies quase pretas e detalhes de contorno fino.

| Token | Cor | Aplicação |
|---|---|---|
| Fundo principal | `#080B0A` | Fundo das telas e áreas atrás da navegação |
| Superfície | `#121715` | Cartões, listas e painéis |
| Superfície elevada | `#1B211E` | Modalidades ativas, controles e itens selecionados |
| Verde TRENNIX | `#A8F238` | Botões primários, progresso, seleção de aba e estados concluídos |
| Verde profundo | `#2E6D31` | Contornos e estados de apoio |
| Texto principal | `#F5F7F3` | Títulos, números e ações prioritárias |
| Texto secundário | `#9BA69D` | Descrições, unidades e metadados |
| Divisor | `#26302A` | Linhas, bordas e separadores |
| Atenção | `#F4B74A` | Descanso, lembretes e permissões pendentes |
| Erro | `#FF6B6B` | Falhas de validação ou armazenamento |

O logotipo e o ícone serão simples, geométricos e legíveis em tamanhos pequenos, combinando uma marca “T” com uma forma de barra ou anilha em verde ácido sobre fundo profundo. O ícone ocupará o quadrado inteiro, sem cantos arredondados desenhados manualmente, deixando o sistema Android aplicar a máscara quando necessário.

## Tipografia e componentes

Títulos terão peso forte e frases curtas. Métricas de treino usarão números grandes com alto contraste. Cartões terão raio entre 16 e 22 dp, enquanto controles compactos terão raio de cápsula. O botão primário será largo, verde e com texto escuro; botões secundários usarão superfície elevada e borda discreta.

Os estados de treino serão sempre explícitos: **planejado**, **em andamento**, **pausado** e **concluído**. O aplicativo não dependerá de login, banco remoto ou armazenamento em nuvem no primeiro escopo; sessões e preferências ficarão no dispositivo usando armazenamento local.

## Referência técnica estudada

A base técnica observada no repositório Forja é Expo SDK 54, React Native, Expo Router, NativeWind, navegação inferior, dados locais e workflow do GitHub Actions para gerar o APK Android. Essas decisões serão adaptadas para o domínio de academia, sem copiar o conteúdo funcional do aplicativo original.
