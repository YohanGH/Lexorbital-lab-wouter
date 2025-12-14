/**
 * CAS MÉTIER 3 : Compte utilisateur avec préfixe ~
 *
 * Scénario : Une application avec compte utilisateur
 * - /account (tableau de bord)
 * - /account/profile (profil)
 * - /account/profile/edit (édition du profil)
 * - /account/orders (commandes)
 * - /account/orders/:orderId (détail commande)
 * - /account/settings (paramètres)
 *
 * PROBLÈME résolu par ~ :
 * - Dans /account/orders/123, un lien vers /home doit aller vers /home (absolu)
 * - Pas vers /account/orders/123/home (relatif)
 * - Le préfixe ~ force la navigation absolue
 */
import { Route, Link, useLocation } from "wouter";
import { Card, Alert, Button } from "../../components/ui";

function UserAccount() {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar du compte */}
      <aside className="w-52 bg-[#34495e] text-white p-8">
        <h2 className="text-2xl font-bold mb-8">Mon Compte</h2>
        <nav className="flex flex-col gap-2">
          <Link
            href="/account"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            📊 Tableau de bord
          </Link>
          <Link
            href="/account/profile"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            👤 Profil
          </Link>
          <Link
            href="/account/orders"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            📦 Commandes
          </Link>
          <Link
            href="/account/settings"
            className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
          >
            ⚙️ Paramètres
          </Link>
        </nav>

        {/* EXEMPLE CRUCIAL : Navigation absolue avec ~ */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-xs text-[var(--color-text-light)] mb-2">Navigation globale :</p>
          <div className="flex flex-col gap-2">
            <Link
              href="~/home"
              className="text-[var(--color-text-light)] no-underline text-sm hover:text-[var(--color-primary)] transition-colors"
            >
              🏠 Accueil
            </Link>
            <Link
              href="~/shop"
              className="text-[var(--color-text-light)] no-underline text-sm hover:text-[var(--color-primary)] transition-colors"
            >
              🛍️ Shop
            </Link>
            <Link
              href="~/admin"
              className="text-[var(--color-text-light)] no-underline text-sm hover:text-[var(--color-primary)] transition-colors"
            >
              🔐 Admin
            </Link>
          </div>
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-8">
        <Alert variant="warning" className="mb-6">
          <p className="font-semibold mb-2">⚠️ Démonstration du préfixe ~</p>
          <p className="text-sm mb-1">
            Location actuelle (relatif) :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
              {location}
            </code>
          </p>
          <p className="text-sm text-red-700 mb-1">
            Sans ~ :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">{`<Link href="/home">`}</code>{" "}
            → /account/orders/123/home (❌ relatif)
          </p>
          <p className="text-sm text-green-700">
            Avec ~ :{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">{`<Link href="~/home">`}</code>{" "}
            → /home (✅ absolu)
          </p>
        </Alert>

        {/* Routes imbriquées */}
        <Route path="/">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Tableau de bord
            </h1>
            <p className="text-[var(--color-text-light)] mb-6">Bienvenue dans votre compte</p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
                Actions rapides :
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  asLink
                  href="/account/profile/edit"
                >
                  Modifier mon profil
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  asLink
                  href="/account/orders"
                >
                  Voir mes commandes
                </Button>
              </div>
            </div>
          </Card>
        </Route>

        <Route path="/profile" nest>
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Mon Profil
            </h1>
            <p className="text-[var(--color-text-light)] mb-4">
              Gérez vos informations personnelles
            </p>
            <Button
              variant="ghost"
              size="sm"
              asLink
              href="/account/profile/edit"
            >
              ✏️ Modifier
            </Button>

            <Route path="/edit">
              <Card className="mt-8">
                <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Édition du profil
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Nom :
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border-2 border-[var(--color-border)] rounded-md focus:border-[var(--color-primary)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Email :
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border-2 border-[var(--color-border)] rounded-md focus:border-[var(--color-primary)] focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm" type="button">
                      Sauvegarder
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asLink
                      href="/account/profile"
                    >
                      Annuler
                    </Button>
                  </div>
                </form>
              </Card>
            </Route>
          </Card>
        </Route>

        <Route path="/orders">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Mes Commandes
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
              <li>
                <Link
                  href="/account/orders/12345"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Commande #12345
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders/12346"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Commande #12346
                </Link>
              </li>
            </ul>
          </Card>
        </Route>

        <Route path="/orders/:orderId">
          {(params) => (
            <Card>
              <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                Commande #{params.orderId}
              </h1>
              <p className="text-[var(--color-text-light)] mb-6">Détails de la commande</p>
              <Alert variant="info" className="mb-6">
                <h3 className="font-semibold mb-2">
                  💡 Exemple concret du préfixe ~
                </h3>
                <p className="text-sm mb-2">
                  Vous êtes dans{" "}
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                    /account/orders/{params.orderId}
                  </code>
                </p>
                <p className="text-sm mb-2">
                  <strong className="font-semibold">Sans ~ (relatif) :</strong>
                  <br />
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">{`<Link href="/home">`}</code>{" "}
                  → Va vers{" "}
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                    /account/orders/{params.orderId}/home
                  </code>{" "}
                  ❌
                </p>
                <p className="text-sm mb-4">
                  <strong className="font-semibold">Avec ~ (absolu) :</strong>
                  <br />
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">{`<Link href="~/home">`}</code>{" "}
                  → Va vers{" "}
                  <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-1 py-0.5 rounded font-mono text-xs">
                    /home
                  </code>{" "}
                  ✅
                </p>
                <Button variant="primary" size="sm" asLink href="~/home">
                  Retour à l'accueil (avec ~)
                </Button>
              </Alert>
              <Button
                variant="ghost"
                size="sm"
                asLink
                href="/account/orders"
                className="mt-4"
              >
                ← Retour aux commandes
              </Button>
            </Card>
          )}
        </Route>

        <Route path="/settings">
          <Card>
            <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Paramètres
            </h1>
            <p className="text-[var(--color-text-light)]">Configuration de votre compte</p>
          </Card>
        </Route>
      </main>
    </div>
  );
}

export default UserAccount;
