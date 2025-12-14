import type { JSX } from "react";
import { Link, Route, Switch } from "wouter";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HomePage from "./pages/HomePage";

/**
 * VersionRouterV1 - Routeur de la Version 1
 *
 * Cette version utilise un layout simple avec navigation horizontale.
 * Toutes les routes internes sont relatives au base path "/v1".
 */
function VersionRouterV1(): JSX.Element {
  return (
    <div
      style={{ border: "2px solid green", padding: "20px", margin: "20px 0" }}
    >
      <header>
        <h1 className="text-2xl font-bold mb-4">
          Version 1 (Horizontal Navigation)
        </h1>
        <nav className="flex gap-4 mb-6 pb-4 border-b-2 border-gray-200">
          {/* Les liens sont automatiquement préfixés avec /v1 grâce au Router base */}
          <Link
            href="/dashboard"
            className={(active) =>
              active
                ? "px-4 py-2 rounded bg-green-200 font-semibold"
                : "px-4 py-2 rounded hover:bg-green-50 transition-colors"
            }
          >
            📊 Dashboard
          </Link>
          <Link
            href="/profile"
            className={(active) =>
              active
                ? "px-4 py-2 rounded bg-green-200 font-semibold"
                : "px-4 py-2 rounded hover:bg-green-50 transition-colors"
            }
          >
            👤 Profile
          </Link>
          <Link
            href="/settings"
            className={(active) =>
              active
                ? "px-4 py-2 rounded bg-green-200 font-semibold"
                : "px-4 py-2 rounded hover:bg-green-50 transition-colors"
            }
          >
            ⚙️ Settings
          </Link>
        </nav>
      </header>

      <main>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/settings">
            <SettingsPage />
          </Route>

          {/* Route par défaut - affichée quand aucune route ne match */}
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default VersionRouterV1;
