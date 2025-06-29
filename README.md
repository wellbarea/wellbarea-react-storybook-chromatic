# 📚 Storybook + React + TypeScript + Chromatic

Um projeto de estudo focado na exploração do **Storybook** integrado com **React**, **TypeScript**, **Vite** e **Chromatic** para documentação e teste visual de componentes.

## 🎯 Objetivo

Este projeto é um **spike** (prova de conceito) para explorar e aprender as melhores práticas de:

- Desenvolvimento de componentes isolados com Storybook
- Integração com Chromatic para testes visuais automatizados
- Configuração de CI/CD para deploy automático de documentação
- Desenvolvimento orientado por componentes (Component-Driven Development)

## 🛠️ Stack Tecnológica

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Storybook 7.6** - Ferramenta para desenvolvimento de componentes isolados
- **Chromatic** - Plataforma para testes visuais e review de componentes
- **ESLint** - Linter para qualidade de código
- **GitHub Actions** - CI/CD integrado

## 🚀 Como executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd spike-react-storybook-with-chromatic

# Instale as dependências
npm install
```

### Executando o projeto

#### Aplicação React (Vite)

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

#### Storybook

```bash
# Inicia o Storybook em modo desenvolvimento
npm run storybook

# Build do Storybook para produção
npm run build-storybook

# Deploy do Storybook para GitHub Pages
npm run deploy-storybook
```

#### Linting

```bash
# Executa o ESLint
npm run lint
```

## 📁 Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       └── chromatic.yml          # CI/CD para Chromatic
├── .storybook/                    # Configurações do Storybook
│   ├── main.ts                    # Configuração principal
│   └── preview.ts                 # Configurações de preview
├── src/
│   ├── stories/                   # Componentes e stories
│   │   ├── Button.tsx             # Componente de exemplo
│   │   ├── Button.stories.ts      # Stories do Button
│   │   ├── Header.tsx             # Componente Header
│   │   ├── Header.stories.ts      # Stories do Header
│   │   ├── Page.tsx               # Componente Page
│   │   ├── Page.stories.ts        # Stories da Page
│   │   └── Configure.mdx          # Documentação MDX
│   └── ...
├── storybook-static/              # Build do Storybook
├── package.json
├── vite.config.ts                 # Configuração do Vite
└── README.md
```

## 🎨 Componentes Disponíveis

### Button

Componente de botão com diferentes variações:

- **Primary**: Botão principal
- **Secondary**: Botão secundário
- **Small/Medium/Large**: Diferentes tamanhos

### Header

Componente de cabeçalho com:

- Logo
- Navegação
- Controles de usuário

### Page

Componente de página completa demonstrando:

- Layout responsivo
- Composição de componentes
- Estados diferentes (logado/deslogado)

## 🔄 Integração Chromatic

O projeto está configurado para integração automática com o Chromatic:

- **CI/CD**: A cada push, o GitHub Actions executa o build e publica no Chromatic
- **Testes Visuais**: Detecta mudanças visuais automaticamente
- **Review**: Permite revisar e aprovar mudanças visuais
- **Documentação**: Compartilha a documentação com a equipe

### Configuração do Chromatic

1. Configure a variável de ambiente `CHROMATIC_PROJECT_TOKEN` nos secrets do GitHub
2. A cada push, o workflow será executado automaticamente
3. Acesse o Chromatic para visualizar os resultados

## 📖 Scripts Disponíveis

| Script                     | Descrição                                    |
| -------------------------- | -------------------------------------------- |
| `npm run dev`              | Inicia o servidor de desenvolvimento do Vite |
| `npm run build`            | Build de produção da aplicação               |
| `npm run preview`          | Preview do build de produção                 |
| `npm run storybook`        | Inicia o Storybook em modo desenvolvimento   |
| `npm run build-storybook`  | Build do Storybook para produção             |
| `npm run deploy-storybook` | Deploy do Storybook para GitHub Pages        |
| `npm run lint`             | Executa o linter ESLint                      |

## 🎓 Aprendizados

Este projeto explora conceitos importantes como:

- **Component-Driven Development**: Desenvolvimento focado em componentes isolados
- **Design System**: Documentação e padronização de componentes
- **Visual Testing**: Testes automatizados de regressão visual
- **Continuous Integration**: Automação de builds e deploys
- **Documentation as Code**: Documentação versionada junto com o código

## 🔧 Configurações Avançadas

### ESLint

O projeto utiliza configurações específicas para Storybook:

```js
// .eslintrc.cjs
extends: [
  'eslint:recommended',
  '@typescript-eslint/recommended',
  'plugin:react-hooks/recommended',
  'plugin:storybook/recommended' // Específico para Storybook
]
```

### Storybook Addons

Addons configurados:

- **@storybook/addon-links**: Navegação entre stories
- **@storybook/addon-essentials**: Conjunto essencial de addons
- **@storybook/addon-interactions**: Testes de interação
- **@storybook/addon-onboarding**: Guia de introdução

## 📚 Recursos Úteis

- [Documentação do Storybook](https://storybook.js.org/docs)
- [Documentação do Chromatic](https://www.chromatic.com/docs)
- [Guia de Component-Driven Development](https://www.componentdriven.org)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)
