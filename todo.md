# Project TODO

- [x] Estudar o repositório Forja sem alterar o projeto original
- [x] Definir a arquitetura de referência Expo/React Native e o fluxo de APK via GitHub Actions
- [x] Documentar telas, fluxos e identidade visual do TRENNIX em design.md
- [x] Substituir o template inicial pela navegação do TRENNIX
- [x] Implementar a tela Início com treino do dia e progresso semanal
- [x] Implementar a Biblioteca com busca, filtros e detalhes de exercícios
- [x] Implementar a Agenda semanal com treinos planejados
- [x] Implementar o Treino ativo com séries, carga, repetições, descanso e conclusão
- [x] Implementar Histórico e resumo de sessões com persistência local
- [x] Implementar o Chat IA demonstrativo sem exigir conta ou chave externa
- [x] Implementar Configurações locais e preferências
- [x] Criar logo e ícones próprios do TRENNIX
- [x] Atualizar tema, nome, slug e configuração Android do aplicativo
- [x] Criar testes unitários para métricas e persistência local
- [x] Validar TypeScript, lint e testes
- [x] Preparar workflow do GitHub Actions para gerar e anexar o APK
- [x] Atualizar README com instruções e link de download do APK
- [x] Criar checkpoint final antes da publicação
- [x] Criar repositório GitHub público e publicar o código do TRENNIX

- [x] Criar repositório GitHub do TRENNIX e enviar o código
- [x] Atualizar o README com o endereço real do repositório e o link da release APK
- [x] Validar o workflow de release Android no GitHub Actions

## Versão personalizável — solicitação do usuário

- [x] Zerar treinos, progresso, histórico e agenda demonstrativos
- [x] Reorganizar Biblioteca em cards de Peito, Perna, Costa e Braço
- [x] Abrir lista de exercícios por grupo muscular
- [x] Permitir adicionar exercício/treino à agenda escolhendo dia da semana
- [x] Tornar Agenda dinâmica com base no dia real da semana
- [x] Remover cartão de conta e criar perfil local com nome, idade, altura, peso e foto
- [x] Adicionar campo funcional para chave da IA com armazenamento seguro
- [x] Adaptar o fluxo do Chat IA conforme referência do Forja
- [x] Tornar preferências funcionais e persistentes
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.2 — persistência, agenda e IA

- [x] Corrigir persistência local de perfil, agenda, preferências e treinos no armazenamento do aparelho
- [x] Persistir cada série, carga, repetição e sessão concluída
- [x] Permitir clicar em qualquer dia da semana e visualizar o treino daquele dia
- [x] Tornar o botão Ver agenda funcional
- [x] Implementar lembrete de treino com permissão e notificação local
- [x] Adicionar provedores ChatGPT, Groq, Manus IA, Gemini, Claude IA e DeepSeek
- [x] Permitir escolher modelos por provedor
- [x] Adicionar limpeza total dos dados locais nas Configurações
- [ ] Criar testes para persistência, agenda e limpeza
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.3 — biblioteca Casa e Academia

- [x] Criar seção Treinos em casa com 6 treinos completos
- [x] Criar seção Treinos na academia com 6 treinos completos
- [x] Exibir os exercícios de cada treino em detalhe
- [x] Permitir adicionar exercícios dos treinos à Agenda por dia
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.4 — filtro de ambiente na Biblioteca

- [x] Exibir apenas os treinos de casa ao selecionar Em casa
- [x] Exibir apenas os treinos de academia ao selecionar Academia
- [x] Permitir trocar o ambiente sem perder o fluxo de montagem da Agenda
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.5 — biblioteca em três níveis

- [x] Criar seleção inicial entre Treino de casa e Treino de academia
- [x] Exibir somente os grupos musculares do ambiente escolhido
- [x] Criar Peito, Costas, Braços e Pernas dentro de cada ambiente
- [x] Criar 3 treinos diferentes para cada grupo em cada ambiente
- [x] Abrir a lista de exercícios do treino selecionado
- [x] Adicionar o treino selecionado à Agenda escolhendo o dia
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.6 — catálogo completo de academia por unidade

- [x] Manter Casa como sessão separada da Academia
- [x] Criar unidade Pernas com Quadríceps, Posterior de coxa, Glúteos e Panturrilha
- [x] Criar unidade Peito com a subunidade Peitoral
- [x] Criar unidade Costas com Dorsais e Lombar
- [x] Criar unidade Braços com Bíceps, Tríceps e Antebraço
- [x] Criar unidade Ombros com Deltoide anterior
- [x] Inserir todos os exercícios fornecidos nas subunidades corretas
- [x] Permitir selecionar exercício/treino por unidade e adicionar à Agenda
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.7 — catálogo de Casa por unidade e listas roláveis

- [x] Corrigir a rolagem das listas longas até o último exercício
- [x] Organizar Casa por Peito, Costas, Braços, Ombros, Pernas, Abdômen e Cardio/Corpo inteiro
- [x] Criar subunidades de Casa para os grupos que possuem divisões
- [x] Inserir todos os exercícios domésticos fornecidos nas subunidades corretas
- [x] Permitir selecionar exercícios de Casa por unidade e adicionar à Agenda
- [x] Manter o fluxo Academia por unidade, subunidade e exercício
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.8 — catálogo completo de Casa e listas roláveis

- [x] Corrigir a rolagem das listas longas até o último exercício
- [x] Organizar Casa por Peito, Costas, Braços, Ombros, Pernas, Abdômen e Cardio/Corpo inteiro
- [x] Criar subunidades de Casa para os grupos que possuem divisões
- [x] Inserir todos os exercícios domésticos fornecidos nas subunidades corretas
- [x] Permitir selecionar exercícios de Casa por unidade e adicionar à Agenda
- [x] Manter o fluxo Academia por unidade, subunidade e exercício
- [x] Atualizar README, GitHub e link da nova release APK

## Versão 1.9 — separação de ambientes e navegação

- [x] Garantir que a sessão Casa use somente exercícios de Casa
- [x] Garantir que a sessão Academia use somente exercícios de Academia
- [x] Impedir mistura de exercícios duplicados entre os ambientes
- [x] Corrigir voltar para retornar exatamente um nível da Biblioteca
- [x] Preservar o estado da Biblioteca enquanto o usuário navega entre níveis
- [x] Sair para a tela inicial somente ao voltar a partir da seleção de sessão
- [x] Atualizar README, GitHub e link da nova release APK
