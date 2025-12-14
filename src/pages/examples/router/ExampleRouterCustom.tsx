/**
 * EXEMPLE 5 : Router avec options avancées
 *
 * Exemples de parser personnalisé, hrefs personnalisé, et autres options avancées.
 */
import { Router, Route, Switch, useLocation, useRouter } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRouterCustom() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 5 : Router avec options avancées
      </h2>

      <Alert variant="info" className="mb-6">
        <p>
          <strong>Options avancées :</strong> parser, hrefs, et autres
          configurations personnalisées.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Parser personnalisé
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              parser
            </code>{" "}
            permet de personnaliser la façon dont les patterns de routes sont
            parsés.
          </p>
          <p className="text-[var(--color-text-light)] mb-2">
            Par défaut, Wouter utilise{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              regexparam
            </code>{" "}
            pour parser les patterns de routes.
          </p>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Note :</strong> Le parser par
            défaut (regexparam) est déjà utilisé par Wouter.
          </p>
          <p className="text-[var(--color-text-light)]">
            Pour créer un parser personnalisé, vous devez implémenter une
            fonction qui prend un pattern et retourne un objet avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              pattern
            </code>{" "}
            (RegExp) et{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              keys
            </code>{" "}
            (tableau de clés).
          </p>
        </Card>
        <CodeBlock language="jsx" className="mb-4">
          {`// Exemple de parser personnalisé (simplifié)
const customParser = (path: string) => {
  // Convertir /users/:id en RegExp
  const pattern = path.replace(/:([^/]+)/g, "([^/]+)");
  const keys: string[] = [];
  path.replace(/:([^/]+)/g, (_, key) => {
    keys.push(key);
    return "";
  });
  
  return {
    pattern: new RegExp(\`^\${pattern}$\`),
    keys,
  };
};

<Router parser={customParser}>
  {/* Votre app */}
</Router>`}
        </CodeBlock>
        <Alert variant="warning">
          <p className="text-sm">
            <strong className="font-semibold">💡 Dans la pratique :</strong>{" "}
            Vous n'avez généralement pas besoin de créer un parser personnalisé.
            Le parser par défaut (regexparam) gère tous les cas d'usage
            courants.
          </p>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. hrefs personnalisé
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              hrefs
            </code>{" "}
            permet de transformer les attributs{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              href
            </code>{" "}
            des liens.
          </p>
          <p className="text-[var(--color-text-light)]">
            Utile pour le hash-based routing ou d'autres transformations d'URL.
          </p>
        </Card>
        <Alert variant="warning" className="mb-4">
          <Router
            hrefs={(href) => {
              // Transformer tous les hrefs pour ajouter un préfixe
              if (href.startsWith("/router/example-5")) {
                return href;
              }
              return `/router/example-5${href}`;
            }}
          >
            <CustomHrefsExample />
          </Router>
        </Alert>
        <CodeBlock language="jsx">
          {`<Router
  hrefs={(href) => {
    // Transformer les hrefs
    return href.startsWith("/") ? "#" + href : href;
  }}
>
  {/* Votre app */}
</Router>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Accéder au router avec useRouter
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              useRouter
            </code>{" "}
            permet d'accéder à l'objet router et à ses options.
          </p>
        </Card>
        <Alert variant="info" className="mb-4">
          <Router base="/router/example-5/app">
            <RouterInfoExample />
          </Router>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          4. Combinaison de plusieurs options
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Vous pouvez combiner plusieurs options pour créer une configuration
            personnalisée.
          </p>
        </Card>
        <Card className="mb-4">
          <Router
            base="/router/example-5/combined"
            {...({
              aroundNav: (
                navigate: (
                  to: string,
                  options?: { replace?: boolean; state?: unknown }
                ) => void,
                to: string,
                options?: { replace?: boolean; state?: unknown }
              ) => {
                console.log("Navigation combinée:", to);
                navigate(to, options);
              },
            } as unknown as {
              aroundNav: (
                navigate: (
                  to: string,
                  options?: { replace?: boolean; state?: unknown }
                ) => void,
                to: string,
                options?: { replace?: boolean; state?: unknown }
              ) => void;
            })}
          >
            <CombinedOptionsExample />
          </Router>
        </Card>
        <CodeBlock language="jsx">
          {`<Router
  base="/app"
  hook={useHashLocation}
  aroundNav={(navigate, to) => {
    console.log("Navigation:", to);
    navigate(to);
  }}
>
  {/* Votre app */}
</Router>`}
        </CodeBlock>
      </section>
    </div>
  );
}

// Composant pour l'exemple hrefs personnalisé
function CustomHrefsExample() {
  const [location] = useLocation();

  return (
    <div>
      <Alert variant="warning" className="mb-4">
        <p className="mb-2">
          <strong>Location :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {location}
          </code>
        </p>
        <p className="text-sm">
          Les hrefs sont automatiquement préfixés avec /router/example-5
        </p>
      </Alert>

      <nav className="flex gap-2 mb-4">
        <Button variant="primary" size="sm" asLink href="/page1">
          Page 1 (href transformé)
        </Button>
        <Button variant="secondary" size="sm" asLink href="/page2">
          Page 2 (href transformé)
        </Button>
      </nav>

      <Switch>
        <Route path="/router/example-5/page1">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Page 1
            </h3>
            <p className="text-[var(--color-text-light)]">
              Le href a été transformé par la fonction hrefs.
            </p>
          </Card>
        </Route>
        <Route path="/router/example-5/page2">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Page 2
            </h3>
            <p className="text-[var(--color-text-light)]">
              Le href a été transformé par la fonction hrefs.
            </p>
          </Card>
        </Route>
      </Switch>
    </div>
  );
}

// Composant pour afficher les infos du router
function RouterInfoExample() {
  const router = useRouter();
  const [location] = useLocation();

  return (
    <div>
      <Card className="mb-4">
        <h4 className="font-semibold text-[var(--color-text)] mb-4">
          Informations du Router (via useRouter)
        </h4>
        <CodeBlock language="json">
          {JSON.stringify(
            {
              base: router.base,
              hook: router.hook?.name || "useBrowserLocation",
              hasParser: !!router.parser,
              hasHrefs: !!router.hrefs,
              hasAroundNav: !!(router as { aroundNav?: unknown }).aroundNav,
            },
            null,
            2
          )}
        </CodeBlock>
        <p className="mt-4 text-sm text-[var(--color-text-light)]">
          Location actuelle :{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {location}
          </code>
        </p>
      </Card>

      <nav className="flex gap-2 mb-4">
        <Button variant="primary" size="sm" asLink href="/dashboard">
          Dashboard
        </Button>
        <Button variant="secondary" size="sm" asLink href="/settings">
          Settings
        </Button>
      </nav>

      <Switch>
        <Route path="/router/example-5/app/dashboard">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Dashboard
            </h3>
            <p className="text-[var(--color-text-light)]">
              Route relative au base path : {router.base}
            </p>
          </Card>
        </Route>
        <Route path="/router/example-5/app/settings">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Settings
            </h3>
            <p className="text-[var(--color-text-light)]">
              Route relative au base path : {router.base}
            </p>
          </Card>
        </Route>
      </Switch>
    </div>
  );
}

// Composant pour l'exemple combiné
function CombinedOptionsExample() {
  const [location] = useLocation();
  const router = useRouter();

  return (
    <div>
      <Alert variant="info" className="mb-4">
        <p className="mb-2">
          <strong>Location :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {location}
          </code>
        </p>
        <p className="mb-2">
          <strong>Base :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            {router.base}
          </code>
        </p>
        <p className="text-sm">
          💡 <strong className="font-semibold">Astuce :</strong> Ouvrez la
          console du navigateur (F12 ou Cmd+Option+I) → onglet{" "}
          <strong className="font-semibold">"Console"</strong> pour voir les
          logs de navigation (aroundNav).
        </p>
      </Alert>

      <nav className="flex gap-2 mb-4">
        <Button variant="primary" size="sm" asLink href="/page1">
          Page 1
        </Button>
        <Button variant="secondary" size="sm" asLink href="/page2">
          Page 2
        </Button>
      </nav>

      <Switch>
        <Route path="/router/example-5/combined/page1">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Page 1
            </h3>
            <p className="text-[var(--color-text-light)]">
              Configuration combinée : base + aroundNav
            </p>
          </Card>
        </Route>
        <Route path="/router/example-5/combined/page2">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              ✅ Page 2
            </h3>
            <p className="text-[var(--color-text-light)]">
              Configuration combinée : base + aroundNav
            </p>
          </Card>
        </Route>
      </Switch>
    </div>
  );
}

export default ExampleRouterCustom;
