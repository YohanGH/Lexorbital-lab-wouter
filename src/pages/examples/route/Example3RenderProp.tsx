/**
 * EXEMPLE 3 : Render-prop style
 * <Route path="/users/:id">
 *   {params => <UserPage id={params.id} />}
 * </Route>
 *
 * Utilise une fonction render pour avoir un contrôle total sur les params.
 * Utile quand on veut transformer ou valider les params avant de les passer.
 */
import { Card, CodeBlock, Alert } from "../../../components/ui";

interface Example3RenderPropProps {
  id: string;
  name?: string;
}

function Example3RenderProp({ id, name }: Example3RenderPropProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Exemple 3 : Render-Prop Style
      </h2>
      <Card className="mb-6">
        <p className="text-[var(--color-text-light)] mb-4">
          Cette route utilise le render-prop :
        </p>
        <CodeBlock language="jsx">
          {
            '<Route path="/example-3/:id/:name?">{(params) => <Example3RenderProp {...params} />}</Route>'
          }
        </CodeBlock>
        <p className="text-[var(--color-text-light)] mt-4">
          Vous avez un contrôle total sur les params avant de les passer au
          composant.
        </p>
      </Card>
      <div className="space-y-2">
        <Alert variant="info">
          <p>
            ID reçu : <strong className="font-semibold">{id}</strong>
          </p>
        </Alert>
        {name && (
          <Alert variant="success">
            <p>
              Name reçu : <strong className="font-semibold">{name}</strong>
            </p>
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Example3RenderProp;
