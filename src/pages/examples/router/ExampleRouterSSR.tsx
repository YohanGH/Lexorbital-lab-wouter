/**
 * EXEMPLE 4 : Router avec SSR (Server-Side Rendering)
 *
 * ssrPath et ssrSearch permettent de rendre l'app côté serveur
 * avec la bonne location initiale.
 */
import { Router, useLocation } from "wouter";
import { useState } from "react";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRouterSSR() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 4 : Router avec SSR
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          <strong>SSR :</strong> Server-Side Rendering permet de rendre l'app
          côté serveur avec la bonne location.
        </p>
        <p className="text-sm">
          Dans cet exemple, on simule un rendu SSR avec des valeurs de path et
          search.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Router avec ssrPath et ssrSearch
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              ssrPath
            </code>{" "}
            et{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              ssrSearch
            </code>{" "}
            permettent de définir la location initiale pour le SSR.
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Router
            ssrPath="/router/example-4/users/123"
            ssrSearch="tab=profile&view=details"
          >
            <SSRExample />
          </Router>
        </Alert>
        <CodeBlock language="jsx">
          {`// Côté serveur
const path = request.path; // "/users/123"
const search = request.search; // "?tab=profile&view=details"

<Router ssrPath={path} ssrSearch={search}>
  {/* Votre app */}
</Router>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Cas d'usage : SSR
        </h3>
        <Alert variant="warning">
          <p className="font-semibold mb-2">Quand utiliser SSR ?</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <strong className="font-semibold">SEO :</strong> Rendre le contenu
              côté serveur pour les moteurs de recherche
            </li>
            <li>
              <strong className="font-semibold">Performance initiale :</strong>{" "}
              Afficher le contenu plus rapidement
            </li>
            <li>
              <strong className="font-semibold">Social sharing :</strong> Les
              meta tags sont correctement rendus
            </li>
            <li>
              <strong className="font-semibold">Accessibilité :</strong> Le
              contenu est disponible même sans JavaScript
            </li>
          </ul>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Exemple complet SSR
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Simulation d'un rendu SSR avec différents chemins et paramètres de
            recherche.
          </p>
        </Card>
        <Alert variant="info" className="mb-4">
          <SSRSimulationExample />
        </Alert>
      </section>
    </div>
  );
}

// Composant pour l'exemple SSR
function SSRExample() {
  const [location] = useLocation();

  return (
    <div>
      <Card>
        <p className="mb-2">
          <strong>Location (ssrPath) :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {location}
          </code>
        </p>
        <p className="mb-2">
          <strong>Search (ssrSearch) :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {window.location.search || "aucun"}
          </code>
        </p>
        <p className="text-sm text-[var(--color-text-light)]">
          Cette location a été définie via ssrPath et ssrSearch.
        </p>
      </Card>
    </div>
  );
}

// Composant pour la simulation SSR
function SSRSimulationExample() {
  const [ssrPath, setSsrPath] = useState("/router/example-4/users/123");
  const [ssrSearch, setSsrSearch] = useState("tab=profile&view=details");

  return (
    <div>
      <Card className="mb-4">
        <p className="text-[var(--color-text-light)] mb-4">
          Simulez différents chemins SSR :
        </p>
        <div className="flex gap-2 flex-wrap mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSsrPath("/router/example-4/users/123");
              setSsrSearch("tab=profile");
            }}
          >
            User 123
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSsrPath("/router/example-4/products/456");
              setSsrSearch("category=electronics");
            }}
          >
            Product 456
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSsrPath("/router/example-4/dashboard");
              setSsrSearch("");
            }}
          >
            Dashboard
          </Button>
        </div>
      </Card>
      <Router ssrPath={ssrPath} ssrSearch={ssrSearch}>
        <SSRExample />
      </Router>
    </div>
  );
}

export default ExampleRouterSSR;
