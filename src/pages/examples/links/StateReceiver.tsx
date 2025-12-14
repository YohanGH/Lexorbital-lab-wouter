/**
 * Page de destination pour recevoir et afficher le state
 */
import { useLocation } from "wouter";
import { CodeBlock, Alert, Button } from "../../../components/ui";

function StateReceiver() {
  const [location] = useLocation();
  // history.state est synchrone, on peut le lire directement dans le render
  const state = history.state;

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        📥 Page de réception du state
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="font-semibold mb-2">State reçu :</p>
        {state ? (
          <CodeBlock language="json" className="mt-2">
            {JSON.stringify(state, null, 2)}
          </CodeBlock>
        ) : (
          <p className="text-red-600 mt-2">
            ❌ Aucun state reçu. Naviguez depuis la page "replace & state" avec
            un lien qui contient un state.
          </p>
        )}
      </Alert>

      <Alert variant="warning" className="mb-6">
        <h3 className="font-semibold mb-2 text-base">💡 Comment ça marche ?</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>
            Depuis la page "replace & state", cliquez sur un lien avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              state
            </code>
          </li>
          <li>
            Le state est stocké dans{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              history.state
            </code>
          </li>
          <li>
            Cette page récupère le state via{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              history.state
            </code>
          </li>
          <li>
            Vous pouvez utiliser ces données pour des animations, modals, etc.
          </li>
        </ol>
      </Alert>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          Exemples d'utilisation du state :
        </h3>
        {state && state.animate && (
          <Alert variant="success" className="mt-4">
            ✨ Animation activée grâce au state !
          </Alert>
        )}
        {state?.modal && (
          <Alert variant="info" className="mt-4">
            🪟 Modal "{state.modal}" devrait s'ouvrir (source: {state.source})
          </Alert>
        )}
        {state?.from && (
          <Alert variant="error" className="mt-4">
            <p>
              📍 Navigation depuis : {state.from}
              {state.timestamp && (
                <span className="text-sm text-[var(--color-text-light)] ml-2">
                  (à {new Date(state.timestamp).toLocaleTimeString()})
                </span>
              )}
            </p>
          </Alert>
        )}
      </div>

      <div className="mt-8">
        <Button variant="primary" size="md" asLink href="/links/example-2">
          ← Retour à l'exemple replace & state
        </Button>
      </div>
    </div>
  );
}

export default StateReceiver;
