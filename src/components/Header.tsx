import { useLocation, useRoute } from "wouter";
import { NavLink } from "./ui";

function Header() {
  const [location] = useLocation();
  const [isHomeActive] = useRoute("/home");
  const [isLinksActive] = useRoute("/links");
  const [isSwitchActive] = useRoute("/switch");
  const [isRedirectActive] = useRoute("/redirect");
  const [isRouterActive] = useRoute("/router");
  const [isBusinessActive] = useRoute("/business");
  const [isAdminActive] = useRoute("/admin");
  const [isShopActive] = useRoute("/shop");
  const [isAccountActive] = useRoute("/account");

  return (
    <header className="bg-[var(--color-dark)] text-white p-4 mb-8 border-b-2 border-[var(--color-primary)]">
      <nav className="flex gap-2 flex-wrap items-center">
        <NavLink href="/home" isActive={isHomeActive}>
          🏠 Home
        </NavLink>

        <span className="text-white/40 mx-1">|</span>

        <NavLink href="/links" isActive={isLinksActive}>
          🔗 Link
        </NavLink>

        <NavLink href="/switch" isActive={isSwitchActive}>
          🔄 Switch
        </NavLink>

        <NavLink href="/redirect" isActive={isRedirectActive}>
          🔀 Redirect
        </NavLink>

        <NavLink href="/router" isActive={isRouterActive}>
          ⚙️ Router
        </NavLink>

        <span className="text-white/40 mx-1">|</span>

        <NavLink href="/business" isActive={isBusinessActive}>
          📊 Cas Métier
        </NavLink>

        <NavLink href="/admin" isActive={isAdminActive}>
          🔐 Admin
        </NavLink>

        <NavLink href="/shop" isActive={isShopActive}>
          🛍️ Shop
        </NavLink>

        <NavLink href="/account" isActive={isAccountActive}>
          👤 Compte
        </NavLink>
      </nav>

      <div className="mt-3 text-sm text-white/90 flex items-center gap-2">
        <span className="font-medium">Location:</span>
        <code className="bg-[var(--color-dark)] border-2 border-[var(--color-primary)] px-2 py-1 rounded font-mono text-xs">
          {location}
        </code>
      </div>
    </header>
  );
}

export default Header;
