/**
 * CAS MÉTIER 2 : E-commerce avec catégories
 *
 * Scénario : Un site e-commerce avec :
 * - /shop (page principale)
 * - /shop/electronics (catégorie électronique)
 * - /shop/electronics/laptops (sous-catégorie)
 * - /shop/electronics/laptops/:productId (produit)
 * - /shop/clothing (catégorie vêtements)
 * - /shop/clothing/:productId (produit)
 *
 * AVANTAGE du nesting :
 * - Le header/footer du shop est partagé
 * - Chaque catégorie peut avoir son propre layout
 * - Navigation breadcrumb simplifiée
 */
import { Route, Link, useLocation } from "wouter";
import { Card, Alert, Button } from "../../components/ui";

function EcommerceLayout() {
  const [location] = useLocation();

  return (
    <div>
      {/* Header du shop - toujours visible */}
      <header className="bg-[var(--color-dark)] text-white p-4 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">🛍️ Mon Shop</h1>
          <nav className="flex gap-4">
            <Link
              href="/shop"
              className="text-white no-underline hover:text-[var(--color-primary)] transition-colors"
            >
              Accueil Shop
            </Link>
            <Link
              href="~/home"
              className="text-[var(--color-text-light)] no-underline hover:text-[var(--color-primary)] transition-colors"
            >
              Site principal
            </Link>
          </nav>
        </div>
      </header>

      <div className="px-8">
        <Alert variant="info" className="mb-4">
          <p>
            <strong>Location (relatif) :</strong>{" "}
            <code className="bg-[var(--color-dark)] text-[var(--color-background)] px-2 py-1 rounded font-mono text-sm">
              {location}
            </code>
          </p>
        </Alert>

        {/* Breadcrumb basé sur la location relative */}
        <nav className="mb-4 text-sm text-[var(--color-text-light)]">
          <Link href="~/home" className="text-[var(--color-primary)] hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/shop" className="text-[var(--color-primary)] hover:underline">
            Shop
          </Link>
          {location !== "/" && location !== "/shop" && (
            <>
              {" / "}
              <span className="text-[var(--color-text-light)]">{location}</span>
            </>
          )}
        </nav>

        {/* Routes imbriquées pour le shop */}
        <Route path="/">
          <Card>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Bienvenue dans notre shop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/shop/electronics"
                className="border-2 border-[var(--color-border)] p-4 no-underline text-inherit rounded-md hover:border-[var(--color-primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  📱 Électronique
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">
                  Ordinateurs, téléphones, etc.
                </p>
              </Link>
              <Link
                href="/shop/clothing"
                className="border-2 border-[var(--color-border)] p-4 no-underline text-inherit rounded-md hover:border-[var(--color-primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  👕 Vêtements
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">Mode et accessoires</p>
              </Link>
              <Link
                href="/shop/books"
                className="border-2 border-[var(--color-border)] p-4 no-underline text-inherit rounded-md hover:border-[var(--color-primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  📚 Livres
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">Romans, guides, etc.</p>
              </Link>
            </div>
          </Card>
        </Route>

        {/* Catégorie Électronique avec sous-catégories */}
        <Route path="/electronics" nest>
          <Card>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Électronique
            </h2>
            <nav className="mb-4 flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                asLink
                href="/shop/electronics/laptops"
              >
                Laptops
              </Button>
              <span className="text-[var(--color-text-light)]">|</span>
              <Button
                variant="ghost"
                size="sm"
                asLink
                href="/shop/electronics/phones"
              >
                Phones
              </Button>
              <span className="text-[var(--color-text-light)]">|</span>
              <Button
                variant="ghost"
                size="sm"
                asLink
                href="/shop/electronics/tablets"
              >
                Tablets
              </Button>
            </nav>

            <Route path="/laptops">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Laptops
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
                  <li>
                    <Link
                      href="/shop/electronics/laptops/macbook-pro"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      MacBook Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/electronics/laptops/thinkpad"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      ThinkPad
                    </Link>
                  </li>
                </ul>
              </Card>
            </Route>

            <Route path="/laptops/:productId">
              {(params) => (
                <Card>
                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                    Produit : {params.productId}
                  </h3>
                  <p className="text-[var(--color-text-light)] mb-4">
                    Détails du laptop {params.productId}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    asLink
                    href="/shop/electronics/laptops"
                  >
                    ← Retour
                  </Button>
                </Card>
              )}
            </Route>

            <Route path="/phones">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Phones
                </h3>
                <p className="text-[var(--color-text-light)]">Liste des téléphones</p>
              </Card>
            </Route>

            <Route path="/tablets">
              <Card>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  Tablets
                </h3>
                <p className="text-[var(--color-text-light)]">Liste des tablettes</p>
              </Card>
            </Route>
          </Card>
        </Route>

        {/* Catégorie Vêtements (plus simple, pas de sous-catégories) */}
        <Route path="/clothing">
          <Card>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Vêtements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-light)]">
              <li>
                <Link
                  href="/shop/clothing/tshirt-1"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  T-Shirt Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/clothing/jeans-1"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Jeans Classique
                </Link>
              </li>
            </ul>
          </Card>
        </Route>

        <Route path="/clothing/:productId">
          {(params) => (
            <Card>
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                Produit : {params.productId}
              </h3>
              <p className="text-[var(--color-text-light)] mb-4">Détails du vêtement</p>
              <Button variant="ghost" size="sm" asLink href="/shop/clothing">
                ← Retour
              </Button>
            </Card>
          )}
        </Route>

        {/* Catégorie Livres */}
        <Route path="/books">
          <Card>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Livres</h2>
            <p className="text-[var(--color-text-light)]">Notre sélection de livres</p>
          </Card>
        </Route>
      </div>

      {/* Footer du shop */}
      <footer className="mt-16 p-8 bg-[var(--color-background)] text-center">
        <p className="text-[var(--color-text-light)] mb-2">
          © 2024 Mon Shop - Tous droits réservés
        </p>
        <Link
          href="~/home"
          className="text-[var(--color-primary)] no-underline hover:underline"
        >
          Retour au site principal
        </Link>
      </footer>
    </div>
  );
}

export default EcommerceLayout;
