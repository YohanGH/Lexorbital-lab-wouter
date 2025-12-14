/**
 * EXEMPLE 2 : Redirect avec state
 *
 * Redirect peut passer un état personnalisé lors de la redirection.
 * Utile pour passer des informations à la page de destination.
 */
import { Redirect, Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRedirectState() {
  const [location] = useLocation();
  const [state, setState] = useState<unknown>(null);

  useEffect(() => {
    // Synchroniser avec l'état du navigateur (external system)
    const updateState = () => {
      setState(history.state);
    };
    updateState();
  }, [location]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 2 : Redirect avec state
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p>
          <strong>History state :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {state ? JSON.stringify(state, null, 2) : "null"}
          </code>
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Redirect avec state simple
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Vous pouvez passer un objet{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              state
            </code>{" "}
            qui sera stocké dans{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              history.state
            </code>
            .
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/redirect/state/source">
              <div>
                <p className="mb-2">Page source - Redirection avec state...</p>
                <Redirect
                  to="/redirect/state/destination"
                  state={{
                    from: "source-page",
                    reason: "demo",
                    timestamp: new Date().getTime(),
                  }}
                />
              </div>
            </Route>
            <Route path="/redirect/state/destination">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
                  ✅ Page de destination
                </h3>
                {state && typeof state === "object" && "from" in state ? (
                  <Card className="mt-4">
                    <p className="font-semibold mb-2">State reçu :</p>
                    <CodeBlock language="json">
                      {JSON.stringify(state, null, 2)}
                    </CodeBlock>
                    <p className="mt-2 text-[var(--color-text-light)]">
                      Navigation depuis :{" "}
                      <strong className="font-semibold text-[var(--color-text)]">
                        {(state as { from: string }).from}
                      </strong>
                    </p>
                  </Card>
                ) : null}
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Redirect 
  to="/destination"
  state={{ from: "source-page", reason: "demo" }}
/>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Cas d'usage : Redirection après action
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Utile pour passer des informations lors d'une redirection après une
            action (ex: création, suppression).
          </p>
        </Card>
        <Alert variant="warning" className="mb-4">
          <Switch>
            <Route path="/redirect/state/create">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  Création d'élément
                </h3>
                <p className="text-[var(--color-text-light)] mb-2">
                  Simulation d'une création...
                </p>
                <Redirect
                  to="/redirect/state/success"
                  state={{
                    action: "create",
                    message: "Élément créé avec succès",
                    itemId: 123,
                  }}
                />
              </div>
            </Route>
            <Route path="/redirect/state/success">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
                  ✅ Succès
                </h3>
                {state && typeof state === "object" && "action" in state ? (
                  <Card className="mt-4">
                    <p className="font-semibold mb-2 text-lg">
                      {(state as unknown as { message: string }).message}
                    </p>
                    <p className="text-[var(--color-text-light)] mb-2">
                      Action :{" "}
                      <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                        {(state as { action: string }).action}
                      </code>
                    </p>
                    {"itemId" in state && (
                      <p className="text-[var(--color-text-light)]">
                        ID de l'élément :{" "}
                        <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                          {(state as { itemId: number }).itemId}
                        </code>
                      </p>
                    )}
                  </Card>
                ) : null}
              </div>
            </Route>
          </Switch>
        </Alert>
      </section>

      <nav className="mt-8 flex gap-2 flex-wrap">
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/redirect/state/source"
        >
          Source (avec state)
        </Button>
        <Button
          variant="secondary"
          size="sm"
          asLink
          href="/redirect/state/destination"
        >
          Destination
        </Button>
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/redirect/state/create"
        >
          Créer (avec state)
        </Button>
        <Button variant="ghost" size="sm" asLink href="/redirect/state/success">
          Succès
        </Button>
      </nav>
    </div>
  );
}

export default ExampleRedirectState;
