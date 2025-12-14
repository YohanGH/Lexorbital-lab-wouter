/**
 * EXEMPLE 3 : Route par défaut (fallback) dans Switch
 *
 * Une Route sans path dans un Switch sert de fallback.
 * Elle est rendue quand aucune autre route ne match.
 * Elle doit être en DERNIER dans le Switch.
 */
import { Route, Switch, useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleSwitchDefault() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 3 : Route par défaut (fallback) dans Switch
      </h2>

      <Alert variant="info" className="mb-6">
        <p>
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Route par défaut (sans path)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Dans un{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Switch
            </code>
            , une{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Route
            </code>{" "}
            sans{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              path
            </code>{" "}
            match toujours.
          </p>
          <p className="text-[var(--color-text-light)]">
            Elle sert de <strong className="font-semibold">fallback</strong>{" "}
            quand aucune autre route ne match.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/switch/users/:id">
              {(params) => (
                <div className="p-2 bg-green-200 rounded">
                  ✅ Route spécifique : User ID {params.id}
                </div>
              )}
            </Route>
            <Route path="/switch/users">
              <div className="p-2 bg-blue-200 rounded">
                ✅ Route : Liste des users
              </div>
            </Route>
            {/* Route par défaut - DOIT être en dernier */}
            <Route>
              <div className="p-2 bg-yellow-200 border-2 border-yellow-400 rounded">
                🔄 Route par défaut (fallback) - Aucune route n'a matché
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Switch>
  <Route path="/users/:id" />
  <Route path="/users" />
  {/* Route par défaut - DOIT être en dernier */}
  <Route>
    <NotFound />
  </Route>
</Switch>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Ordre de la route par défaut est crucial
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            La route par défaut <strong className="font-semibold">DOIT</strong>{" "}
            être en dernier dans le{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Switch
            </code>
            . Si elle est placée avant d'autres routes, elle match toujours et
            les autres routes ne seront jamais atteintes.
          </p>
        </Card>
        <Alert variant="warning" className="mb-4">
          <p className="font-semibold mb-2">⚠️ Mauvais ordre :</p>
          <CodeBlock language="jsx">
            {`<Switch>
  <Route> {/* ❌ En premier - match TOUJOURS */}
    <NotFound />
  </Route>
  <Route path="/users/:id" /> {/* Jamais atteint ! */}
</Switch>`}
          </CodeBlock>
        </Alert>
        <Alert variant="success" className="mb-4">
          <p className="font-semibold mb-2">✅ Bon ordre :</p>
          <CodeBlock language="jsx">
            {`<Switch>
  <Route path="/users/:id" /> {/* Routes spécifiques d'abord */}
  <Route> {/* ✅ En dernier - fallback */}
    <NotFound />
  </Route>
</Switch>`}
          </CodeBlock>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Test de navigation
        </h3>
        <Card>
          <p className="text-[var(--color-text-light)] mb-4">
            Naviguez vers différentes URLs pour tester la route par défaut :
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button variant="primary" size="sm" asLink href="/switch/users/123">
              /switch/users/123
            </Button>
            <Button variant="primary" size="sm" asLink href="/switch/users">
              /switch/users
            </Button>
            <Button variant="secondary" size="sm" asLink href="/switch/unknown">
              /switch/unknown (fallback)
            </Button>
          </div>
        </Card>
      </section>

      <Alert variant="info">
        <p className="font-semibold mb-2">💡 Cas d'usage :</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Page 404 (NotFound)</li>
          <li>Page d'accueil par défaut</li>
          <li>Redirection vers une page principale</li>
        </ul>
      </Alert>
    </div>
  );
}

export default ExampleSwitchDefault;
