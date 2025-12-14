/**
 * EXEMPLE 1 : Simple form
 * <Route path="/home"><Home /></Route>
 *
 * La façon la plus simple de déclarer une route.
 * Le composant est passé comme enfant direct.
 */
import { Card, CodeBlock } from "../../../components/ui";

function Example1SimpleForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 1 : Simple Form
      </h2>
      <Card className="mb-6">
        <p className="text-[var(--color-text-light)] mb-4">
          Cette route utilise la forme simple :
        </p>
        <CodeBlock language="jsx">
          {'<Route path="/example-1"><Example1SimpleForm /></Route>'}
        </CodeBlock>
        <p className="text-[var(--color-text-light)] mt-4">
          Le composant est passé comme enfant direct de la Route.
        </p>
      </Card>
    </div>
  );
}

export default Example1SimpleForm;
