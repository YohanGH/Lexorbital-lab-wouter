import { useLocation, useRoute } from "wouter";
import { NavLink } from "./ui";
import { Link } from "wouter";

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
  const [isVersionDemoActive] = useRoute("/version-demo");
  const [isV1Active] = useRoute("/v1/*");
  const [isV2Active] = useRoute("/v2/*");
  const [isV25Active] = useRoute("/v2.5/*");
  const [isV3Active] = useRoute("/v3/*");

  const isVersionContextActive =
    isVersionDemoActive ||
    isV1Active ||
    isV2Active ||
    isV25Active ||
    isV3Active;

  return (
    <header className="bg-[var(--color-dark)] text-white p-4 mb-8 border-b-2 border-[var(--color-primary)]">
      <div className="flex justify-between items-center gap-4">
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

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* GitHub Link */}
          <a
            href="https://github.com/YohanGH/Lexorbital-lab-wouter?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg font-semibold text-sm bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 flex items-center gap-2 whitespace-nowrap border border-gray-600"
            title="View on GitHub"
          >
            <span>🔗</span>
            <span>GitHub</span>
          </a>

          {/* Cas Concret pour LexOrbital - Mise en avant à droite */}
          <Link
            href="/version-demo"
            className={`
              px-4 py-2 rounded-lg font-semibold text-sm
              transition-all duration-200
              ${
                isVersionContextActive
                  ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/50 scale-105"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 hover:shadow-lg hover:scale-105"
              }
              border-2 border-yellow-400
              flex items-center gap-2
              whitespace-nowrap
            `}
          >
            <span className="text-lg">🎯</span>
            <span>Cas Concret LexOrbital</span>
          </Link>
        </div>
      </div>

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
