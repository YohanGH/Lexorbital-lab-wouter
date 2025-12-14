/**
 * Page d'accueil pour les exemples de Link
 */
import { Button, Card, Alert } from "../../../components/ui";

function LinksHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
        🔗 Exemples Link - Guide Complet
      </h1>

      <Alert variant="info" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📚 Fonctionnalités de Link
        </h2>
        <p>
          Le composant{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            Link
          </code>{" "}
          de Wouter est un wrapper autour d'un élément{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            &lt;a&gt;
          </code>{" "}
          qui gère la navigation.
        </p>
      </Alert>

      <div className="grid gap-6 mt-8">
        <Card variant="outline" className="border-[#3498db]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            1. Utilisation basique
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">href vs to :</strong> Deux alias
            pour la même chose
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Props proxied :</strong> Toutes
            les props standard d'un{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              &lt;a&gt;
            </code>{" "}
            sont supportées
          </p>
          <Button variant="primary" size="md" asLink href="/links/example-1">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#e74c3c]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            2. Options replace et state
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">replace :</strong> Remplace
            l'entrée dans l'historique au lieu d'en ajouter une nouvelle
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">state :</strong> Passe un état
            personnalisé à{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              history.state
            </code>
          </p>
          <Button variant="primary" size="md" asLink href="/links/example-2">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#9b59b6]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            3. asChild prop
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">asChild :</strong> Utilise le
            composant enfant directement au lieu de wrapper dans un{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              &lt;a&gt;
            </code>
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour intégrer avec des bibliothèques UI (Radix, Chakra, etc.)
          </p>
          <Button variant="primary" size="md" asLink href="/links/example-3">
            Voir l'exemple →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#27ae60]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            4. className comme fonction (liens actifs)
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">className fonction :</strong>{" "}
            Reçoit un booléen indiquant si le lien est actif
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            Parfait pour styler les liens actifs dans un menu de navigation
          </p>
          <Button variant="primary" size="md" asLink href="/links/example-4">
            Voir l'exemple →
          </Button>
        </Card>
      </div>

      <Alert variant="info" className="mt-8">
        <h3 className="font-semibold mb-2 text-base">💡 Résumé</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              href
            </code>{" "}
            et{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              to
            </code>{" "}
            sont équivalents (utilisez celui que vous préférez)
          </li>
          <li>
            Toutes les props HTML standard d'un{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              &lt;a&gt;
            </code>{" "}
            sont supportées
          </li>
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              replace
            </code>{" "}
            remplace l'entrée dans l'historique
          </li>
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              state
            </code>{" "}
            permet de passer des données via{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              history.state
            </code>
          </li>
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              asChild
            </code>{" "}
            pour utiliser des composants personnalisés
          </li>
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              className
            </code>{" "}
            comme fonction pour les liens actifs
          </li>
        </ul>
      </Alert>
    </div>
  );
}

export default LinksHome;
