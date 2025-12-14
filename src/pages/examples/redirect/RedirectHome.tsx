/**
 * Page d'accueil pour les exemples de Redirect
 */
import { Button, Card, Alert } from "../../../components/ui";

function RedirectHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
        🔄 Exemples Redirect - Guide Complet
      </h1>

      <Alert variant="info" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📚 Qu'est-ce que Redirect ?
        </h2>
        <p className="mb-2">
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            Redirect
          </code>{" "}
          effectue une redirection vers un chemin donné. Il utilise{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            useLocation
          </code>{" "}
          en interne dans un{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            useEffect
          </code>
          .
        </p>
        <p>
          Pour des redirections conditionnelles ou dans des event handlers,
          utilisez{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            useLocation
          </code>{" "}
          directement.
        </p>
      </Alert>

      <div className="grid gap-6 mt-8">
        <Card variant="outline" className="border-[#3498db]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            1. Redirect basique
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Redirection simple :</strong>{" "}
            Rediriger d'un chemin vers un autre
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Dans un Switch :</strong> Utiliser
            Redirect pour gérer les redirections de routes
          </p>
          <Button variant="primary" size="md" asLink href="/redirect/example-1">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#9b59b6]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            2. Redirect avec state
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Passer des données :</strong>{" "}
            Utiliser state pour passer des informations à la page de destination
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour les redirections après actions (création, suppression,
            etc.)
          </p>
          <Button variant="primary" size="md" asLink href="/redirect/example-2">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#e74c3c]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            3. Redirect avec replace
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">replace :</strong> Remplace
            l'entrée dans l'historique au lieu d'en ajouter une nouvelle
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour les redirections après login, migration d'URL, etc.
          </p>
          <Button variant="primary" size="md" asLink href="/redirect/example-3">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#16a085]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            4. Redirect conditionnel
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">useLocation :</strong> Pour des
            redirections conditionnelles ou dans des event handlers
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Redirections après chargement de données, vérifications, etc.
          </p>
          <Button variant="primary" size="md" asLink href="/redirect/example-4">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#27ae60]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            5. Cas d'usage réels
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Protection de routes :</strong>{" "}
            Rediriger si non authentifié
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Migration d'URL :</strong>{" "}
            Rediriger les anciennes URLs vers les nouvelles
          </p>
          <Button variant="primary" size="md" asLink href="/redirect/example-5">
            Voir l'exemple →
          </Button>
        </Card>
      </div>

      <Alert variant="info" className="mt-8">
        <h3 className="font-semibold mb-2 text-base">
          💡 Quand utiliser Redirect vs useLocation ?
        </h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-semibold">Redirect :</strong> Pour des
            redirections simples et déclaratives dans le JSX
          </li>
          <li>
            <strong className="font-semibold">useLocation :</strong> Pour des
            redirections conditionnelles, dans des event handlers, ou après des
            opérations asynchrones
          </li>
        </ul>
      </Alert>
    </div>
  );
}

export default RedirectHome;
