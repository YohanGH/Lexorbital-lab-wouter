/**
 * EXEMPLE 3 : asChild prop pour composants personnalisés
 *
 * Par défaut, Link wrap toujours ses enfants dans un <a>.
 * Avec asChild, Link utilise le composant enfant directement.
 * Le composant enfant doit implémenter onClick pour la navigation.
 */
import { Link, useLocation } from "wouter";
import { Card, CodeBlock, Alert } from "../../../components/ui";

// Composant personnalisé qui doit implémenter onClick
interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

function CustomButton({
  onClick,
  children,
  variant = "primary",
}: CustomButtonProps) {
  const baseClasses =
    "px-6 py-3 border-none rounded-md cursor-pointer text-base font-semibold transition-colors duration-200";
  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]",
    secondary: "bg-[#6B7280] text-white hover:bg-[#4B5563]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}

// Composant personnalisé qui rend un <a> sous le capot
// Avec asChild, Wouter passe directement onClick qui gère la navigation
interface CustomLinkProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
}

function CustomLink({ href, onClick, children, className }: CustomLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-4 py-2 bg-[#9b59b6] text-white no-underline rounded-md inline-block hover:bg-[#8e44ad] transition-colors duration-200 ${className || ""}`}
    >
      {children}
    </a>
  );
}

function ExampleLinkAsChild() {
  const [location] = useLocation();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 3 : asChild prop
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
          1. Comportement par défaut (sans asChild)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            Par défaut,{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Link
            </code>{" "}
            wrap toujours ses enfants dans un{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              &lt;a&gt;
            </code>{" "}
            :
          </p>
          <div className="mt-4">
            <Link href="/example-1">
              <CustomButton variant="primary">
                Bouton dans un Link (sans asChild)
              </CustomButton>
            </Link>
          </div>
        </Card>
        <CodeBlock language="jsx" className="mb-4">
          {`<Link href="/example-1">
  <CustomButton>Bouton</CustomButton>
</Link>

// Résultat HTML :
// <a href="/example-1">
//   <button>Bouton</button>
// </a>`}
        </CodeBlock>
        <Alert variant="error">
          <p>
            ⚠️ Problème : Vous avez un bouton dans un lien, ce qui n'est pas
            sémantique.
          </p>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          2. Avec asChild (recommandé)
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-2">
            Avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              asChild
            </code>
            ,{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              Link
            </code>{" "}
            utilise directement le composant enfant.
          </p>
          <p className="text-[var(--color-text-light)]">
            <strong className="font-semibold">Important :</strong> Le composant
            enfant doit implémenter{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              onClick
            </code>{" "}
            pour que la navigation fonctionne.
          </p>
        </Card>
        <div className="flex gap-2 mt-4 flex-wrap">
          <Link href="/example-2/active" asChild>
            <CustomButton variant="primary">Bouton avec asChild</CustomButton>
          </Link>
          <Link href="/example-3/123/john" asChild>
            <CustomButton variant="secondary">Autre bouton</CustomButton>
          </Link>
          <Link href="/home" asChild>
            <CustomLink>Custom Link avec asChild</CustomLink>
          </Link>
        </div>
        <CodeBlock language="jsx" className="mt-4 mb-4">
          {`<Link href="/example-2/active" asChild>
  <CustomButton>Bouton</CustomButton>
</Link>

// Résultat HTML :
// <button onClick={...}>Bouton</button>
// (pas de <a> wrapper)`}
        </CodeBlock>
        <Alert variant="info">
          <p className="font-semibold mb-2">✅ Avantages :</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>HTML sémantique (pas de bouton dans un lien)</li>
            <li>Contrôle total sur le rendu</li>
            <li>
              Intégration avec des bibliothèques UI (Radix, Headless UI, etc.)
            </li>
          </ul>
        </Alert>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          3. Exemple avec bibliothèque UI
        </h3>
        <Card className="mb-4">
          <p className="text-[var(--color-text-light)] mb-4">
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              asChild
            </code>{" "}
            est particulièrement utile avec des bibliothèques UI qui fournissent
            leurs propres composants de lien :
          </p>
        </Card>
        <CodeBlock language="jsx">
          {`// Exemple avec Radix UI
import { Link } from "wouter";
import { Button } from "@radix-ui/react-button";

<Link href="/dashboard" asChild>
  <Button>Dashboard</Button>
</Link>

// Exemple avec Chakra UI
import { Link } from "wouter";
import { Button } from "@chakra-ui/react";

<Link href="/settings" asChild>
  <Button colorScheme="blue">Settings</Button>
</Link>`}
        </CodeBlock>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
          4. Comparaison visuelle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card variant="outline" className="border-[#e74c3c]">
            <h4 className="text-lg font-semibold text-[#e74c3c] mb-4">
              ❌ Sans asChild
            </h4>
            <Link href="/example-1">
              <CustomButton variant="primary">Bouton</CustomButton>
            </Link>
            <p className="text-sm text-[var(--color-text-light)] mt-2">
              Résultat :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                &lt;a&gt;&lt;button&gt;...&lt;/button&gt;&lt;/a&gt;
              </code>
            </p>
          </Card>
          <Card variant="outline" className="border-[#27ae60]">
            <h4 className="text-lg font-semibold text-[#27ae60] mb-4">
              ✅ Avec asChild
            </h4>
            <Link href="/example-2/active" asChild>
              <CustomButton variant="primary">Bouton</CustomButton>
            </Link>
            <p className="text-sm text-[var(--color-text-light)] mt-2">
              Résultat :{" "}
              <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                &lt;button&gt;...&lt;/button&gt;
              </code>
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default ExampleLinkAsChild;
