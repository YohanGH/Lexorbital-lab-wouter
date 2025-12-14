/**
 * EXEMPLE 4 : className comme fonction pour les liens actifs
 *
 * Quand vous passez une fonction à className, elle reçoit un booléen
 * indiquant si le lien est actif pour la route actuelle.
 * Utile pour styler les liens actifs dans un menu de navigation.
 */
import { Link, useLocation, useRoute } from "wouter";
import { Card, CodeBlock, Alert, Button } from "../../../components/ui";

function ExampleLinkActive() {
  const [location] = useLocation();
  const [isHomeActive] = useRoute("/home");
  const [isExample1Active] = useRoute("/example-1");

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 4 : Liens actifs avec className fonction
      </h2>

      <Alert variant="info" className="mb-6">
        <p className="mb-2">
          <strong>Location actuelle :</strong>{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
            {location}
          </code>
        </p>
        <p className="mb-2">
          <strong>Home active :</strong> {isHomeActive ? "✅ Oui" : "❌ Non"}
        </p>
        <p>
          <strong>Example-1 active :</strong>{" "}
          {isExample1Active ? "✅ Oui" : "❌ Non"}
        </p>
      </Alert>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          1. className comme fonction
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Passez une fonction à{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              className
            </code>{" "}
            qui reçoit un booléen indiquant si le lien est actif.
          </p>
        </Card>
        <nav className="flex gap-2 p-4 bg-[var(--color-background)] rounded-md mt-4">
          <Link
            href="/home"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-3 py-2 rounded-md"
                : "bg-transparent text-[var(--color-text)] px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/10"
            }
          >
            Home
          </Link>
          <Link
            href="/example-1"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-3 py-2 rounded-md"
                : "bg-transparent text-[var(--color-text)] px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/10"
            }
          >
            Example 1
          </Link>
          <Link
            href="/example-2/active"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-3 py-2 rounded-md"
                : "bg-transparent text-[var(--color-text)] px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/10"
            }
          >
            Example 2
          </Link>
          <Link
            href="/example-3/123/john"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-3 py-2 rounded-md"
                : "bg-transparent text-[var(--color-text)] px-3 py-2 rounded-md hover:bg-[var(--color-dark)]/10"
            }
          >
            Example 3
          </Link>
        </nav>
        <CodeBlock language="jsx" className="mt-4">
          {`<Link 
  href="/home"
  className={(active) => active ? "active-link" : "inactive-link"}
>
  Home
</Link>

// OU utiliser useRoute pour le style conditionnel :
const [isHomeActive] = useRoute("/home");

<Link 
  href="/home"
  className={(active) => active ? "active-link" : "inactive-link"}
>
  Home
</Link>`}
        </CodeBlock>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Exemple avec menu de navigation
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Cas d'usage réel : menu de navigation avec liens actifs stylisés.
          </p>
        </Card>
        <nav className="flex flex-col gap-2 p-4 bg-[var(--color-dark)] rounded-md mt-4 w-64">
          <Link
            href="/home"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-4 py-3 rounded-md border-l-4 border-[var(--color-primary)]"
                : "bg-transparent text-white/90 px-4 py-3 rounded-md border-l-4 border-transparent hover:bg-[var(--color-dark)]/50"
            }
          >
            🏠 Accueil
          </Link>
          <Link
            href="/example-1"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-4 py-3 rounded-md border-l-4 border-[var(--color-primary)]"
                : "bg-transparent text-white/90 px-4 py-3 rounded-md border-l-4 border-transparent hover:bg-[var(--color-dark)]/50"
            }
          >
            📝 Exemple 1
          </Link>
          <Link
            href="/example-2/active"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-4 py-3 rounded-md border-l-4 border-[var(--color-primary)]"
                : "bg-transparent text-white/90 px-4 py-3 rounded-md border-l-4 border-transparent hover:bg-[var(--color-dark)]/50"
            }
          >
            📊 Exemple 2
          </Link>
          <Link
            href="/example-3/123/john"
            className={(active) =>
              active
                ? "bg-[var(--color-primary)] text-white font-semibold px-4 py-3 rounded-md border-l-4 border-[var(--color-primary)]"
                : "bg-transparent text-white/90 px-4 py-3 rounded-md border-l-4 border-transparent hover:bg-[var(--color-dark)]/50"
            }
          >
            ⚙️ Exemple 3
          </Link>
        </nav>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Comparaison : avec et sans className fonction
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card variant="outline" className="border-[#95a5a6]">
            <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Sans className fonction
            </h4>
            <p className="text-sm text-[var(--color-text-light)] mb-4">
              Le style ne change pas selon l'état actif
            </p>
            <Button variant="ghost" size="sm" asLink href="/home">
              Home (statique)
            </Button>
          </Card>
          <Card variant="outline" className="border-[#27ae60]">
            <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Avec className fonction
            </h4>
            <p className="text-sm text-[var(--color-text-light)] mb-4">
              Le style change automatiquement quand le lien est actif
            </p>
            <Link
              href="/home"
              className={(active) =>
                active
                  ? "inline-block bg-[var(--color-primary)] text-white font-semibold px-4 py-2 rounded-md"
                  : "inline-block bg-[var(--color-background)] text-[var(--color-text)] px-4 py-2 rounded-md hover:bg-[var(--color-dark)]/10"
              }
            >
              Home (dynamique)
            </Link>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          4. Note importante
        </h3>
        <Alert variant="warning">
          <p className="mb-2">
            <strong>⚠️ Important :</strong> La prop{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              style
            </code>{" "}
            <strong>ne peut pas</strong> être une fonction dans Wouter. Seul{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              className
            </code>{" "}
            peut être une fonction.
          </p>
          <p className="mb-2">Pour un style dynamique, utilisez :</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                className
              </code>{" "}
              avec une fonction + CSS pour les styles
            </li>
            <li>
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                useRoute
              </code>{" "}
              pour déterminer l'état actif + style conditionnel
            </li>
          </ul>
        </Alert>
      </section>
    </div>
  );
}

export default ExampleLinkActive;
