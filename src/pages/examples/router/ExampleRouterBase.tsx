/**
 * EXEMPLE 2 : Router avec base path
 *
 * Le base path permet de faire fonctionner l'app sous un sous-chemin.
 * Utile pour les apps déployées sous /app, /admin, etc.
 */
import { Router, Route, Switch, useLocation, useRouter } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRouterBase() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 2 : Router avec base path
      </h2>

      <Alert variant="warning" className="mb-6">
        <p className="mb-2">
          <strong>Base path :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            /router/example-2/app
          </code>
        </p>
        <p className="text-sm">
          Toutes les routes sont relatives à ce base path. Pour naviguer vers un
          chemin absolu, utilisez le préfixe{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            ~
          </code>
          .
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Router avec base path
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Le{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              base
            </code>{" "}
            permet de faire fonctionner l'app sous un sous-chemin.
          </p>
          <p className="text-[var(--color-text-light)]">
            Toutes les routes sont automatiquement préfixées par le base path.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Router base="/router/example-2/app">
            <BasePathExample />
          </Router>
        </Alert>
        <CodeBlock language="jsx">
          {`<Router base="/app">
  <Route path="/dashboard" />  {/* Devient /app/dashboard */}
  <Route path="/users" />      {/* Devient /app/users */}
</Router>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Navigation relative vs absolue
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Dans un contexte avec base path, les liens sont relatifs par défaut.
          </p>
          <p className="text-[var(--color-text-light)]">
            Utilisez{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              ~
            </code>{" "}
            pour naviguer vers un chemin absolu (hors du base path).
          </p>
        </Card>
        <Alert variant="info" className="mb-4">
          <Router base="/router/example-2/app">
            <BasePathNavigationExample />
          </Router>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Cas d'usage
        </h3>
        <Alert variant="info">
          <p className="font-semibold mb-2">Quand utiliser base path ?</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <strong className="font-semibold">
                App déployée sous un sous-chemin :
              </strong>{" "}
              /app, /admin, /dashboard
            </li>
            <li>
              <strong className="font-semibold">Micro-frontends :</strong>{" "}
              Chaque micro-app a son propre base path
            </li>
            <li>
              <strong className="font-semibold">Multi-tenant :</strong> Chaque
              tenant a son propre chemin
            </li>
            <li>
              <strong className="font-semibold">
                Intégration dans un site existant :
              </strong>{" "}
              L'app React est une section du site
            </li>
          </ul>
        </Alert>
      </section>
    </div>
  );
}

// Composant pour l'exemple avec base path
function BasePathExample() {
  const [location] = useLocation();
  const router = useRouter();

  return (
    <div>
      <Alert variant="success" className="mb-4">
        <p className="mb-2">
          <strong>Location (relative) :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {location}
          </code>
        </p>
        <p className="mb-2">
          <strong>Base path :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {router.base}
          </code>
        </p>
        <p>
          <strong>URL complète :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {window.location.pathname}
          </code>
        </p>
      </Alert>

      <nav className="flex gap-2 mb-4">
        <Button variant="primary" size="sm" asLink href="/dashboard">
          Dashboard (relatif)
        </Button>
        <Button variant="primary" size="sm" asLink href="/users">
          Users (relatif)
        </Button>
        <Button variant="secondary" size="sm" asLink href="~/home">
          Home (absolu avec ~)
        </Button>
      </nav>

      <Switch>
        <Route path="/dashboard">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Dashboard
            </h3>
            <p className="text-sm text-[var(--color-text-light)] mb-1">
              Route : /dashboard (relatif au base path)
            </p>
            <p className="text-sm text-[var(--color-text-light)]">
              URL complète : /router/example-2/app/dashboard
            </p>
          </Card>
        </Route>
        <Route path="/users">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Users
            </h3>
            <p className="text-sm text-[var(--color-text-light)] mb-1">
              Route : /users (relatif au base path)
            </p>
            <p className="text-sm text-[var(--color-text-light)]">
              URL complète : /router/example-2/app/users
            </p>
          </Card>
        </Route>
        <Route>
          <Card>
            <p className="text-[var(--color-text-light)] mb-2">
              Bienvenue dans l'app avec base path
            </p>
            <p className="text-[var(--color-text-light)]">Naviguez vers /dashboard ou /users</p>
          </Card>
        </Route>
      </Switch>
    </div>
  );
}

// Composant pour l'exemple de navigation
function BasePathNavigationExample() {
  const [location] = useLocation();

  return (
    <div>
      <Alert variant="warning" className="mb-4">
        <h4 className="font-semibold mb-2">
          Comparaison : Navigation relative vs absolue
        </h4>
        <p className="text-sm mb-1">
          Base path :{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            /router/example-2/app
          </code>
        </p>
        <p className="text-sm">
          Location actuelle :{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {location}
          </code>
        </p>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card variant="outline" className="border-[#3498db]">
          <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
            Navigation relative
          </h4>
          <p className="text-xs text-[var(--color-text-light)] mb-2">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">{`<Link href="/home">`}</code>
          </p>
          <p className="text-xs text-[var(--color-text-light)] mb-4">
            → Va vers :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /router/example-2/app/home
            </code>
          </p>
          <Button variant="primary" size="sm" asLink href="/home">
            Test relatif
          </Button>
        </Card>

        <Card variant="outline" className="border-[#e67e22]">
          <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
            Navigation absolue (avec ~)
          </h4>
          <p className="text-xs text-[var(--color-text-light)] mb-2">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">{`<Link href="~/home">`}</code>
          </p>
          <p className="text-xs text-[var(--color-text-light)] mb-4">
            → Va vers :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /home
            </code>{" "}
            (hors du base path)
          </p>
          <Button variant="secondary" size="sm" asLink href="~/home">
            Test absolu
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default ExampleRouterBase;
