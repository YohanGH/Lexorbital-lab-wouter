/**
 * CAS MÉTIER 1 : Dashboard Admin
 *
 * Scénario : Une application admin avec plusieurs sections
 * - /admin/dashboard (vue d'ensemble)
 * - /admin/users (liste des utilisateurs)
 * - /admin/users/:id (détail d'un utilisateur)
 * - /admin/products (liste des produits)
 * - /admin/products/:id (détail d'un produit)
 * - /admin/settings (paramètres)
 *
 * AVANTAGE du nesting :
 * - Le layout admin (sidebar, header) est partagé
 * - Les routes enfants sont isolées (plus facile à maintenir)
 * - useLocation() retourne le chemin relatif dans chaque section
 */
import { Route, Link, useLocation } from "wouter";
import { Card, Alert, Button } from "../../components/ui";

function AdminDashboard() {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - toujours visible dans /admin */}
      <aside className="w-64 bg-[var(--color-dark)] text-white p-8">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link
            href="/admin/dashboard"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            📊 Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            👥 Users
          </Link>
          <Link
            href="/admin/products"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            📦 Products
          </Link>
          <Link
            href="/admin/settings"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            ⚙️ Settings
          </Link>
          {/* Lien vers la page publique (absolu avec ~) */}
          <Link
            href="~/home"
            className="text-[var(--color-text-light)] no-underline mt-8 hover:text-[var(--color-primary)] transition-colors"
          >
            ← Retour au site public
          </Link>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-8">
        <Alert variant="info" className="mb-6">
          <p className="mb-2">
            <strong>Location actuelle (relatif) :</strong>{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
              {location}
            </code>
          </p>
          <p className="text-sm">
            Dans le contexte /admin, useLocation() retourne le chemin relatif
            (ex: /users au lieu de /admin/users)
          </p>
        </Alert>

        {/* Routes imbriquées - matchent relativement à /admin */}
        <Route path="/dashboard">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Dashboard Admin
            </h1>
            <p className="text-[var(--color-text-light)] mb-2">
              Vue d'ensemble de l'administration
            </p>
            <p className="text-[var(--color-text-light)]">
              Statistiques, graphiques, etc.
            </p>
          </Card>
        </Route>

        <Route path="/users">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Liste des utilisateurs
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
              <li>
                <Link
                  href="/admin/users/1"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  User 1
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users/2"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  User 2
                </Link>
              </li>
            </ul>
          </Card>
        </Route>

        <Route path="/users/:id">
          {(params) => (
            <Card>
              <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                Détail utilisateur {params.id}
              </h1>
              <p className="text-[var(--color-text-light)] mb-2">
                Cette route match :{" "}
                <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                  /admin/users/{params.id}
                </code>
              </p>
              <p className="text-[var(--color-text-light)] mb-4">
                Mais useLocation() retourne :{" "}
                <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                  /users/{params.id}
                </code>{" "}
                (relatif)
              </p>
              <Button variant="ghost" size="sm" asLink href="/admin/users">
                ← Retour à la liste
              </Button>
            </Card>
          )}
        </Route>

        <Route path="/products">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Liste des produits
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
              <li>
                <Link
                  href="/admin/products/laptop"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Laptop
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/products/phone"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Phone
                </Link>
              </li>
            </ul>
          </Card>
        </Route>

        <Route path="/products/:id">
          {(params) => (
            <Card>
              <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                Détail produit : {params.id}
              </h1>
              <Button variant="ghost" size="sm" asLink href="/admin/products">
                ← Retour à la liste
              </Button>
            </Card>
          )}
        </Route>

        <Route path="/settings">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Paramètres Admin
            </h1>
            <p className="text-[var(--color-text-light)]">
              Configuration de l'application
            </p>
          </Card>
        </Route>

        {/* Route par défaut pour /admin */}
        <Route>
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Bienvenue dans l'admin
            </h1>
            <p className="text-[var(--color-text-light)]">
              Naviguez vers une section dans la sidebar
            </p>
          </Card>
        </Route>
      </main>
    </div>
  );
}

export default AdminDashboard;
