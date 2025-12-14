import type { JSX } from "react";
import { Link, Route, Switch } from "wouter";
import DashboardPage from "./pages/DashboardPage";
import ReportsPage from "./pages/ReportsPage";
import HomePage from "./pages/HomePage";

/**
 * VersionRouterV2_5 - Routeur de la Version 2.5
 *
 * Version intermédiaire avec améliorations par rapport à V2.
 * Toutes les routes internes sont relatives au base path "/v2.5".
 */
function VersionRouterV2_5(): JSX.Element {
  return (
    <div
      style={{ border: "2px solid purple", padding: "20px", margin: "20px 0" }}
    >
      <header>
        <h1 className="text-2xl font-bold mb-4">
          Version 2.5 (Enhanced Sidebar)
        </h1>
        <p className="text-gray-600 mb-4">
          Version améliorée avec nouvelles fonctionnalités
        </p>
      </header>

      <div className="flex gap-6 mt-6">
        {/* Enhanced Sidebar */}
        <nav className="min-w-[220px] border-r-2 border-gray-200 pr-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-purple-100 font-semibold text-purple-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-purple-600"
                }
              >
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-purple-100 font-semibold text-purple-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-purple-600"
                }
              >
                📄 Reports
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>

            <Route path="/reports">
              <ReportsPage />
            </Route>

            <Route>
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default VersionRouterV2_5;
