import type { JSX } from "react";
import { Link, Route, Switch } from "wouter";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import HomePage from "./pages/HomePage";

/**
 * VersionRouterV2 - Routeur de la Version 2
 *
 * Cette version utilise un layout avec sidebar (navigation latérale).
 * Toutes les routes internes sont relatives au base path "/v2".
 */
function VersionRouterV2(): JSX.Element {
  return (
    <div
      style={{ border: "2px solid blue", padding: "20px", margin: "20px 0" }}
    >
      <header>
        <h1 className="text-2xl font-bold mb-4">Version 2 (Sidebar Style)</h1>
      </header>

      <div className="flex gap-6 mt-6">
        {/* Sidebar Navigation */}
        <nav className="min-w-[200px] border-r-2 border-gray-200 pr-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-blue-100 font-semibold text-blue-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-blue-600"
                }
              >
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-blue-100 font-semibold text-blue-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-blue-600"
                }
              >
                👤 Profile
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-blue-100 font-semibold text-blue-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-blue-600"
                }
              >
                📈 Analytics
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1">
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>

            <Route path="/profile">
              <ProfilePage />
            </Route>

            <Route path="/analytics">
              <AnalyticsPage />
            </Route>

            {/* Route par défaut */}
            <Route>
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default VersionRouterV2;
