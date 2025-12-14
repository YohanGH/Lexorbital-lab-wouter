import type { JSX } from "react";
import { Link, Route, Switch } from "wouter";
import OverviewPage from "./pages/OverviewPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage";

/**
 * VersionRouterV3 - Routeur de la Version 3
 *
 * Version la plus récente avec architecture moderne.
 * Toutes les routes internes sont relatives au base path "/v3".
 */
function VersionRouterV3(): JSX.Element {
  return (
    <div
      style={{ border: "2px solid orange", padding: "20px", margin: "20px 0" }}
    >
      <header>
        <h1 className="text-2xl font-bold mb-4">Version 3 (Modern Design)</h1>
        <p className="text-gray-600 mb-4">
          Version la plus récente avec design moderne et nouvelles
          fonctionnalités
        </p>
      </header>

      <div className="flex gap-6 mt-6">
        {/* Modern Navigation */}
        <nav className="min-w-[240px] border-r-2 border-gray-200 pr-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/overview"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-orange-100 font-semibold text-orange-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-orange-600"
                }
              >
                📊 Overview
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-orange-100 font-semibold text-orange-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-orange-600"
                }
              >
                🚀 Projects
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={(active) =>
                  active
                    ? "block px-4 py-2 rounded bg-orange-100 font-semibold text-orange-700"
                    : "block px-4 py-2 rounded hover:bg-gray-100 transition-colors text-orange-600"
                }
              >
                👥 Team
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <Switch>
            <Route path="/overview">
              <OverviewPage />
            </Route>

            <Route path="/projects">
              <ProjectsPage />
            </Route>

            <Route path="/team">
              <TeamPage />
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

export default VersionRouterV3;
