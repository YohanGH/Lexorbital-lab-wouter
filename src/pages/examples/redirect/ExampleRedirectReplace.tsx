/**
 * EXEMPLE 3 : Redirect avec replace
 *
 * Redirect avec replace remplace l'entrée dans l'historique au lieu d'en ajouter une nouvelle.
 * Utile pour éviter que l'utilisateur revienne à la page précédente.
 */
import { Redirect, Route, Switch, useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleRedirectReplace() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 3 : Redirect avec replace
      </h2>

      <Alert variant="warning" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="text-sm">
          <strong>Test :</strong> Naviguez vers une page avec replace, puis
          appuyez sur "Retour" dans le navigateur. Avec replace, vous ne
          reviendrez pas à la page précédente.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. Redirect normal (ajoute une entrée)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Par défaut,{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Redirect
            </code>{" "}
            ajoute une nouvelle entrée dans l'historique (comme{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              pushState
            </code>
            ).
          </p>
        </Card>
        <Alert variant="success" className="mb-4">
          <Switch>
            <Route path="/redirect/replace/normal-source">
              <div>
                <p className="mb-2">Page source (redirection normale)</p>
                <Redirect to="/redirect/replace/normal-destination" />
              </div>
            </Route>
            <Route path="/redirect/replace/normal-destination">
              <div>
                <p className="mb-2">✅ Page de destination</p>
                <p className="text-green-700 text-sm mb-2">
                  Une nouvelle entrée a été ajoutée à l'historique.
                </p>
                <p className="text-xs text-[var(--color-text-light)]">
                  Appuyez sur "Retour" pour revenir à la page source.
                </p>
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Redirect to="/destination" />
// Ajoute une entrée dans l'historique`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Redirect avec replace (remplace l'entrée)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              replace
            </code>
            , l'entrée actuelle est remplacée (comme{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              replaceState
            </code>
            ).
          </p>
        </Card>
        <Alert variant="error" className="mb-4">
          <Switch>
            <Route path="/redirect/replace/replace-source">
              <div>
                <p className="mb-2">Page source (redirection avec replace)</p>
                <Redirect to="/redirect/replace/replace-destination" replace />
              </div>
            </Route>
            <Route path="/redirect/replace/replace-destination">
              <div>
                <p className="mb-2">✅ Page de destination</p>
                <p className="text-red-700 text-sm mb-2">
                  L'entrée précédente a été remplacée dans l'historique.
                </p>
                <p className="text-xs text-[var(--color-text-light)]">
                  Appuyez sur "Retour" - vous ne reviendrez PAS à la page source
                  (elle a été remplacée).
                </p>
              </div>
            </Route>
          </Switch>
        </Alert>
        <CodeBlock language="jsx">
          {`<Redirect to="/destination" replace />
// Remplace l'entrée dans l'historique`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Comparaison visuelle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="outline" className="border-[#27ae60]">
            <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Redirect normal
            </h4>
            <p className="text-sm text-[var(--color-text-light)] mb-4">
              Ajoute une entrée dans l'historique
            </p>
            <Button
              variant="primary"
              size="sm"
              asLink
              href="/redirect/replace/normal-source"
            >
              Tester (normal)
            </Button>
          </Card>
          <Card variant="outline" className="border-[#e74c3c]">
            <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Redirect avec replace
            </h4>
            <p className="text-sm text-[var(--color-text-light)] mb-4">
              Remplace l'entrée dans l'historique
            </p>
            <Button
              variant="secondary"
              size="sm"
              asLink
              href="/redirect/replace/replace-source"
            >
              Tester (replace)
            </Button>
          </Card>
        </div>
      </section>

      <Alert variant="info">
        <p className="font-semibold mb-2">💡 Quand utiliser replace ?</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            Redirections après login (éviter de revenir à la page de login)
          </li>
          <li>Migration d'URL (rediriger les anciennes URLs)</li>
          <li>Nettoyage de l'historique après certaines actions</li>
        </ul>
      </Alert>
    </div>
  );
}

export default ExampleRedirectReplace;
