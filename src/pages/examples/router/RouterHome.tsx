/**
 * Page d'accueil pour les exemples de Router
 */
import { Button, Card, Alert } from "../../../components/ui";

function RouterHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
        ⚙️ Exemples Router - Guide Complet
      </h1>

      <Alert variant="info" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📚 Qu'est-ce que Router ?
        </h2>
        <p className="mb-2">
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            Router
          </code>{" "}
          est un composant optionnel qui permet de personnaliser le comportement
          du routing.
        </p>
        <p className="mb-2">
          Par défaut, Wouter fonctionne sans Router, mais Router est nécessaire
          pour :
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Hash-based routing</li>
          <li>Base path</li>
          <li>Parser personnalisé</li>
          <li>SSR (Server-Side Rendering)</li>
          <li>Interception de navigation (aroundNav)</li>
        </ul>
      </Alert>

      <div className="grid gap-6 mt-8">
        <Card variant="outline" className="border-[#3498db]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            1. Router basique - Hash-based
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">useHashLocation :</strong>{" "}
            Utiliser le hash (#) au lieu du path normal
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour les apps déployées sur des serveurs statiques
          </p>
          <Button variant="primary" size="md" asLink href="/router/example-1">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#e67e22]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            2. Router avec base path
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">base :</strong> Faire fonctionner
            l'app sous un sous-chemin
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour /app, /admin, micro-frontends, etc.
          </p>
          <Button variant="primary" size="md" asLink href="/router/example-2">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#9b59b6]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            3. Router avec aroundNav
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">aroundNav :</strong> Intercepter
            toutes les navigations
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour transitions, analytics, validation, etc.
          </p>
          <Button variant="primary" size="md" asLink href="/router/example-3">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#16a085]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            4. Router avec SSR
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">ssrPath & ssrSearch :</strong>{" "}
            Rendre l'app côté serveur avec la bonne location
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Pour SEO, performance initiale, social sharing
          </p>
          <Button variant="primary" size="md" asLink href="/router/example-4">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#27ae60]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            5. Options avancées
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">
              parser, hrefs, useRouter :
            </strong>{" "}
            Options avancées pour personnaliser le routing
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Parser personnalisé, transformation d'URLs, accès au router
          </p>
          <Button variant="primary" size="md" asLink href="/router/example-5">
            Voir l'exemple →
          </Button>
        </Card>
      </div>

      <Alert variant="info" className="mt-8">
        <h3 className="font-semibold mb-2 text-base">
          💡 Quand utiliser Router ?
        </h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-semibold">Par défaut :</strong> Wouter
            fonctionne sans Router (utilise useBrowserLocation)
          </li>
          <li>
            <strong className="font-semibold">Hash routing :</strong> Utilisez
            Router avec useHashLocation
          </li>
          <li>
            <strong className="font-semibold">Base path :</strong> Utilisez
            Router avec base="/app"
          </li>
          <li>
            <strong className="font-semibold">SSR :</strong> Utilisez Router
            avec ssrPath et ssrSearch
          </li>
          <li>
            <strong className="font-semibold">Interception :</strong> Utilisez
            Router avec aroundNav
          </li>
        </ul>
      </Alert>
    </div>
  );
}

export default RouterHome;
