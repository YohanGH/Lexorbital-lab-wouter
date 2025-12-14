/**
 * EXEMPLE 1 : Redirect basique
 *
 * Redirect effectue une redirection vers un chemin donné.
 * Il utilise useLocation en interne dans un useEffect.
 */
import { Redirect, Route, Switch, useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRedirectBasic() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 1 : Redirect basique
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
          1. Redirect simple
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Redirect
            </code>{" "}
            effectue une redirection immédiate vers le chemin spécifié.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/redirect/old-page">
              <div>
                <p className="mb-2">Ancienne page (sera redirigée)</p>
                <Redirect to="/redirect/new-page" />
              </div>
            </Route>
            <Route path="/redirect/new-page">
              <div>
                <p className="mb-2">✅ Nouvelle page - Redirection réussie !</p>
                <p className="text-green-700 text-sm">
                  Vous avez été redirigé depuis /redirect/old-page
                </p>
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Route path="/old-page">
  <Redirect to="/new-page" />
</Route>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Redirect dans un Switch
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Redirect
            </code>{" "}
            peut être utilisé dans un{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Switch
            </code>{" "}
            pour gérer les redirections.
          </p>
        </Card>
        <Alert variant="warning" className="mb-4">
          <Switch>
            <Route path="/redirect/dashboard">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  Dashboard
                </h3>
                <p className="text-[var(--color-text-light)]">
                  Page principale du dashboard
                </p>
              </div>
            </Route>
            <Route path="/redirect/home">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  Home
                </h3>
                <p className="text-[var(--color-text-light)]">Page d'accueil</p>
              </div>
            </Route>
            <Route path="/redirect">
              <Redirect to="/redirect/dashboard" />
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Switch>
  <Route path="/redirect/dashboard">
    <Dashboard />
  </Route>
  <Route path="/redirect">
    <Redirect to="/redirect/dashboard" />
  </Route>
</Switch>`}
        </CodeBlock>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Test de redirection
        </h3>
        <Card>
          <p className="text-[var(--color-text-light)] mb-4">
            Cliquez sur les liens ci-dessous pour tester les redirections :
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/redirect/old-page"
            >
              Ancienne page (redirige)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              asLink
              href="/redirect/new-page"
            >
              Nouvelle page
            </Button>
            <Button variant="ghost" size="sm" asLink href="/redirect">
              /redirect (redirige vers dashboard)
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default ExampleRedirectBasic;
