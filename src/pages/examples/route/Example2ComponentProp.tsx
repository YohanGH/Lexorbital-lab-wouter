/**
 * EXEMPLE 2 : Component prop
 * <Route path="/orders/:status" component={Orders} />
 *
 * Le composant est passé via la prop `component`.
 * Les params de la route sont automatiquement passés au composant.
 */
import { Card, CodeBlock, Alert } from "../../../components/ui";

interface Example2ComponentPropProps {
  status?: string;
}

function Example2ComponentProp({ status }: Example2ComponentPropProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 2 : Component Prop
      </h2>
      <Card className="mb-6">
        <p className="text-[var(--color-text-light)] mb-4">
          Cette route utilise la prop `component` :
        </p>
        <CodeBlock language="jsx">
          {
            '<Route path="/example-2/:status" component={Example2ComponentProp} />'
          }
        </CodeBlock>
        <p className="text-[var(--color-text-light)] mt-4">
          Le paramètre `status` est automatiquement passé au composant.
        </p>
      </Card>
      {status && (
        <Alert variant="success" className="mt-4">
          <p>
            Status reçu : <strong className="font-semibold">{status}</strong>
          </p>
        </Alert>
      )}
    </div>
  );
}

export default Example2ComponentProp;
