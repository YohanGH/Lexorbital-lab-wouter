/**
 * EXEMPLE 4 : Redirect conditionnel avec useLocation
 *
 * Pour des redirections conditionnelles ou dans des event handlers,
 * utilisez useLocation au lieu de Redirect.
 */
import { Route, Switch, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRedirectConditional() {
  const [location, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Exemple : Redirect après chargement de données
  useEffect(() => {
    if (!shouldRedirect) return;

    // Simulation d'une requête API - utiliser setTimeout pour éviter setState synchrone
    const startLoading = () => {
      setIsLoading(true);
    };

    const timer = setTimeout(() => {
      startLoading();
      // Simulation d'une requête API
      setTimeout(() => {
        setLocation("/redirect/conditional/success", { replace: true });
        setIsLoading(false);
        setShouldRedirect(false);
      }, 1500);
    }, 0);

    return () => clearTimeout(timer);
  }, [shouldRedirect, setLocation]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 4 : Redirect conditionnel avec useLocation
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
          1. Redirect dans un event handler
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Redirect
            </code>{" "}
            ne peut pas être utilisé dans un event handler. Utilisez{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              useLocation
            </code>{" "}
            à la place.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/redirect/conditional/action">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  Page d'action
                </h3>
                <p className="text-[var(--color-text-light)] mb-4">
                  Cliquez sur le bouton pour déclencher une redirection après
                  une action.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    // Simulation d'une action
                    console.log("Action effectuée");
                    // Redirection après l'action
                    setLocation("/redirect/conditional/success", {
                      state: { action: "button-click", timestamp: Date.now() },
                    });
                  }}
                >
                  Effectuer action et rediriger
                </Button>
              </div>
            </Route>
            <Route path="/redirect/conditional/success">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  ✅ Succès
                </h3>
                <p className="text-[var(--color-text-light)] mb-4">
                  Redirection réussie après action !
                </p>
                {history.state && (
                  <Card className="mt-4">
                    <p className="font-semibold mb-2">State reçu :</p>
                    <CodeBlock language="json">
                      {JSON.stringify(history.state, null, 2)}
                    </CodeBlock>
                  </Card>
                )}
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`import { useLocation } from "wouter";

const [location, setLocation] = useLocation();

button.onClick = () => {
  // Action...
  setLocation("/success", { state: { action: "click" } });
};`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Redirect après chargement de données
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Exemple : Rediriger après qu'une requête API soit terminée.
          </p>
        </Card>
        <Alert variant="info" className="mb-4">
          {isLoading ? (
            <div>
              <p className="mb-2">⏳ Chargement en cours...</p>
              <p className="text-sm text-[var(--color-text-light)]">
                Redirection dans quelques instants...
              </p>
            </div>
          ) : (
            <div>
              <p className="mb-4">
                Cliquez sur le bouton pour déclencher une redirection après
                chargement :
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => setShouldRedirect(true)}
              >
                Charger et rediriger
              </Button>
            </div>
          )}
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Redirect conditionnel basé sur l'état
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Vous pouvez rediriger conditionnellement basé sur l'état de
            l'application (auth, permissions, etc.).
          </p>
        </Card>
        <CodeBlock language="jsx">
          {`const [location, setLocation] = useLocation();
const isAuthenticated = useAuth();

useEffect(() => {
  if (!isAuthenticated) {
    setLocation("/login", { replace: true });
  }
}, [isAuthenticated, setLocation]);`}
        </CodeBlock>
      </section>

      <nav className="mt-8 flex gap-2 flex-wrap">
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/redirect/conditional/action"
        >
          Page d'action
        </Button>
        <Button
          variant="secondary"
          size="sm"
          asLink
          href="/redirect/conditional/success"
        >
          Page de succès
        </Button>
      </nav>
    </div>
  );
}

export default ExampleRedirectConditional;
