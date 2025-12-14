/**
 * EXEMPLE 3 : Router avec aroundNav
 *
 * aroundNav permet d'intercepter toutes les navigations et d'exécuter
 * une logique personnalisée avant/après la navigation.
 * Utile pour les transitions de vue, analytics, etc.
 */
import { Router, Route, Switch, useLocation } from "wouter";
import { useState } from "react";
import { Alert, Card, CodeBlock, Button } from "../../../components/ui";

function ExampleRouterAroundNav() {
  const [navigationLog, setNavigationLog] = useState<
    Array<{ to: string; timestamp: number }>
  >([]);

  // Fonction aroundNav personnalisée
  const aroundNav = (
    navigate: (
      to: string,
      options?: { replace?: boolean; state?: unknown }
    ) => void,
    to: string,
    options?: { replace?: boolean; state?: unknown }
  ) => {
    // Logique avant navigation
    console.log("🔄 Navigation vers:", to, options);
    setNavigationLog((prev) => [...prev, { to, timestamp: Date.now() }]);

    // Simulation d'une transition (ex: animation)
    const startTransition = () => {
      document.body.style.opacity = "0.5";
      document.body.style.transition = "opacity 0.2s";
    };

    const endTransition = () => {
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 200);
    };

    startTransition();

    // Effectuer la navigation
    navigate(to, options);

    // Logique après navigation
    endTransition();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 3 : Router avec aroundNav
      </h2>

      <Alert variant="info" className="mb-6">
        <p>
          <strong>aroundNav :</strong> Intercepte toutes les navigations pour
          exécuter une logique personnalisée.
        </p>
        <p className="text-sm mt-2">
          Dans cet exemple, aroundNav ajoute une transition de fade et log
          toutes les navigations.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. aroundNav basique
        </h3>
        <p className="text-[var(--color-text-light)] mb-4">
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            aroundNav
          </code>{" "}
          est appelé pour chaque navigation (Link, Redirect, useLocation).
        </p>
        <Card variant="outline" className="mt-4">
          <Router
            {...({ aroundNav } as unknown as { aroundNav: typeof aroundNav })}
          >
            <AroundNavExample navigationLog={navigationLog} />
          </Router>
        </Card>
        <CodeBlock language="javascript" className="mt-4">
          {`const aroundNav = (navigate, to, options) => {
  // Logique avant navigation
  console.log("Navigation vers:", to);
  
  // Effectuer la navigation
  navigate(to, options);
  
  // Logique après navigation
  // ...
};

<Router aroundNav={aroundNav}>
  {/* Votre app */}
</Router>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Cas d'usage : aroundNav
        </h3>
        <Alert variant="warning">
          <p className="font-semibold mb-3">Quand utiliser aroundNav ?</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>View Transitions API :</strong> Animer les transitions
              entre pages
            </li>
            <li>
              <strong>Analytics :</strong> Tracker toutes les navigations
            </li>
            <li>
              <strong>Loading states :</strong> Afficher un loader pendant la
              navigation
            </li>
            <li>
              <strong>Validation :</strong> Empêcher la navigation si des
              données non sauvegardées
            </li>
            <li>
              <strong>Logging :</strong> Logger toutes les navigations pour le
              debugging
            </li>
          </ul>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Exemple : Empêcher la navigation
        </h3>
        <p className="text-[var(--color-text-light)] mb-4">
          Vous pouvez empêcher la navigation en ne appelant pas{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            navigate
          </code>
          .
        </p>
        <Card variant="outline" className="mt-4">
          <Router
            {...({
              aroundNav: (
                navigate: (
                  to: string,
                  options?: { replace?: boolean; state?: unknown }
                ) => void,
                to: string,
                options?: { replace?: boolean; state?: unknown }
              ) => {
                // Exemple : empêcher la navigation vers /blocked
                if (to.includes("/blocked")) {
                  alert("Navigation vers cette page est bloquée !");
                  return; // Ne pas appeler navigate
                }
                navigate(to, options);
              },
            } as unknown as {
              aroundNav: (
                navigate: (
                  to: string,
                  options?: { replace?: boolean; state?: unknown }
                ) => void,
                to: string,
                options?: { replace?: boolean; state?: unknown }
              ) => void;
            })}
          >
            <BlockedNavigationExample />
          </Router>
        </Card>
      </section>
    </div>
  );
}

// Composant pour l'exemple aroundNav
function AroundNavExample({
  navigationLog,
}: {
  navigationLog: Array<{ to: string; timestamp: number }>;
}) {
  const [location] = useLocation();

  return (
    <div>
      <Alert variant="success" className="mb-4">
        <p>
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
      </Alert>

      <nav className="flex gap-2 mb-4 flex-wrap">
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/router/example-3/page1"
        >
          Page 1
        </Button>
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/router/example-3/page2"
        >
          Page 2
        </Button>
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/router/example-3/page3"
        >
          Page 3
        </Button>
      </nav>

      <Switch>
        <Route path="/router/example-3/page1">
          <div>
            <h3>✅ Page 1</h3>
            <p>Observez la transition de fade lors de la navigation.</p>
          </div>
        </Route>
        <Route path="/router/example-3/page2">
          <div>
            <h3>✅ Page 2</h3>
            <p>La transition est gérée par aroundNav.</p>
          </div>
        </Route>
        <Route path="/router/example-3/page3">
          <div>
            <h3>✅ Page 3</h3>
            <p>
              💡 <strong>Astuce :</strong> Ouvrez la console du navigateur (F12
              ou Cmd+Option+I) → onglet <strong>"Console"</strong> pour voir les
              logs de navigation.
            </p>
          </div>
        </Route>
      </Switch>

      {navigationLog.length > 0 && (
        <Card className="mt-8">
          <h4 className="font-semibold text-[var(--color-text)] mb-4">
            Historique des navigations (via aroundNav) :
          </h4>
          <ul className="text-sm text-[var(--color-text-light)] space-y-1">
            {navigationLog.slice(-5).map((log, index) => (
              <li key={index}>
                {new Date(log.timestamp).toLocaleTimeString()} →{" "}
                <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                  {log.to}
                </code>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

// Composant pour l'exemple de navigation bloquée
function BlockedNavigationExample() {
  return (
    <div>
      <nav className="flex gap-2 mb-4 flex-wrap">
        <Button
          variant="primary"
          size="sm"
          asLink
          href="/router/example-3/allowed"
        >
          Page autorisée
        </Button>
        <Button
          variant="secondary"
          size="sm"
          asLink
          href="/router/example-3/blocked"
        >
          Page bloquée
        </Button>
      </nav>
      <Switch>
        <Route path="/router/example-3/allowed">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Page autorisée
            </h3>
            <p className="text-[var(--color-text-light)]">
              Cette navigation fonctionne normalement.
            </p>
          </Card>
        </Route>
        <Route path="/router/example-3/blocked">
          <Card variant="outline">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ❌ Page bloquée
            </h3>
            <p className="text-[var(--color-text-light)]">
              Cette page ne devrait pas être accessible (bloquée par aroundNav).
            </p>
          </Card>
        </Route>
      </Switch>
    </div>
  );
}

export default ExampleRouterAroundNav;
