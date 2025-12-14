/**
 * EXEMPLE 2 : Options du location hook (replace, state)
 *
 * - replace : remplace l'entrée dans l'historique au lieu d'en ajouter une nouvelle
 * - state : passe un état personnalisé à history.state
 */
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleLinkReplace() {
  const [location] = useLocation();

  // Afficher l'état de l'historique si disponible
  useEffect(() => {
    if (history.state) {
      console.log("History state:", history.state);
    }
  }, [location]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 2 : Options replace et state
      </h2>

      <Alert variant="warning" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="mb-2">
          <strong>History state :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {history.state ? JSON.stringify(history.state) : "null"}
          </code>
        </p>
        <p className="text-sm">
          Ouvrez la console pour voir l'état de l'historique lors de la
          navigation.
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. replace : remplacer l'entrée dans l'historique
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Par défaut,{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Link
            </code>{" "}
            ajoute une nouvelle entrée dans l'historique (comme{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              pushState
            </code>
            ).
          </p>
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
        <Alert variant="info" className="mb-4">
          <p className="font-semibold mb-2">Test :</p>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Cliquez sur "Navigation normale" (ajoute une entrée)</li>
            <li>Cliquez sur "Navigation avec replace" (remplace l'entrée)</li>
            <li>Appuyez sur "Retour" dans le navigateur</li>
            <li>
              Avec replace, vous ne reviendrez pas à la page précédente (elle a
              été remplacée)
            </li>
          </ol>
        </Alert>
        <div className="flex gap-2 mt-4">
          <Button variant="primary" size="sm" asLink href="/example-1">
            Navigation normale (push)
          </Button>
          <Link href="/example-2/active" replace>
            <Button variant="secondary" size="sm">
              Navigation avec replace
            </Button>
          </Link>
        </div>
        <CodeBlock language="jsx" className="mt-4">
          {`// Navigation normale (ajoute une entrée)
<Link href="/example-1">Navigation normale</Link>

// Navigation avec replace (remplace l'entrée)
<Link href="/example-2/active" replace>
  Navigation avec replace
</Link>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. state : passer un état personnalisé
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Vous pouvez passer un objet{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              state
            </code>{" "}
            qui sera stocké dans{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              history.state
            </code>
            .
          </p>
          <p className="text-[var(--color-text-light)]">
            Utile pour passer des données entre les pages sans les mettre dans
            l'URL.
          </p>
        </Card>
        <div className="flex gap-2 mt-4 flex-wrap">
          <Link
            href="/links/state-receiver"
            state={{
              from: "ExampleLinkReplace",
              timestamp: new Date().getTime(),
              animate: true,
            }}
          >
            <Button variant="primary" size="sm">
              Navigation avec state (animate: true) →
            </Button>
          </Link>
          <Link
            href="/links/state-receiver"
            state={{ modal: "promo", source: "banner" }}
          >
            <Button variant="secondary" size="sm">
              Navigation avec state (modal) →
            </Button>
          </Link>
        </div>
        <CodeBlock language="jsx" className="mt-4">
          {`<Link 
  href="/example-3/123/john"
  state={{ from: "ExampleLinkReplace", animate: true }}
>
  Navigation avec state
</Link>

// Dans la page de destination, accédez à l'état via :
// history.state`}
        </CodeBlock>
        <Alert variant="info" className="mt-4">
          <p className="font-semibold mb-2">💡 Cas d'usage :</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Passer des données de transition (animation, modal, etc.)</li>
            <li>Tracker la source de navigation</li>
            <li>Passer des données temporaires sans polluer l'URL</li>
          </ul>
        </Alert>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Combinaison replace + state
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Vous pouvez combiner les deux options :
          </p>
          <Link
            href="/home"
            replace
            state={{ replaced: true, reason: "cleanup" }}
          >
            <Button variant="primary" size="sm">
              Replace + State
            </Button>
          </Link>
        </Card>
        <CodeBlock language="jsx">
          {`<Link 
  href="/home"
  replace
  state={{ replaced: true, reason: "cleanup" }}
>
  Replace + State
</Link>`}
        </CodeBlock>
      </section>
    </div>
  );
}

export default ExampleLinkReplace;
