# TRENNIX

O **TRENNIX** é um aplicativo Android de academia para você montar seus próprios treinos, escolher em quais dias treinar, registrar séries e conversar com um treinador IA opcional. O aplicativo começa sem treinos, sem histórico e sem progresso preenchidos.

O [Forja](https://github.com/marcos-scox/forja-app) foi estudado somente como referência técnica de Expo/React Native, navegação, armazenamento seguro e workflow de APK. O repositório original não é alterado.

## Como montar um treino

Abra **Biblioteca** e escolha uma das duas sessões: **Treino de casa** ou **Treino de academia**. Em ambas, escolha uma unidade, depois a subunidade e o exercício; os catálogos são separados e nenhum exercício de Casa aparece em Academia ou vice-versa. A sessão Casa inclui Peito, Costas, Braços, Ombros, Pernas, Abdômen e Cardio/Corpo inteiro; a sessão Academia inclui Pernas, Peito, Costas, Braços e Ombros. As listas longas podem ser roladas até o último exercício. O botão voltar retorna um nível por vez e preserva a seleção atual dentro da Biblioteca. Cada exercício pode ser aberto para escolher o dia em que será adicionado à Agenda.

A **Agenda** usa o dia real do aparelho para destacar o dia atual e mostra os exercícios adicionados pelo usuário. O Início acompanha essa agenda; quando não existe treino para hoje, apresenta o atalho para montar um novo.

## Perfil e preferências

Em **Configurações**, o cartão de conta foi removido. O usuário pode editar nome, idade, altura, peso e selecionar uma foto da galeria. Unidades, idioma e lembretes são preferências locais persistentes. O perfil, a agenda, as preferências e as sessões ficam no aparelho, em arquivo local persistente dentro do armazenamento privado do aplicativo, e começam vazios. O botão **Limpar todos os dados** remove esse arquivo, a chave da IA e os lembretes agendados.

## Chat IA

Para usar o **Chat IA**, abra Configurações, escolha um provedor, selecione um modelo e cole a chave correspondente. O TRENNIX suporta **ChatGPT, Groq, Manus IA, Gemini, Claude IA e DeepSeek**. A chave é armazenada no Android usando o armazenamento seguro do sistema; ela não é enviada para o repositório GitHub. O chat envia ao treinador apenas a pergunta e um contexto básico do perfil e da agenda. Sem chave, o aplicativo informa como configurar a IA.

## Baixar APK Android

A versão atual está disponível na release:

[**Baixar TRENNIX v1.9.0 — APK Android**](https://github.com/marcos-scox/trennix-app/releases/download/v1.9.0/TRENNIX-v1.9.0.apk)

Também é possível abrir a [página da release v1.9.0](https://github.com/marcos-scox/trennix-app/releases/tag/v1.9.0). Para versões futuras, abra **Actions**, selecione **Gerar APK Android nativo**, clique em **Run workflow** e informe uma nova tag. O workflow valida TypeScript e testes, gera o projeto Android e anexa o APK à release.

> Para instalar um APK fora da Play Store, o Android pode solicitar autorização para instalar aplicativos de fontes desconhecidas.

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm check
pnpm lint
pnpm test
```

O projeto usa Expo SDK 54, React Native, Expo Router, NativeWind, AsyncStorage e SecureStore. O app é portrait-first e não exige conta ou servidor para montar treinos localmente.

## Estrutura principal

| Caminho | Responsabilidade |
|---|---|
| `app/(tabs)/library.tsx` | Sessão, unidade, subunidade, exercícios, rolagem e escolha do dia |
| `app/(tabs)/agenda.tsx` | Agenda dinâmica baseada no dia real |
| `app/(tabs)/settings.tsx` | Perfil, foto, preferências e chave da IA |
| `app/(tabs)/coach.tsx` | Conversa com o treinador IA |
| `lib/trennix/store.tsx` | Estado e persistência local |
| `lib/trennix/ai.ts` | Clientes de IA e armazenamento seguro da chave |
| `.github/workflows/release-android.yml` | Build e publicação do APK |
| `design.md` | Decisões de interface e fluxos |
