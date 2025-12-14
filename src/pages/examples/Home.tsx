/**
 * Page d'accueil avec liens vers tous les exemples
 */
import { Link } from "wouter";
import { Card, Alert } from "../../components/ui";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
        Exemples Wouter - Guide Complet
      </h1>

      <Alert variant="info" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📚 Table des matières</h2>
        <p>
          Naviguez vers chaque exemple pour comprendre les différentes
          fonctionnalités de Wouter.
        </p>
      </Alert>

      <div className="grid gap-4">
        <Card>
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            1. Formes de déclaration de routes
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
            <li>
              <Link
                href="/example-1"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Simple Form
              </Link>{" "}
              - Route avec composant enfant
            </li>
            <li>
              <Link
                href="/example-2/active"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Component Prop
              </Link>{" "}
              - Route avec prop component
            </li>
            <li>
              <Link
                href="/example-3/123/john"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Render-Prop
              </Link>{" "}
              - Route avec fonction render
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            2. Routes spéciales
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
            <li>
              <Link
                href="/example-4"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Route sans path
              </Link>{" "}
              - Route qui match toujours
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            3. Routes imbriquées (Nesting)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
            <li>
              <Link
                href="/example-6"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Nesting avec prop `nest`
              </Link>{" "}
              - Routes imbriquées
            </li>
            <li>
              <Link
                href="/app"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Section /app
              </Link>{" "}
              - Exemple de nesting en action
            </li>
            <li>
              <Link
                href="/app/users/1"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                User dans /app
              </Link>{" "}
              - Route imbriquée avec param
            </li>
            <li>
              <Link
                href="/example-7"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Préfixe ~
              </Link>{" "}
              - Navigation absolue dans contexte imbriqué
            </li>
          </ul>
        </Card>
      </div>

      <Alert variant="warning" className="mt-8">
        <h3 className="font-semibold mb-2">💡 Astuce</h3>
        <p>
          Ouvrez la console du navigateur et observez les changements de
          location lors de la navigation.
        </p>
      </Alert>
    </div>
  );
}

export default Home;
