# Petit monde
_Ceci est un modèle pour le générateur de site statique [Astro](https://astro.build/). Maintenant mis à jour pour Astro 6 ! _

J'aime Astro, mais je n'aime pas passer des heures à personnaliser les styles. J'ai créé ce modèle sur la base de quelques principes clés :

- Je veux un site Web basique avec un blog d'un seul auteur.
- Le site Web doit inclure des éléments accessibles et utilisables.
- Évitez les systèmes complexes, préférez les systèmes plus simples.
- Les choses que je vois devraient être faciles à comprendre.

Le résultat est un modèle Astro qui utilise à peine des classes CSS et maximise l'utilisation du HTML sémantique.

Ce n'est pas seulement un site fonctionnel, mais c'est aussi génial de commencer à apprendre comment fonctionne Astro !

## Démarrage rapide

```shell
npm create astro@latest -- --template anaxite/astro-smallworld
cd astro-smallworld
npm run dev
npm run build
```

## Démarrage moins rapide

### Installer

1. Installer Astro :

```shell
npm create astro@latest -- --template anaxite/astro-smallworld
```

2. Installez les dépendances de ce modèle, si vous ne l'avez pas déjà fait :

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

### Configurer les paramètres du site

Les paramètres à l'échelle du site sont stockés dans `src/settings.ts`. C'est également là que vous pouvez définir le nom du fichier favicon et les paramètres de l'image Open Graph.

### Configurer le CSS

Le fichier `src/styles/main.scss` contrôle les éléments CSS que Pico CSS inclut dans le site final. Voir [le site Web Pico CSS](https://picocss.com/docs/sass) pour plus d'informations sur ces éléments.

> Une construction de site peut afficher des avertissements Pico CSS. Ces avertissements sont généralement non mortels et peuvent être ignorés.

### Ajouter et modifier des pages

Créez vos pages statiques en tant que fichiers `.astro` sous `src/pages`. Le modèle comprend une page d'index avec les articles de blog les plus récents, une page À propos et une page 404.

Utilisez la mise en page de base pour envelopper votre contenu dans des balises `<main>` sémantiquement correctes. La mise en page de base prend également les attributs `title` et `description` qui complètent le titre et la description du site principal. Si vous voulez que votre contenu ait une belle bordure, je vous recommande de l'envelopper dans des balises `<article>` pour bénéficier du style Pico CSS.

Pour commencer avec un modèle de page de base, consultez le fichier dans `src/templates`.

### Modifier la navigation

Pour ajouter une page à la navigation du site, modifiez directement le composant `PageHeader.astro`.

### Blog

Smallworld est livré avec une collection de blogs par défaut. Pour ajouter un nouveau message, créez un fichier Markdown dans le répertoire `src/content/blog` ou dans l'un de ses sous-répertoires. Le chemin et le nom du fichier deviennent l'URL de la publication.

Un message doit avoir les mots-clés `title`, `description` et `pubDate` dans son frontmatter. `tags` sont facultatifs.

Pour voir un modèle de publication, consultez le fichier dans `src/templates`.

## Notes

Pour votre commodité, j'ai ajouté quelques outils :

- Tout gestionnaire de paquets Node.js pris en charge par Astro devrait fonctionner. J'inclus un peu de configuration PNPM par défaut.
- Ce projet est livré avec un fichier de configuration `mise en place`.

## À propos d'Astro

Vous voulez en savoir plus sur Astro ? Consultez [leur documentation](https://docs.astro.build) ou sautez sur leur [serveur Discord](https://astro.build/chat).
