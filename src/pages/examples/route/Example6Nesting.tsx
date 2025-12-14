/**
 * EXEMPLE 6 : Nesting avec prop `nest`
 *
 * La prop `nest` permet de créer des routes imbriquées.
 * Les routes enfants matchent relativement au pattern parent.
 */
import { Route } from "wouter";
import Example5NestedLayout from "./Example5NestedLayout";
import { Card, CodeBlock, Alert } from "../../../components/ui";

function Example6Nesting() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 6 : Nesting avec prop `nest`
      </h2>

      <Alert variant="warning" className="mb-6">
        <h3 className="font-semibold mb-2 text-base">Explication du nesting</h3>
        <p className="text-sm mb-3">
          La prop{" "}
          <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
            nest
          </code>{" "}
          permet de créer un contexte de routing imbriqué :
        </p>
        <CodeBlock language="jsx" className="mb-3">
          {`<Route path="/app" nest>
  <Route path="/users/:id" />
  <Route path="/settings" />
</Route>`}
        </CodeBlock>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            La route parent avec{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              nest
            </code>{" "}
            match tout ce qui commence par{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /app
            </code>
          </li>
          <li>
            Les routes enfants matchent{" "}
            <strong className="font-semibold">relativement</strong> au parent
          </li>
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /app/users/1
            </code>{" "}
            → la route enfant voit{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              /users/1
            </code>
          </li>
          <li>
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              useLocation()
            </code>{" "}
            retourne le chemin relatif, pas absolu
          </li>
        </ul>
      </Alert>

      {/* Route parent avec nest */}
      <Route path="/app" nest>
        <Example5NestedLayout />
      </Route>

      {/* Route pour expliquer quand on n'est pas dans /app */}
      <Route>
        <Card>
          <p className="text-[var(--color-text-light)] mb-2">
            Vous n'êtes pas dans la section /app
          </p>
          <p className="text-[var(--color-text-light)]">
            Naviguez vers{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
              /app
            </code>{" "}
            pour voir le nesting en action
          </p>
        </Card>
      </Route>
    </div>
  );
}

export default Example6Nesting;
