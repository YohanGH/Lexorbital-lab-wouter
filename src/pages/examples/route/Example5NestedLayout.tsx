/**
 * EXEMPLE 5 : Layout pour routes imbriquées
 * Ce composant sert de layout pour les routes imbriquées sous /app
 */
import { Route } from "wouter";
import { useLocation } from "wouter";
import { Card, Alert, Button } from "../../../components/ui";

function Example5NestedLayout() {
  const [location] = useLocation();

  return (
    <Card variant="outline" className="mb-6">
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
        Layout pour routes imbriquées (/app)
      </h2>
      <Alert variant="info" className="mb-4">
        <p>
          Location actuelle :{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="text-sm mt-2">
          Dans un contexte imbriqué, useLocation() retourne le chemin relatif.
        </p>
      </Alert>

      <nav className="mt-4 p-2 bg-[var(--color-background)] rounded-md flex gap-2 flex-wrap items-center">
        <Button variant="ghost" size="sm" asLink href="/app/users/1">
          User 1
        </Button>
        <span className="text-[var(--color-text-light)]">|</span>
        <Button variant="ghost" size="sm" asLink href="/app/users/2">
          User 2
        </Button>
        <span className="text-[var(--color-text-light)]">|</span>
        <Button variant="ghost" size="sm" asLink href="/app/settings">
          Settings
        </Button>
        <span className="text-[var(--color-text-light)]">|</span>
        <Button variant="ghost" size="sm" asLink href="~/home">
          Home (absolu avec ~)
        </Button>
      </nav>

      <Card className="mt-4">
        {/* Routes imbriquées - elles matchent relativement à /app */}
        <Route path="/users/:id">
          {(params) => (
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                Page User {params.id}
              </h3>
              <p className="text-[var(--color-text-light)] mb-1">
                Cette route match : /app/users/{params.id}
              </p>
              <p className="text-[var(--color-text-light)]">
                Mais useLocation() retourne : /users/{params.id} (relatif)
              </p>
            </div>
          )}
        </Route>

        <Route path="/settings">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              Settings Page
            </h3>
            <p className="text-[var(--color-text-light)] mb-1">
              Cette route match : /app/settings
            </p>
            <p className="text-[var(--color-text-light)]">
              Mais useLocation() retourne : /settings (relatif)
            </p>
          </div>
        </Route>

        {/* Route par défaut pour /app */}
        <Route>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              App Dashboard
            </h3>
            <p className="text-[var(--color-text-light)] mb-1">
              Bienvenue dans la section /app
            </p>
            <p className="text-[var(--color-text-light)]">
              Naviguez vers /users/:id ou /settings
            </p>
          </div>
        </Route>
      </Card>
    </Card>
  );
}

export default Example5NestedLayout;
