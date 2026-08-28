# TRENNIX

O **TRENNIX** é um aplicativo Android de academia para organizar treinos de força, registrar séries, acompanhar progresso e consultar uma biblioteca de exercícios. A experiência foi desenhada a partir da referência visual enviada, com interface escura, verde ácido e navegação inferior compacta.

O repositório [Forja](https://github.com/marcos-scox/forja-app) foi estudado exclusivamente como referência técnica de Expo/React Native, navegação, armazenamento local e automação de APK. O Forja original não foi alterado e o TRENNIX não é uma cópia de seu conteúdo.

## Recursos atuais

O aplicativo inclui Início com treino do dia, progresso semanal e próximo treino; Biblioteca com busca e filtros; Agenda semanal; Treino ativo com registro de carga, séries e repetições; Histórico com resumo de volume; Chat IA demonstrativo; e Configurações locais.

Os dados de demonstração estão organizados em `lib/trennix/data.ts`. O primeiro escopo funciona localmente e não exige conta, servidor ou chave de API.

## Baixar APK Android

O APK será anexado a uma release pública deste repositório pelo workflow **Gerar APK Android nativo**. Depois que a primeira release for criada, substitua o endereço abaixo pelo link direto disponibilizado pelo GitHub:

[**Baixar o APK TRENNIX**](https://github.com/SEU_USUARIO/trennix-app/releases/latest)

Para gerar uma nova versão, abra **Actions**, selecione **Gerar APK Android nativo**, clique em **Run workflow** e informe a tag da release. O workflow valida o TypeScript e os testes, gera o projeto Android e publica o APK na release escolhida.

> No Android, pode ser necessário permitir a instalação de aplicativos de fontes desconhecidas para instalar um APK de teste baixado fora da Play Store.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
pnpm check
pnpm lint
pnpm test
```

O app usa Expo SDK 54, React Native, Expo Router, NativeWind e armazenamento local. O projeto está configurado para portrait e possui um pacote Android próprio gerado pelo template.

## Estrutura principal

| Caminho | Responsabilidade |
|---|---|
| `app/(tabs)` | Telas de Início, Biblioteca, Agenda, Chat IA, Configurações e Histórico |
| `app/workout.tsx` | Fluxo de treino ativo e registro de séries |
| `app/schedule.tsx` | Agenda completa acessível pelo Início e pela aba Agenda |
| `components/trennix-ui.tsx` | Paleta, cartões, botões e componentes compartilhados |
| `lib/trennix/data.ts` | Tipos e dados locais de exercícios, treinos e histórico |
| `.github/workflows/release-android.yml` | Validação, build e publicação do APK |
| `design.md` | Plano de interface e decisões de experiência |

## Licença

Este projeto é distribuído conforme a licença definida pelo proprietário do repositório.
