/**
 * EXEMPLE 4 : Cas d'usage réel - Dashboard avec Switch
 *
 * Exemple concret d'utilisation de Switch dans une application réelle.
 */
import { Route, Switch, Link, useLocation } from "wouter";
import { Card, Alert, Button } from "../../../components/ui";

function ExampleSwitchRealWorld() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 4 : Cas d'usage réel - Dashboard
      </h2>

      <Alert variant="info" className="mb-6">
        <p>
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
      </Alert>

      <div className="flex gap-8 mt-8">
        {/* Sidebar */}
        <aside className="w-52 bg-[var(--color-dark)] text-white p-6 rounded-md h-fit">
          <h3 className="text-xl font-bold mb-4">Dashboard</h3>
          <nav className="flex flex-col gap-2">
            <Link
              href="/switch/dashboard"
              className={(active) =>
                active
                  ? "bg-[var(--color-primary)] text-white px-3 py-2 rounded-md font-semibold"
                  : "text-white/90 px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/50 transition-colors"
              }
            >
              📊 Vue d'ensemble
            </Link>
            <Link
              href="/switch/dashboard/analytics"
              className={(active) =>
                active
                  ? "bg-[var(--color-primary)] text-white px-3 py-2 rounded-md font-semibold"
                  : "text-white/90 px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/50 transition-colors"
              }
            >
              📈 Analytics
            </Link>
            <Link
              href="/switch/dashboard/settings"
              className={(active) =>
                active
                  ? "bg-[var(--color-primary)] text-white px-3 py-2 rounded-md font-semibold"
                  : "text-white/90 px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/50 transition-colors"
              }
            >
              ⚙️ Paramètres
            </Link>
            <Link
              href="/switch/dashboard/users"
              className={(active) =>
                active
                  ? "bg-[var(--color-primary)] text-white px-3 py-2 rounded-md font-semibold"
                  : "text-white/90 px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/50 transition-colors"
              }
            >
              👥 Utilisateurs
            </Link>
          </nav>
        </aside>

        {/* Contenu principal avec Switch */}
        <main className="flex-1">
          <Switch>
            {/* Route exacte pour /dashboard */}
            <Route path="/switch/dashboard">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Vue d'ensemble
                </h3>
                <p className="text-[var(--color-text-light)] mb-6">
                  Bienvenue sur le dashboard principal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <Card>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">
                      Ventes
                    </h4>
                    <p className="text-3xl font-bold text-[var(--color-primary)]">€12,345</p>
                  </Card>
                  <Card>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">
                      Utilisateurs
                    </h4>
                    <p className="text-3xl font-bold text-[var(--color-primary)]">1,234</p>
                  </Card>
                  <Card>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">
                      Commandes
                    </h4>
                    <p className="text-3xl font-bold text-[var(--color-primary)]">567</p>
                  </Card>
                </div>
              </Card>
            </Route>

            {/* Route spécifique pour /dashboard/analytics (avant la route générique) */}
            <Route path="/switch/dashboard/analytics">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Analytics
                </h3>
                <p className="text-[var(--color-text-light)] mb-2">Page d'analytics dédiée.</p>
                <p className="text-green-700 text-sm font-semibold">
                  ✅ Cette route spécifique est atteinte pour
                  /switch/dashboard/analytics
                </p>
              </Card>
            </Route>

            {/* Route générique pour /dashboard/analytics/:period */}
            <Route path="/switch/dashboard/analytics/:period">
              {(params) => (
                <Card>
                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                    Analytics - Période : {params.period}
                  </h3>
                  <p className="text-[var(--color-text-light)] mb-2">
                    Vue analytics pour la période :{" "}
                    <strong className="font-semibold">{params.period}</strong>
                  </p>
                  <p className="text-green-700 text-sm font-semibold">
                    ✅ Cette route générique match
                    /switch/dashboard/analytics/week, /month, etc.
                  </p>
                </Card>
              )}
            </Route>

            {/* Route spécifique pour /dashboard/settings */}
            <Route path="/switch/dashboard/settings">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Paramètres
                </h3>
                <p className="text-[var(--color-text-light)]">Configuration du dashboard.</p>
              </Card>
            </Route>

            {/* Route spécifique pour /dashboard/users (avant la route générique) */}
            <Route path="/switch/dashboard/users">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Liste des utilisateurs
                </h3>
                <p className="text-[var(--color-text-light)] mb-4">Gestion des utilisateurs.</p>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
                  <li>
                    <Link
                      href="/switch/dashboard/users/1"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      User 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/switch/dashboard/users/2"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      User 2
                    </Link>
                  </li>
                </ul>
              </Card>
            </Route>

            {/* Route générique pour /dashboard/users/:id */}
            <Route path="/switch/dashboard/users/:id">
              {(params) => (
                <Card>
                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                    Détail utilisateur {params.id}
                  </h3>
                  <p className="text-[var(--color-text-light)] mb-4">
                    Informations de l'utilisateur {params.id}.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    asLink
                    href="/switch/dashboard/users"
                  >
                    ← Retour à la liste
                  </Button>
                </Card>
              )}
            </Route>

            {/* Route par défaut (404) - DOIT être en dernier */}
            <Route>
              <Card variant="outline" className="border-red-300 text-center">
                <h3 className="text-xl font-semibold text-red-700 mb-4">
                  404 - Page non trouvée
                </h3>
                <p className="text-[var(--color-text-light)] mb-4">
                  La route{" "}
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                    {location}
                  </code>{" "}
                  n'existe pas dans le dashboard.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  asLink
                  href="/switch/dashboard"
                >
                  Retour au dashboard
                </Button>
              </Card>
            </Route>
          </Switch>
        </main>
      </div>

      <Alert variant="info" className="mt-8">
        <h3 className="font-semibold mb-2 text-base">
          💡 Points clés de cet exemple :
        </h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            Routes spécifiques (
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /dashboard/analytics
            </code>
            ) avant routes génériques (
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /dashboard/analytics/:period
            </code>
            )
          </li>
          <li>
            Routes exactes (
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /dashboard/users
            </code>
            ) avant routes avec paramètres (
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /dashboard/users/:id
            </code>
            )
          </li>
          <li>
            Route par défaut (404) en dernier pour capturer toutes les routes
            non matchées
          </li>
          <li>
            Switch garantit qu'une seule route est rendue à la fois (pas de
            superposition)
          </li>
        </ul>
      </Alert>
    </div>
  );
}

export default ExampleSwitchRealWorld;
