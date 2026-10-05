---
title: Comment utiliser ce modèle
description: Un bref guide sur les choses que vous trouverez dans ce modèle
pubDate: 2026-10-05
tags:
  - astro
  - markdown
  - template
  - howto
---

Cet article explique comment utiliser le modèle `Astro Pico`.

## Démarrage rapide

```shell
npm create astro@latest -- --template anaxite/astro-smallworld
cd astro-smallworld
npm run dev
npm run build
```

## Comment utiliser

### Installer

1. Installez Astro.

```shell
npm create astro@latest -- --template anaxite/astro-smallworld
```

2. Installez les dépendances de ce modèle, si vous ne l'avez pas déjà fait.

```shell
cd <install-directory>
npm install
```

3. Exécutez le modèle en mode aperçu ou créez la sortie finale.

```shell
npm run dev
npm run build
```

4. En option, formatez vos fichiers sources avec Prettier.

```shell
npm run format
```

Si vous utilisez mise en place pour vos outils, ce projet est livré avec un fichier de configuration mise.

### Configurer les paramètres du site

Les paramètres à l'échelle du site sont stockés dans `src/settings.ts`. C'est également là que vous pouvez définir le nom du fichier favicon et les paramètres de l'image Open Graph.

### Configurer le CSS

Le fichier `src/styles/main.scss` contrôle les éléments CSS que Pico CSS inclut dans le site final. Voir [le site Web Pico CSS](https://picocss.com/docs/sass) pour plus d'informations sur ces éléments.

> La construction de votre projet peut afficher des avertissements de dépréciation en raison de la façon dont Pico CSS écrit ses fichiers SASS. Ces avertissements ne sont pas mortels et peuvent être ignorés pour l'instant.

### Ajouter et modifier des pages

Créez vos pages statiques en tant que fichiers `.astro` sous `src/pages`. Le modèle comprend une page d'index avec les articles de blog les plus récents, une page À propos et une page 404.

Utilisez la mise en page de base pour envelopper votre contenu dans des balises `<main>` sémantiquement correctes. La mise en page de base prend également les attributs `title` et `description` qui complètent le titre et la description du site principal. Si vous voulez que votre contenu ait une belle bordure, je vous recommande de l'envelopper dans des balises `<article>` pour bénéficier du style Pico CSS.

Pour commencer avec un modèle de page de base, consultez le fichier dans `src/templates`.

### Navigation

Pour ajouter une page à la navigation du site, modifiez directement le composant `PageHeader.astro`.

### Blog

Smallworld est livré avec une collection de blogs par défaut. Pour ajouter un nouveau message, créez un fichier Markdown dans le répertoire `src/content/blog` ou dans l'un de ses sous-répertoires. Le chemin et le nom du fichier deviennent l'URL de la publication.

Un message doit avoir les mots-clés `title`, `description` et `pubDate` dans son frontmatter. `tags` sont facultatifs.

Pour voir un modèle de publication, consultez le fichier dans `src/templates`.
