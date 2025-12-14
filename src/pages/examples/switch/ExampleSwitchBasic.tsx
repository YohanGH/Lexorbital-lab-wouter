/**
 * EXEMPLE 1 : Switch basique - Routing exclusif
 *
 * Switch garantit qu'une seule route est rendue à la fois.
 * La première route qui match est rendue, les autres sont ignorées.
 */
import { Route, Switch, useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleSwitchBasic() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 1 : Switch basique - Routing exclusif
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
          1. Sans Switch (routes multiples peuvent matcher)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Sans{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Switch
            </code>
            , plusieurs routes peuvent être rendues en même temps si elles
            matchent.
          </p>
        </Card>
        <Alert variant="warning" className="mb-4">
          <Route path="/switch/example-1">
            <div className="p-2 bg-green-100 mb-2 rounded">
              Route 1 : /switch/example-1
            </div>
          </Route>
          <Route path="/switch/example-1">
            <div className="p-2 bg-blue-100 mb-2 rounded">
              Route 2 : /switch/example-1 (dupliquée - aussi rendue !)
            </div>
          </Route>
          <Route path="/switch/:id">
            <div className="p-2 bg-red-100 rounded">
              Route 3 : /switch/:id (match aussi /switch/example-1)
            </div>
          </Route>
        </Alert>
        <Alert variant="error">
          <p>⚠️ Problème : Toutes les routes qui matchent sont rendues !</p>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Avec Switch (une seule route rendue)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Switch
            </code>
            , seule la <strong className="font-semibold">première</strong> route
            qui match est rendue.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/switch/example-1">
              <div className="p-2 bg-green-200 rounded">
                ✅ Route 1 : /switch/example-1 (première, donc rendue)
              </div>
            </Route>
            <Route path="/switch/:id">
              <div className="p-2 bg-blue-200 rounded">
                Route 2 : /switch/:id (match aussi, mais ignorée car après)
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Switch>
  <Route path="/switch/example-1">
    Route 1 (rendue en premier)
  </Route>
  <Route path="/switch/:id">
    Route 2 (ignorée si Route 1 match)
  </Route>
</Switch>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Test de navigation
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Naviguez vers différentes routes pour voir comment Switch garantit
            qu'une seule route est rendue :
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button variant="primary" size="sm" asLink href="/switch/example-1">
              /switch/example-1
            </Button>
            <Button variant="primary" size="sm" asLink href="/switch/test">
              /switch/test
            </Button>
            <Button variant="primary" size="sm" asLink href="/switch/123">
              /switch/123
            </Button>
          </div>
        </Card>
      </section>

      <Alert variant="info">
        <p className="font-semibold mb-2">💡 Règle d'or :</p>
        <p className="text-sm">
          Avec{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            Switch
          </code>
          , l'ordre des routes est crucial. Placez les routes spécifiques avant
          les routes génériques.
        </p>
      </Alert>
    </div>
  );
}

export default ExampleSwitchBasic;
