/**
 * EXEMPLE 1 : Utilisation basique de Link
 *
 * - href vs to (alias)
 * - Props standard d'<a> proxied
 */
import { useLocation } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleLinkBasic() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 1 : Utilisation basique de Link
      </h2>

      <Alert variant="info" className="mb-6">
        <p>
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. href vs to (alias)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              href
            </code>{" "}
            et{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              to
            </code>{" "}
            sont équivalents. Utilisez celui que vous préférez.
          </p>
          <div className="flex gap-2 mt-4">
            <Button variant="primary" size="sm" asLink href="/example-1">
              Avec href
            </Button>
            <Button variant="primary" size="sm" asLink href="/example-2/active">
              Avec to
            </Button>
          </div>
        </Card>
        <CodeBlock language="jsx">
          {`<Link href="/example-1">Avec href</Link>
<Link to="/example-2/active">Avec to</Link>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Props standard d'&lt;a&gt; proxied
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-3">
            Toutes les props standard d'un élément{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              &lt;a&gt;
            </code>{" "}
            sont supportées :
          </p>
          <ul className="list-disc list-inside space-y-1 text-[var(--color-text-light)] text-sm">
            <li>
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                className
              </code>{" "}
              - pour le style CSS
            </li>
            <li>
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                aria-label
              </code>{" "}
              - pour l'accessibilité
            </li>
            <li>
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                target
              </code>{" "}
              - pour ouvrir dans un nouvel onglet
            </li>
            <li>
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                rel
              </code>{" "}
              - pour les relations
            </li>
            <li>Et toutes les autres props HTML standard</li>
          </ul>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Button variant="secondary" size="sm" asLink href="/home">
              Avec className et aria-label
            </Button>
            <a
              href="https://github.com/molefrog/wouter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary" size="sm">
                Lien externe (nouvel onglet)
              </Button>
            </a>
            <Button variant="ghost" size="sm" asLink href="/example-3/123/john">
              Avec title (tooltip)
            </Button>
          </div>
        </Card>
        <CodeBlock language="jsx">
          {`<Link 
  href="/home"
  className="custom-link"
  aria-label="Aller à la page d'accueil"
>
  Accueil
</Link>

<Link 
  href="https://github.com/molefrog/wouter"
  target="_blank"
  rel="noopener noreferrer"
>
  Documentation
</Link>`}
        </CodeBlock>
      </section>
    </div>
  );
}

export default ExampleLinkBasic;
