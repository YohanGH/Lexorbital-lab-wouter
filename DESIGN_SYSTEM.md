# Design System Moonboard - Guide d'utilisation

Ce projet utilise le **Design System Moonboard** avec Tailwind CSS v4 pour garantir une cohérence visuelle et une expérience utilisateur optimale.

## 🎨 Palette de couleurs

Le design system utilise une palette limitée et cohérente :

- **Pampas** (`#F2F1E9`) - Couleur de fond principale (background)
- **Martinique** (`#2F2644`) - Couleur sombre pour le texte et les éléments de contraste
- **Pomegranate** (`#E74F12`) - Couleur primaire (actions principales, accents)
- **Copperfield** (`#D58860`) - Couleur secondaire (highlights, variations)

### Utilisation sémantique

- `background` : Pampas - fond général de l'application
- `text` : Martinique - texte principal
- `text-light` : Gris pour texte secondaire
- `primary` : Pomegranate - boutons principaux, liens importants
- `primary-light` : Copperfield - états hover, variations
- `dark` : Martinique - éléments sombres, bordures

## 📐 Principes de design

### 1. Traitement LINEAL
- Bordures claires et définies (`border-2`)
- Pas de dégradés ou d'ombres floues
- Contours nets et géométriques

### 2. Structure GEOMÉTRICA
- Formes géométriques simples (rectangles, carrés, cercles)
- Utilisation de `rounded-md` pour les coins arrondis (modérés)
- Layouts basés sur flexbox et grid

### 3. Niveau de détail MODERADO
- Équilibre entre minimalisme et clarté
- Pas de surcharge visuelle
- Informations essentielles uniquement

### 4. Texture subtile
- Texture légère pour certains éléments (optionnel)
- Utilisation de la classe `texture` si nécessaire

## 🧩 Composants UI disponibles

### Button

Bouton réutilisable avec variants et tailles.

```tsx
import { Button } from "@/components/ui";

// Variants disponibles : primary, secondary, ghost
// Tailles disponibles : sm, md, lg

<Button variant="primary" size="md">
  Cliquer ici
</Button>

// Utilisation comme lien
<Button variant="primary" size="sm" asLink href="/page">
  Aller à la page
</Button>
```

**Props :**
- `variant`: `"primary" | "secondary" | "ghost"` (défaut: `"primary"`)
- `size`: `"sm" | "md" | "lg"` (défaut: `"md"`)
- `asLink`: `boolean` - Si `true`, rend un lien au lieu d'un bouton
- `href`: `string` - Requis si `asLink={true}`

### Card

Conteneur pour regrouper du contenu.

```tsx
import { Card } from "@/components/ui";

<Card variant="default">
  <h3>Titre</h3>
  <p>Contenu de la carte</p>
</Card>

<Card variant="outline">
  Contenu avec bordure épaisse
</Card>
```

**Props :**
- `variant`: `"default" | "outline" | "elevated"` (défaut: `"default"`)

### CodeBlock

Bloc de code avec syntaxe highlight.

```tsx
import { CodeBlock } from "@/components/ui";

<CodeBlock language="javascript">
{`const example = "Hello World";`}
</CodeBlock>
```

**Props :**
- `language`: `string` (optionnel) - Langage pour l'affichage

### Alert

Messages d'alerte avec variants.

```tsx
import { Alert } from "@/components/ui";

<Alert variant="info" title="Information">
  Ceci est un message informatif.
</Alert>

<Alert variant="success">
  Opération réussie !
</Alert>
```

**Props :**
- `variant`: `"info" | "success" | "warning" | "error"` (défaut: `"info"`)
- `title`: `string` (optionnel) - Titre de l'alerte

### NavLink

Lien de navigation pour le header.

```tsx
import { NavLink } from "@/components/ui";

<NavLink href="/home" isActive={true}>
  Accueil
</NavLink>
```

**Props :**
- `href`: `string` - URL de destination
- `isActive`: `boolean` (défaut: `false`) - État actif du lien

## 📁 Structure des styles

Les styles sont organisés dans `/src/styles/index.css` :

- Configuration Tailwind v4 avec `@theme`
- Variables CSS pour les couleurs Moonboard
- Utilitaires personnalisés (`@utility`)
- Styles de base et reset

## 🎯 Bonnes pratiques

1. **Utiliser les composants UI** au lieu de styles inline
2. **Respecter la palette de couleurs** - ne pas utiliser de couleurs arbitraires
3. **Privilégier les bordures nettes** (`border-2`) plutôt que les ombres
4. **Maintenir la cohérence** - utiliser les mêmes espacements et rayons
5. **Accessibilité** - tous les composants incluent les états focus et hover

## 📚 Exemples

Consultez les pages d'exemples dans `/src/pages/examples/` pour voir les composants en action :
- `Home.tsx` - Utilisation de Card et Alert
- `ExampleRouterAroundNav.tsx` - Utilisation de Button, Card, CodeBlock, Alert

## 🚀 Déploiement

Le design system est prêt pour le déploiement. Tous les composants sont :
- ✅ Typés avec TypeScript
- ✅ Accessibles (WCAG)
- ✅ Responsive
- ✅ Cohérents avec le design system Moonboard
