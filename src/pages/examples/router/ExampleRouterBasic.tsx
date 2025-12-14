/**
 * EXEMPLE 1 : Router basique - Hash-based routing
 *
 * Router permet de personnaliser le comportement du routing.
 * Par défaut, Wouter utilise useBrowserLocation, mais on peut utiliser useHashLocation.
 */
import { Router, Route, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRouterBasic() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 1 : Router basique - Hash-based routing
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="text-sm">
          Observez l'URL dans la barre d'adresse - elle utilise le hash (#) au
          lieu du path normal.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Routing normal (sans Router)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Par défaut, Wouter utilise{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              useBrowserLocation
            </code>{" "}
            qui utilise l'API History.
          </p>
          <p className="text-[var(--color-text-light)]">
            L'URL ressemble à :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              http://example.com/page
            </code>
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <nav className="flex gap-2 mb-4">
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/router/example-1/page1"
            >
              Page 1
            </Button>
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/router/example-1/page2"
            >
              Page 2
            </Button>
          </nav>
          <Switch>
            <Route path="/router/example-1/page1">
              <div>
                <p className="mb-2">✅ Page 1 (routing normal)</p>
                <p className="text-sm text-[var(--color-text-light)]">
                  URL :{" "}
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                    {window.location.href}
                  </code>
                </p>
              </div>
            </Route>
            <Route path="/router/example-1/page2">
              <div>
                <p className="mb-2">✅ Page 2 (routing normal)</p>
                <p className="text-sm text-[var(--color-text-light)]">
                  URL :{" "}
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                    {window.location.href}
                  </code>
                </p>
              </div>
            </Route>
          </Switch>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Hash-based routing (avec Router)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              useHashLocation
            </code>
            , l'URL utilise le hash :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              http://example.com/#/page
            </code>
          </p>
          <p className="font-semibold mb-2">Avantages :</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-text-light)]">
            <li>
              Fonctionne sans configuration serveur (pas besoin de rewrite
              rules)
            </li>
            <li>
              Utile pour les applications déployées sur des serveurs statiques
            </li>
            <li>Compatible avec les anciens navigateurs</li>
          </ul>
        </Card>
        <Alert variant="warning" className="mb-4">
          <Router hook={useHashLocation}>
            <HashRoutingExample />
          </Router>
        </Alert>
        <CodeBlock language="jsx">
          {`import { Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

<Router hook={useHashLocation}>
  {/* Votre app */}
</Router>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Comparaison visuelle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card variant="outline" className="border-[#3498db]">
            <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Routing normal
            </h4>
            <p className="text-sm text-[var(--color-text-light)] mb-2">
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                http://example.com/page
              </code>
            </p>
            <p className="text-xs text-[var(--color-text-light)]">
              Utilise l'API History (pushState/replaceState)
            </p>
          </Card>
          <Card variant="outline" className="border-[#e67e22]">
            <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Hash-based routing
            </h4>
            <p className="text-sm text-[var(--color-text-light)] mb-2">
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                http://example.com/#/page
              </code>
            </p>
            <p className="text-xs text-[var(--color-text-light)]">
              Utilise le hash de l'URL (#)
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

// Composant séparé pour le hash routing (doit être dans le Router)
function HashRoutingExample() {
  const [location] = useLocation();

  return (
    <div>
      <nav className="flex gap-2 mb-4">
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/router/example-1/hash/page1"
        >
          Page 1 (hash)
        </Button>
        <Button
          variant="secondary"
          size="sm"
          asLink
          href="/router/example-1/hash/page2"
        >
          Page 2 (hash)
        </Button>
      </nav>
      <Switch>
        <Route path="/router/example-1/hash/page1">
          <Card>
            <p className="mb-2">✅ Page 1 (hash-based routing)</p>
            <p className="text-sm text-[var(--color-text-light)] mb-2">
              Location :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                {location}
              </code>
            </p>
            <p className="text-sm text-[var(--color-text-light)] mb-2">
              URL complète :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                {window.location.href}
              </code>
            </p>
            <p className="text-[var(--color-primary)] text-sm font-semibold">
              Notez le # dans l'URL !
            </p>
          </Card>
        </Route>
        <Route path="/router/example-1/hash/page2">
          <Card>
            <p className="mb-2">✅ Page 2 (hash-based routing)</p>
            <p className="text-sm text-[var(--color-text-light)] mb-2">
              Location :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                {location}
              </code>
            </p>
            <p className="text-sm text-[var(--color-text-light)]">
              URL complète :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                {window.location.href}
              </code>
            </p>
          </Card>
        </Route>
      </Switch>
    </div>
  );
}

export default ExampleRouterBasic;
