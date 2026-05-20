# Frontend Third Semester SENAI

Repositório dedicado aos projetos, aulas e atividades de Front-end desenvolvidos durante o terceiro semestre do curso técnico de Desenvolvimento de Sistemas do SENAI.

O objetivo deste repositório é registrar a evolução prática nos estudos de JavaScript, React, consumo de APIs, componentização, estilização, responsividade e deploy de aplicações web.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Create React App
- Axios
- Styled Components
- CSS Modules
- Consumo de APIs REST
- Vercel
- Git e GitHub

## Projetos publicados

| Projeto | Descrição | Link |
|---|---|---|
| Rick and Morty API | Aplicação React que consome a API pública de Rick and Morty e exibe personagens em cards responsivos. | https://rickandmortyapi-iota.vercel.app/ |
| Pokémon API | Aplicação React que consome a PokéAPI, com busca, filtros por geração, filtros por tipo e listagem de Pokémon. | https://pokemonapi-ruby.vercel.app/ |

## Sobre o repositório

Este repositório reúne projetos criados em diferentes momentos do terceiro semestre, desde exercícios introdutórios de JavaScript e React até aplicações mais completas com consumo de APIs externas e deploy em produção.

A proposta é demonstrar a evolução dos estudos em Front-end, passando por conceitos como:

- estruturação de páginas com HTML;
- estilização com CSS;
- lógica de programação com JavaScript;
- criação de interfaces com React;
- separação de componentes;
- passagem de propriedades entre componentes;
- uso de hooks como `useState` e `useEffect`;
- consumo de APIs com `axios`;
- organização de pastas;
- criação de layouts responsivos;
- publicação de projetos na Vercel.

## Estrutura do repositório

```bash
frontend-third-semester-senai/
├── aula-one/
├── aula-two/
│   └── react-component/
├── class-three/
│   └── fake-map/
├── dev-js/
├── pokemon-API/
├── react-component/
├── rickAndMorty-API/
├── vite-style/
└── README.md
```

## Descrição dos projetos e pastas

### aula-one

Primeiro contato com React utilizando Create React App.

Nesta pasta foram trabalhados conceitos iniciais como:

- estrutura básica de um projeto React;
- uso de JSX;
- criação do componente `App`;
- variáveis dentro do componente;
- manipulação simples de strings;
- renderização de conteúdo dinâmico na tela.

### aula-two/react-component

Projeto voltado para introdução à componentização no React.

Principais pontos praticados:

- criação de componentes separados;
- importação e exportação de componentes;
- organização em pastas;
- uso de propriedades;
- criação de componentes como `Header` e `TextButton`.

### class-three/fake-map

Projeto de aula criado para praticar estrutura de componentes e organização inicial de uma aplicação React.

A pasta serve como base para estudos de:

- composição de componentes;
- estruturação de páginas;
- separação de responsabilidades;
- preparação para renderização de listas e cards.

### dev-js

Pasta com exercícios e aulas de JavaScript puro.

Os arquivos presentes nessa pasta abordam fundamentos importantes antes e durante o uso de React, como:

- variáveis;
- tipos de dados;
- operadores;
- funções;
- eventos;
- manipulação de DOM;
- condicionais;
- laços de repetição;
- listas;
- formulários;
- tema escuro;
- exercícios práticos de lógica.

### vite-style

Projeto criado com Vite para estudar diferentes formas de estilização em React.

Foram praticados:

- CSS tradicional;
- CSS Modules;
- Styled Components;
- criação de botões reutilizáveis;
- estilização baseada em propriedades;
- organização visual de componentes.

### react-component

Projeto focado na criação de componentes reutilizáveis.

Componentes presentes no projeto:

- Breadcrumb;
- Modal;
- Date Picker.

Também foram praticadas diferentes abordagens de estilização:

- CSS puro;
- CSS Modules;
- Styled Components.

### rickAndMorty-API

Aplicação React criada com Vite para consumir a API pública de Rick and Morty.

Link do projeto publicado:

https://rickandmortyapi-iota.vercel.app/

Principais funcionalidades:

- consumo de API com `axios`;
- listagem de personagens;
- exibição de imagem, nome, espécie, status e origem;
- criação de cards;
- divisão em componentes como `Header`, `Main`, `CharacterSection`, `Card` e `Footer`;
- layout responsivo;
- deploy na Vercel.

API utilizada:

https://rickandmortyapi.com/api/character

### pokemon-API

Aplicação React criada com Vite para consumir a PokéAPI.

Link do projeto publicado:

https://pokemonapi-ruby.vercel.app/

Principais funcionalidades:

- consumo de API com `axios`;
- listagem geral de Pokémon;
- busca por nome ou número;
- sugestões de busca;
- filtro por geração;
- filtro por tipo;
- carregamento progressivo com scroll;
- exibição de imagem oficial do Pokémon;
- exibição do número da Pokédex;
- exibição dos ícones de tipos;
- cache simples para otimizar buscas por tipo e geração;
- layout responsivo;
- deploy na Vercel.

API utilizada:

https://pokeapi.co/

## Como executar os projetos

Cada pasta é um projeto independente. Para executar, entre na pasta desejada e instale as dependências.

### Projetos com Vite

Exemplos:

- `pokemon-API`
- `rickAndMorty-API`
- `vite-style`

Comandos:

```bash
cd nome-da-pasta
npm install
npm run dev
```

Depois acesse o endereço exibido no terminal, geralmente:

```bash
http://localhost:5173
```

### Projetos com Create React App

Exemplos:

- `aula-one`
- `aula-two/react-component`
- `class-three/fake-map`
- `react-component`

Comandos:

```bash
cd nome-da-pasta
npm install
npm start
```

Depois acesse:

```bash
http://localhost:3000
```

## Scripts comuns

Dependendo do projeto, os scripts disponíveis podem variar.

### Vite

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Create React App

```bash
npm start
npm run build
npm test
```

## Consumo de APIs

Este repositório possui projetos que consomem APIs públicas para praticar integração entre Front-end e serviços externos.

APIs utilizadas:

| API | Projeto | Finalidade |
|---|---|---|
| Rick and Morty API | `rickAndMorty-API` | Buscar e exibir personagens da série Rick and Morty |
| PokéAPI | `pokemon-API` | Buscar, filtrar e exibir informações sobre Pokémon |

## Deploy

Alguns projetos foram publicados na Vercel.

Links disponíveis:

```text
Rick and Morty API:
https://rickandmortyapi-iota.vercel.app/

Pokémon API:
https://pokemonapi-ruby.vercel.app/
```

A Vercel foi utilizada para hospedar os projetos front-end de forma simples, rápida e integrada ao GitHub.

## Aprendizados desenvolvidos

Durante o desenvolvimento dos projetos deste repositório, foram praticados conhecimentos como:

- criação de projetos React;
- diferença entre Create React App e Vite;
- componentização;
- reutilização de componentes;
- organização de código;
- estilização de interfaces;
- responsividade;
- consumo de API;
- tratamento de dados vindos de requisições HTTP;
- uso de estados no React;
- uso de efeitos com `useEffect`;
- deploy de aplicações front-end;
- versionamento com Git e GitHub.

## Possíveis melhorias futuras

Algumas melhorias que podem ser implementadas futuramente:

- adicionar mais filtros nos projetos com API;
- criar paginação manual além do scroll infinito;
- implementar tela de detalhes dos personagens ou Pokémon;
- adicionar loading skeleton;
- melhorar tratamento de erros;
- adicionar testes;
- padronizar estrutura de pastas entre os projetos;
- criar documentação individual para cada projeto;
- adicionar imagens de preview no README;
- melhorar acessibilidade das interfaces.

## Requisitos para executar localmente

Antes de executar os projetos, é recomendado ter instalado:

- Node.js
- npm
- Git

Verifique as versões com:

```bash
node -v
npm -v
git --version
```

## Como clonar o repositório

```bash
git clone https://github.com/miguelzack/frontend-third-semester-senai.git
cd frontend-third-semester-senai
```

Depois, entre na pasta do projeto desejado e execute os comandos correspondentes.

Exemplo:

```bash
cd pokemon-API
npm install
npm run dev
```

## Autor

Desenvolvido por Miguel Silva.

GitHub: https://github.com/miguelzack

## Observação

Este repositório tem fins educacionais e foi desenvolvido como parte dos estudos de Front-end no terceiro semestre do curso técnico de Desenvolvimento de Sistemas do SENAI.
