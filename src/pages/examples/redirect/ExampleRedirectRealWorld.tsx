/**
 * EXEMPLE 5 : Cas d'usage réels
 *
 * Exemples concrets d'utilisation de Redirect dans une application réelle.
 */
import { Redirect, Route, Switch, useLocation } from "wouter";
import { useState } from "react";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRedirectRealWorld() {
  const [location] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 5 : Cas d'usage réels
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p>
          <strong>État d'authentification :</strong>{" "}
          {isAuthenticated ? "✅ Connecté" : "❌ Non connecté"}
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Protection de route (redirect si non authentifié)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Rediriger vers la page de login si l'utilisateur n'est pas
            authentifié.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/redirect/real/login">
              <LoginPage onLogin={() => setIsAuthenticated(true)} />
            </Route>
            <Route path="/redirect/real/protected">
              {isAuthenticated ? (
                <ProtectedPage />
              ) : (
                <Redirect to="/redirect/real/login" replace />
              )}
            </Route>
            <Route path="/redirect/real/dashboard">
              {isAuthenticated ? (
                <DashboardPage />
              ) : (
                <Redirect to="/redirect/real/login" replace />
              )}
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Route path="/protected">
  {isAuthenticated ? (
    <ProtectedPage />
  ) : (
    <Redirect to="/login" replace />
  )}
</Route>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Migration d'URL (redirection d'anciennes URLs)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Rediriger les anciennes URLs vers les nouvelles pour maintenir la
            compatibilité.
          </p>
        </Card>
        <Alert variant="warning" className="mb-4">
          <Switch>
            <Route path="/redirect/real/old-url">
              <Redirect to="/redirect/real/new-url" replace />
            </Route>
            <Route path="/redirect/real/old-users">
              <Redirect to="/redirect/real/users" replace />
            </Route>
            <Route path="/redirect/real/new-url">
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  ✅ Nouvelle URL
                </h3>
                <p className="text-[var(--color-text-light)]">
                  Cette est la nouvelle URL (ancienne : /old-url)
                </p>
              </Card>
            </Route>
            <Route path="/redirect/real/users">
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  ✅ Liste des utilisateurs
                </h3>
                <p className="text-[var(--color-text-light)]">
                  Cette est la nouvelle URL (ancienne : /old-users)
                </p>
              </Card>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`// Migration d'URL
<Route path="/old-url">
  <Redirect to="/new-url" replace />
</Route>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Redirection après action avec state
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Rediriger vers une page de succès avec des informations sur l'action
            effectuée.
          </p>
        </Card>
        <Alert variant="info" className="mb-4">
          <Switch>
            <Route path="/redirect/real/create">
              <CreatePage />
            </Route>
            <Route path="/redirect/real/success">
              <SuccessPage />
            </Route>
          </Switch>
        </Alert>
      </section>

      <nav className="mt-8 flex gap-2 flex-wrap">
        <Button
          variant="secondary"
          size="sm"
          asLink
          href="/redirect/real/protected"
        >
          Page protégée
        </Button>
        <Button variant="primary" size="sm" asLink href="/redirect/real/login">
          Login
        </Button>
        <Button variant="ghost" size="sm" asLink href="/redirect/real/old-url">
          Ancienne URL
        </Button>
        <Button variant="primary" size="sm" asLink href="/redirect/real/create">
          Créer
        </Button>
      </nav>
    </div>
  );
}

// Composants pour les exemples
function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
        Page de login
      </h3>
      <p className="text-[var(--color-text-light)] mb-4">
        Connectez-vous pour accéder aux pages protégées.
      </p>
      <Button variant="primary" size="md" onClick={onLogin}>
        Se connecter
      </Button>
    </Card>
  );
}

function ProtectedPage() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
        ✅ Page protégée
      </h3>
      <p className="text-[var(--color-text-light)]">
        Vous êtes authentifié et pouvez accéder à cette page.
      </p>
    </Card>
  );
}

function DashboardPage() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
        ✅ Dashboard
      </h3>
      <p className="text-[var(--color-text-light)]">Bienvenue sur votre dashboard.</p>
    </Card>
  );
}

function CreatePage() {
  const [, setLocation] = useLocation();

  const handleCreate = () => {
    // Simulation de création
    const itemId = Math.floor(Math.random() * 1000);
    setLocation("/redirect/real/success", {
      state: {
        action: "create",
        itemId,
        message: "Élément créé avec succès",
      },
    });
  };

  return (
    <Card>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
        Créer un élément
      </h3>
      <p className="text-[var(--color-text-light)] mb-4">
        Cliquez pour créer un nouvel élément.
      </p>
      <Button variant="primary" size="md" onClick={handleCreate}>
        Créer
      </Button>
    </Card>
  );
}

function SuccessPage() {
  const state = history.state as {
    action?: string;
    itemId?: number;
    message?: string;
  } | null;

  return (
    <Card>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">✅ Succès</h3>
      {state && (
        <Alert variant="success" className="mt-4">
          <p className="font-semibold mb-2">
            {state.message || "Action réussie"}
          </p>
          {state.itemId && (
            <p className="text-sm text-[var(--color-text-light)] mb-1">
              ID de l'élément :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                {state.itemId}
              </code>
            </p>
          )}
          {state.action && (
            <p className="text-sm text-[var(--color-text-light)]">
              Action :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                {state.action}
              </code>
            </p>
          )}
        </Alert>
      )}
    </Card>
  );
}

export default ExampleRedirectRealWorld;
