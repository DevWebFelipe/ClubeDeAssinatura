# 📘 Guia de Boas Práticas – Projeto Web

Este guia serve como referência rápida para organização, semântica, boas práticas de CSS e estrutura de código.

---

## 🗂️ Estrutura de Pastas (Base)

```
project/
├── .vscode/                 → Configurações do VSCode (opcional)
├── assets/
│   ├── images/              → Imagens do projeto (JPG, PNG, SVG decorativo)
│   ├── icons/               → Ícones vetoriais ou de interface
│   ├── fonts/               → Fontes externas (opcional)
│   ├── styles/              → Arquivos CSS
│   │   ├── index.css        → Centraliza todos os @imports
│   │   ├── variables.css    → Cores, fontes, espaçamentos
│   │   ├── global.css       → Reset, tipografia, elementos base
│   │   ├── layout.css       → Containers, grids e seções
│   │   ├── buttons.css      → Estilos de botões
│   │   ├── header.css       → Estilo do header
│   │   ├── footer.css       → Estilo do footer
│   │   └── sections.css     → Estilos gerais das sections
│   └── scripts/
│       └── main.js          → Script principal
├── index.html               → Página principal
├── README.md                → Descrição geral do projeto
└── guia-do-projeto.md       → Este guia
```

---

## 🧱 Estrutura Básica do HTML Semântico

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título do Projeto</title>
    <link rel="stylesheet" href="assets/styles/index.css" />
  </head>
  <body>
    <header id="header"></header>

    <main>
      <section id="hero"></section>
      <section id="about"></section>
      <section id="services"></section>
      <section id="contact"></section>
    </main>

    <footer id="footer"></footer>

    <script src="assets/scripts/main.js"></script>
  </body>
</html>
```

---

## 🎨 Variáveis CSS

```css
:root {
  /* === Colors === */
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --text-color: #212529;
  --background-color: #f8f9fa;

  /* === Typography === */
  --font-family-base: "Inter", sans-serif;
  --font-size-base: 1rem;

  /* === Spacing === */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;

  /* === Border Radius === */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}
```

---

## 📏 Padrão de Espaçamento

- Margens/paddings com `var(--spacing-md)` por padrão
- Seções com `padding: var(--spacing-lg) 0;`
- Componentes internos com `spacing-sm` ou `spacing-md`

---

## 🧩 Organização dos CSS por Arquivo

| Arquivo         | Responsabilidade                                           |
| --------------- | ---------------------------------------------------------- |
| `index.css`     | Centraliza os imports de todos os outros CSS               |
| `variables.css` | Variáveis globais de cor, espaçamento, etc                 |
| `global.css`    | Reset básico, fonte base, estilos universais               |
| `layout.css`    | Containers, grids, espaçamento entre sections              |
| `buttons.css`   | Tipos de botões, hover, variações (primário/sec.)          |
| `header.css`    | Estilo da navegação, responsividade, menu                  |
| `footer.css`    | Estilo do rodapé, links e redes sociais                    |
| `sections.css`  | Estilos específicos de seções como "Sobre", "Serviços" etc |

---

## 📛 Convenções de Nomeclatura

- Pastas/arquivos: minúsculo, sem espaço, em inglês, plural e sem abreviações
- Classes e IDs: em inglês, padrão kebab-case (ex: `.section-title`)
- Classes para estilo, IDs apenas para navegação ou âncoras

---

## ✅ Boas Práticas Gerais

- ✅ Use `index.css` como centralizador com `@import`
- ✅ Evite abreviações em pastas/arquivos
- ✅ Comente para organizar blocos em CSS
- ✅ Prefira legibilidade e clareza
- ✅ Use esta estrutura em todos os projetos para manter padrão
