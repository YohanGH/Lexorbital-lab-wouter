/**
 * Page d'accueil pour les exemples de Switch
 */
import { Alert, Button, Card } from "../../../components/ui";

function SwitchHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
        🔄 Exemples Switch - Guide Complet
      </h1>

      <Alert variant="info" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📚 Qu'est-ce que Switch ?
        </h2>
        <p className="mb-2">
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            Switch
          </code>{" "}
          garantit qu'une seule route est rendue à la fois, même si plusieurs
          routes matchent.
        </p>
        <p>
          C'est utile quand vous avez des patterns qui se chevauchent (ex:{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            /orders/all
          </code>{" "}
          et{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            /orders/:status
          </code>
          ).
        </p>
      </Alert>

      <div className="grid gap-6 mt-8">
        <Card variant="outline" className="border-[#3498db]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            1. Switch basique
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Routing exclusif :</strong> Une
            seule route rendue à la fois
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Ordre important :</strong> La
            première route qui match est rendue
          </p>
          <Button variant="primary" size="md" asLink href="/switch/example-1">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#e74c3c]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            2. Importance de l'ordre
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Problème :</strong> Routes avec
            patterns qui se chevauchent
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Solution :</strong> Routes
            spécifiques avant routes génériques
          </p>
          <Button variant="primary" size="md" asLink href="/switch/example-2">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#9b59b6]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            3. Route par défaut (fallback)
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Route sans path :</strong> Match
            toujours, sert de fallback
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Position :</strong> Doit être en
            dernier dans le Switch
          </p>
          <Button variant="primary" size="md" asLink href="/switch/example-3">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#27ae60]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            4. Cas d'usage réel
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Dashboard :</strong> Exemple
            complet avec routes imbriquées
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Routes spécifiques, génériques, et fallback dans un vrai contexte
          </p>
          <Button variant="primary" size="md" asLink href="/switch/example-4">
            Voir l'exemple →
          </Button>
        </Card>
      </div>

      <Alert variant="info" className="mt-8">
        <h3 className="font-semibold mb-2 text-base">
          💡 Règles d'or pour Switch
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>
            <strong className="font-semibold">
              Routes spécifiques en premier
            </strong>{" "}
            : Routes exactes avant routes avec paramètres
          </li>
          <li>
            <strong className="font-semibold">Routes génériques après</strong> :
            Routes avec paramètres avant routes avec wildcards
          </li>
          <li>
            <strong className="font-semibold">
              Route par défaut en dernier
            </strong>{" "}
            : Route sans path doit être la dernière
          </li>
          <li>
            <strong className="font-semibold">Une seule route rendue</strong> :
            Switch garantit qu'une seule route est active
          </li>
        </ol>
      </Alert>
    </div>
  );
}

export default SwitchHome;
