# :framed_picture: Pixabay Image Searcher (English | Português)
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/KlevertonOliveira/image-searcher/blob/master/license)

- Table of Contents | Indíce
  - [:link: Links](#link-links)
  - [:movie_camera: Project Demonstration | Demonstração do Projeto](#movie_camera-project-demonstration--demonstração-do-projeto)
  - [:us: English](#us-english)
    - [:mag_right: About the project](#mag_right-about-the-project)
    - [:medal_military: Features](#medal_military-features)
    - [:gear: Technologies Used](#gear-technologies-used)
      - [Front-End](#front-end)
    - [:file_folder: How to run the project](#file_folder-how-to-run-the-project)
    - [:raising_hand_man: Author](#raising_hand_man-author)
  - [:brazil: Português](#brazil-português)
    - [:mag_right: Sobre o projeto](#mag_right-sobre-o-projeto)
    - [:medal_military: Funcionalidades](#medal_military-funcionalidades)
    - [:gear: Tecnologias Utilizadas](#gear-tecnologias-utilizadas)
      - [Front-End](#front-end-1)
    - [:file_folder: Como executar o projeto](#file_folder-como-executar-o-projeto)
    - [:raising_hand_man: Autor](#raising_hand_man-autor)

---

## :link: Links

[Live Project](https://pixabay-image-searcher.vercel.app/) 
|
[Projeto ao vivo](https://pixabay-image-searcher.vercel.app/)

---


## :movie_camera: Project Demonstration | Demonstração do Projeto

https://user-images.githubusercontent.com/71989630/172881628-4cbfd219-870e-411b-8acb-0dd98204ded9.mp4


---

# :us: English

## :mag_right: About the project

Pixabay Image Searcher is a personal project developed in order to put my skills into practice and learn new technologies in the context of developing React applications.

The project consists of an image search system based on a text field to be filled in by the user and displays the results through a gallery of images separated by pages. Furthermore, for each image found, it is possible to visit a page that contains more details about the selected image.

As a differential for the development of this application, I implemented the options for switching between themes (light and dark) and multi-language support (Portuguese and English)


---

## :medal_military: Features
* Image search based on user input - [Techs: useDebounce Hook - React custom Hook];
* Request to the External API to obtain images data using as parameters: search term, image type, order option and page number - [Techs: Axios and Pixabay API];
* "Image type" and "Order By" selectors for search filtering - [Techs: Pixabay API];
* Page selection for search filtering - [Techs: Pixabay API];
* Dynamic routes for creating detail pages for each image found - [Techs: React-Router-Dom];
* Links for navigation between pages - [Techs: React-Router-Dom];
* Not Found Page (404) - [Techs: React-Router-Dom];
* Smooth scroll-to-top buttons for ease of navigation - [Techs: React-Scroll];
* Theme switcher (light mode and dark mode) - [Techs: Tailwind CSS and React Context API];
* Multi-language support (English and Portuguese) - [Techs: i18next, React-i18next and React Context API];
* Page entering animations - [Techs: Framer-Motion];
* SEO support on every page - [Techs: React-Helmet-Async];
* Fully responsive pages - [Techs: Tailwind CSS]
* Accessible UI Components - [Techs: Tailwind CSS and Headless UI]
* Unit and Integration Tests - [Techs: Jest and React Testing Library];


----

## :gear: Technologies Used

### Front-End
- HTML5
- CSS3
- JavaScript ES6
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [Pixabay API](https://pixabay.com/api/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)
- [Jest](https://jestjs.io/)
- [React](https://reactjs.org/)
- [React-Router-Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React-Scroll](https://www.npmjs.com/package/react-scroll)
- [React-i18next](https://react.i18next.com/)
- [React-Helmet-Async](https://www.npmjs.com/package/react-helmet-async)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## :file_folder: How to run the project 

Prerequisites: node.js, npm / yarn

```bash
# Clone repository
git clone https://github.com/KlevertonOliveira/image-searcher.git

# Enter the project folder
cd image-searcher/

# Install dependencies
yarn install 
or 
npm install

# Follow the instructions inside the .env.example file

# Run the project
yarn dev
or
npm run dev
```

## :raising_hand_man: Author

José Kleverton Yvens Oliveira

https://www.linkedin.com/in/klevertonoliveira/

---
---
---
# :brazil: Português

## :mag_right: Sobre o projeto

Pixabay Image Searcher é um projeto pessoal desenvolvido com o intuito de pôr minhas habilidades em prática e aprender novas tecnologias no contexto de desenvolvimento de aplicações React.

O projeto consiste em um sistema de busca de imagens baseado em um campo de texto a ser preenchido pelo usuário e exibe os resultados através de uma galeria de imagens separadas por páginas. Além disso, para cada imagem encontrada, é possível visitar uma página que contém mais detalhes acerca da imagem selecionada.

Como diferencial para o desenvolvimento dessa aplicação, implementei as opções de troca de temas (claro e escuro) e suporte multi-idioma (português e inglês)

---

## :medal_military: Funcionalidades
* Pesquisa de imagem baseada em entrada do usuário - [Techs: useDebounce Hook- React custom Hook];
* Requisição à API Externa para obtenção de dados de imagens utilizando como parâmetros: termo de busca, categoria, opção de ordenação e número da página - [Techs: Axios e Pixabay API];
* Seletores "Categoria" e "Ordenar por" para filtragem de busca - [Techs: Pixabay API];
* Seleção de página para filtragem de busca - [Techs: Pixabay API];
* Rotas dinâmicas para criação de páginas de detalhes para cada imagem encontrada - [Techs: React-Router-Dom];
* Links para navegação entre páginas - [Techs: React-Router-Dom];
* Página "Não Encontrada" (404) - [Techs: React-Router-Dom];
* Botões de rolagem suave para o topo da página para facilidade de navegação - [Techs: React-Scroll];
* Modificador de tema (modo claro e modo escuro) - [Techs: Tailwind CSS e React Context API];
* Suporte multi-idioma (Inglês e Português) - [Techs: i18next, React-i18next e React Context API];
* Animações de entrada de página - [Techs: Framer-Motion];
* Suporte SEO em todas as páginas - [Techs: React-Helmet-Async];
* Responsividade em todas as páginas - [Techs: Tailwind CSS]
* Acessibilidade em Componentes de Interface do Usuário - [Techs: Tailwind CSS e Headless UI]
* Testes unitários e de integração - [Techs: Jest and React Testing Library];

----

## :gear: Tecnologias Utilizadas

### Front-End
- HTML5
- CSS3
- JavaScript ES6
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [Pixabay API](https://pixabay.com/api/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)
- [Jest](https://jestjs.io/)
- [React](https://reactjs.org/)
- [React-Router-Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React-Scroll](https://www.npmjs.com/package/react-scroll)
- [React-i18next](https://react.i18next.com/)
- [React-Helmet-Async](https://www.npmjs.com/package/react-helmet-async)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## :file_folder: Como executar o projeto 

Prerequisites: node.js, npm / yarn

```bash
# Clonar o repositório
git clone https://github.com/KlevertonOliveira/image-searcher.git

# Entrar na pasta do projeto
cd image-searcher/

# Instalar dependências
yarn install 
or 
npm install

# Seguir as instruções dentro do arquivo .env.example 

# Executar o projeto
yarn dev
ou
npm run dev
```

## :raising_hand_man: Autor

José Kleverton Yvens Oliveira

https://www.linkedin.com/in/klevertonoliveira/

