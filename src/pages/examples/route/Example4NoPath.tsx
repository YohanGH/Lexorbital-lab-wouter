/**
 * EXEMPLE 4 : Route sans path (toujours match)
 * <Route>Always visible</Route>
 *
 * Une route sans path match toujours.
 * Utile pour :
 * - Les routes 404 (fallback)
 * - Déboguer en rendant une route visible sans navigation
 */
import { Card, CodeBlock, Alert } from "../../../components/ui";

function Example4NoPath() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 4 : Route sans path
      </h2>
      <Card className="mb-6">
        <p className="text-[var(--color-text-light)] mb-4">
          Cette route n'a pas de prop `path` :
        </p>
        <CodeBlock language="jsx">
          {"<Route><Example4NoPath /></Route>"}
        </CodeBlock>
        <p className="text-[var(--color-text-light)] mt-4">
          Elle match <strong className="font-semibold">toujours</strong>, peu
          importe l'URL.
        </p>
      </Card>
      <Alert variant="info">
        <p className="font-semibold mb-2">Utile pour :</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Les routes 404 (fallback dans un Switch)</li>
          <li>Déboguer : enlever le path pour rendre une route visible</li>
        </ul>
      </Alert>
    </div>
  );
}

export default Example4NoPath;
