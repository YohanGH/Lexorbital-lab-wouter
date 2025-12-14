/**
 * EXEMPLE 2 : Importance de l'ordre dans Switch
 *
 * L'ordre des routes dans un Switch est crucial.
 * Les routes spécifiques doivent être avant les routes génériques.
 */
import { Route, Switch, useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleSwitchOrder() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 2 : Importance de l'ordre dans Switch
      </h2>

      <Alert variant="warning" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="text-sm">
          Testez les différentes URLs pour voir l'impact de l'ordre des routes.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          Cas d'usage : Routes d'orders avec patterns qui se chevauchent
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Vous avez des routes comme{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /orders/all
            </code>{" "}
            et{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /orders/:status
            </code>
            .
          </p>
          <p className="text-[var(--color-text-light)]">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /orders/all
            </code>{" "}
            matche aussi{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /orders/:status
            </code>{" "}
            (avec status="all").
          </p>
        </Card>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Mauvais ordre (spécifique après générique)
        </h3>
        <Alert variant="error" className="mb-4">
          <Switch>
            <Route path="/switch/orders/:status">
              {(params) => (
                <div>
                  <p className="mb-2">
                    ❌ Route générique matchée :{" "}
                    <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                      /switch/orders/:status
                    </code>
                  </p>
                  <p className="mb-2">Status reçu : {params.status}</p>
                  <p className="text-red-700 text-sm">
                    Problème : /switch/orders/all matche ici au lieu de la route
                    spécifique !
                  </p>
                </div>
              )}
            </Route>
            <Route path="/switch/orders/all">
              <div>
                <p className="mb-2">✅ Route spécifique : /switch/orders/all</p>
                <p className="text-red-700 text-sm">
                  ⚠️ Cette route n'est JAMAIS atteinte car la route générique
                  match d'abord !
                </p>
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Switch>
  <Route path="/orders/:status" />  {/* Match TOUT d'abord */}
  <Route path="/orders/all" />      {/* Jamais atteint ! */}
</Switch>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Bon ordre (spécifique avant générique)
        </h3>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/switch/orders/all">
              <div>
                <p className="mb-2">✅ Route spécifique : /switch/orders/all</p>
                <p className="text-green-700 text-sm">
                  Cette route est maintenant correctement matchée !
                </p>
              </div>
            </Route>
            <Route path="/switch/orders/:status">
              {(params) => (
                <div>
                  <p className="mb-2">
                    ✅ Route générique : /switch/orders/:status
                  </p>
                  <p className="mb-2">Status reçu : {params.status}</p>
                  <p className="text-green-700 text-sm">
                    Cette route match seulement si la route spécifique n'a pas
                    matché.
                  </p>
                </div>
              )}
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Switch>
  <Route path="/orders/all" />      {/* Spécifique en premier */}
  <Route path="/orders/:status" />  {/* Générique après */}
</Switch>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Test de navigation
        </h3>
        <Card>
          <p className="text-[var(--color-text-light)] mb-4">
            Naviguez vers différentes URLs pour voir la différence :
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/switch/orders/all"
            >
              /switch/orders/all
            </Button>
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/switch/orders/pending"
            >
              /switch/orders/pending
            </Button>
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/switch/orders/completed"
            >
              /switch/orders/completed
            </Button>
          </div>
        </Card>
      </section>

      <Alert variant="info">
        <p className="font-semibold mb-2">💡 Règle d'or :</p>
        <p className="text-sm">
          Dans un{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            Switch
          </code>
          , placez toujours les routes spécifiques{" "}
          <strong className="font-semibold">avant</strong> les routes
          génériques.
        </p>
      </Alert>
    </div>
  );
}

export default ExampleSwitchOrder;
