/**
 * EXEMPLE 7 : Préfixe ~ pour chemins absolus
 *
 * Dans un contexte imbriqué, utiliser ~ pour naviguer vers un chemin absolu.
 * <Link to="~/home">Back to Home</Link>
 */
import { useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function Example7AbsolutePath() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 7 : Préfixe ~ pour chemins absolus
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          Location actuelle :{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="text-sm mb-2">
          Dans un contexte imbriqué (ex: /app/users/1), les liens relatifs sont
          relatifs au parent.
        </p>
        <p className="text-sm mb-3">
          Pour naviguer vers un chemin absolu, utilisez le préfixe{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            ~
          </code>{" "}
          :
        </p>
        <CodeBlock language="jsx">
          {`// Depuis /app/users/1
<Link to="/home">Home</Link>        // → /app/users/1/home (relatif)
<Link to="~/home">Home</Link>       // → /home (absolu)`}
        </CodeBlock>
      </Alert>

      <Card className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
          Testez la navigation :
        </h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="ghost" size="sm" asLink href="/home">
            Home (relatif)
          </Button>
          <Button variant="primary" size="sm" asLink href="~/home">
            Home (absolu avec ~)
          </Button>
          <Button variant="ghost" size="sm" asLink href="/app">
            App (relatif)
          </Button>
          <Button variant="primary" size="sm" asLink href="~/app">
            App (absolu avec ~)
          </Button>
          <Button variant="ghost" size="sm" asLink href="/example-1">
            Example 1 (relatif)
          </Button>
          <Button variant="primary" size="sm" asLink href="~/example-1">
            Example 1 (absolu avec ~)
          </Button>
        </div>
      </Card>

      <Alert variant="warning">
        <h3 className="font-semibold mb-2 text-base">Quand utiliser ~ ?</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            Dans un contexte imbriqué, pour naviguer vers une route de niveau
            supérieur
          </li>
          <li>Pour éviter les chemins relatifs qui peuvent être ambigus</li>
          <li>
            Pour créer des liens de navigation globale depuis n'importe où
          </li>
        </ul>
      </Alert>
    </div>
  );
}

export default Example7AbsolutePath;
