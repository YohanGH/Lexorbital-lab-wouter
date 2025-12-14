/**
 * Page d'accueil pour les exemples métier
 */
import { Button, Card, Alert } from "../../components/ui";

function BusinessExamplesHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
        📊 Exemples Métier - Nesting & Préfixe ~
      </h1>

      <Alert variant="info" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          🎯 Pourquoi utiliser le Nesting ?
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-semibold">Layout partagé :</strong> Un
            header/sidebar/footer commun pour toute une section
          </li>
          <li>
            <strong className="font-semibold">Isolation :</strong> Les routes
            enfants sont indépendantes, plus faciles à maintenir
          </li>
          <li>
            <strong className="font-semibold">Location relative :</strong>{" "}
            useLocation() retourne le chemin relatif, pas absolu
          </li>
          <li>
            <strong className="font-semibold">Organisation :</strong> Structure
            claire et logique de l'application
          </li>
        </ul>
      </Alert>

      <Alert variant="warning" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          🔑 Pourquoi utiliser le préfixe ~ ?
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-semibold">Navigation absolue :</strong> Dans
            un contexte imbriqué, forcer la navigation vers une route de niveau
            supérieur
          </li>
          <li>
            <strong className="font-semibold">Éviter les erreurs :</strong> Sans
            ~, un lien vers /home depuis /admin/users/1 va vers
            /admin/users/1/home (❌)
          </li>
          <li>
            <strong className="font-semibold">Liens globaux :</strong> Créer des
            liens de navigation globale depuis n'importe où dans l'app
          </li>
        </ul>
      </Alert>

      <div className="grid gap-6 mt-8">
        <Card variant="outline" className="border-[#3498db]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            1. Dashboard Admin
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Cas :</strong> Application admin
            avec sections (users, products, settings)
          </p>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Nesting :</strong> Le layout admin
            (sidebar) est partagé pour toutes les routes /admin/*
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Préfixe ~ :</strong> Lien "Retour
            au site public" depuis n'importe quelle page admin
          </p>
          <Button variant="primary" size="md" asLink href="/admin">
            Voir l'exemple Admin →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#27ae60]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            2. E-commerce avec catégories
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Cas :</strong> Site e-commerce
            avec catégories et sous-catégories
          </p>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Nesting :</strong> Header/footer
            du shop partagés, catégories avec leurs propres sous-routes
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Préfixe ~ :</strong> Lien "Site
            principal" depuis le shop
          </p>
          <Button variant="primary" size="md" asLink href="/shop">
            Voir l'exemple Shop →
          </Button>
        </Card>

        <Card variant="outline" className="border-[#e74c3c]">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
            3. Compte Utilisateur
          </h2>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Cas :</strong> Section compte avec
            profil, commandes, paramètres
          </p>
          <p className="text-[var(--color-text-light)] mb-2">
            <strong className="font-semibold">Nesting :</strong> Sidebar du
            compte partagée, routes imbriquées pour profil/edit
          </p>
          <p className="text-[var(--color-text-light)] mb-4">
            <strong className="font-semibold">Préfixe ~ :</strong>{" "}
            <strong className="font-semibold">CRUCIAL</strong> - Navigation vers
            /home depuis /account/orders/123 doit aller vers /home, pas
            /account/orders/123/home
          </p>
          <Button variant="primary" size="md" asLink href="/account">
            Voir l'exemple Compte →
          </Button>
        </Card>
      </div>

      <Alert variant="info" className="mt-8">
        <h3 className="font-semibold mb-2 text-base">💡 Comment tester ?</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Naviguez vers un exemple (Admin, Shop, ou Compte)</li>
          <li>Observez la location dans l'interface (chemin relatif)</li>
          <li>Testez les liens avec et sans préfixe ~</li>
          <li>
            Vérifiez que useLocation() retourne le chemin relatif dans chaque
            contexte
          </li>
        </ol>
      </Alert>
    </div>
  );
}

export default BusinessExamplesHome;
