import type { JSX } from "react";
import { Route, Router, Switch } from "wouter";
import HomeNoVersioning from "./HomeNoVersioning";
import VersionRouterV1 from "./v1/VersionRouterV1";
import VersionRouterV2 from "./v2/VersionRouterV2";
import VersionRouterV2_5 from "./v2_5/VersionRouterV2_5";
import VersionRouterV3 from "./v3/VersionRouterV3";

/**
 * VersionRouter - Aiguillage principal pour les différentes versions de l'application
 *
 * Ce composant agit comme un "hall d'entrée" qui distribue le trafic vers les différentes
 * versions isolées de l'application. Chaque version possède son propre routeur Wouter
 * avec un base path, garantissant une isolation complète.
 */
function VersionRouter(): JSX.Element {
  return (
    <Switch>
      {/* Page d'accueil statique - sélecteur de version */}
      {/* Cette route matche /version-demo exactement */}
      <Route path="/version-demo">
        <HomeNoVersioning />
      </Route>

      {/* Version 1 - Routeur isolé avec base="/v1" */}
      {/* Le wildcard /* capture tout ce qui suit /v1/ */}
      <Route path="/v1/*">
        <Router base="/v1">
          <VersionRouterV1 />
        </Router>
      </Route>

      {/* Version 2 - Routeur isolé avec base="/v2" */}
      <Route path="/v2/*">
        <Router base="/v2">
          <VersionRouterV2 />
        </Router>
      </Route>

      {/* Version 2.5 - Routeur isolé avec base="/v2.5" */}
      {/* Route pour /v2.5 exactement */}
      <Route path="/v2.5">
        <Router base="/v2.5">
          <VersionRouterV2_5 />
        </Router>
      </Route>
      {/* Route pour /v2.5/* (avec chemin supplémentaire) */}
      <Route path="/v2.5/*">
        <Router base="/v2.5">
          <VersionRouterV2_5 />
        </Router>
      </Route>

      {/* Version 3 - Routeur isolé avec base="/v3" */}
      {/* Route pour /v3 exactement */}
      <Route path="/v3">
        <Router base="/v3">
          <VersionRouterV3 />
        </Router>
      </Route>
      {/* Route pour /v3/* (avec chemin supplémentaire) */}
      <Route path="/v3/*">
        <Router base="/v3">
          <VersionRouterV3 />
        </Router>
      </Route>

      {/* Fallback 404 pour les routes de version non trouvées */}
      <Route>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Version non trouvée</h2>
          <p className="mb-4">
            La version demandée n'existe pas ou la route est incorrecte.
          </p>
          <a
            href="/version-demo"
            className="text-blue-600 hover:underline font-semibold"
          >
            Retour au sélecteur de version
          </a>
        </div>
      </Route>
    </Switch>
  );
}

export default VersionRouter;
