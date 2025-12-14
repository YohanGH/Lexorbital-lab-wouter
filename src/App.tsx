import type { JSX } from "react";

import { Redirect, Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/examples/Home";
import Example1SimpleForm from "./pages/examples/route/Example1SimpleForm";
import Example2ComponentProp from "./pages/examples/route/Example2ComponentProp";
import Example3RenderProp from "./pages/examples/route/Example3RenderProp";
import Example4NoPath from "./pages/examples/route/Example4NoPath";
import Example6Nesting from "./pages/examples/route/Example6Nesting";
import Example7AbsolutePath from "./pages/examples/route/Example7AbsolutePath";
import BusinessExamplesHome from "./pages/business/BusinessExamplesHome";
import AdminDashboard from "./pages/business/AdminDashboard";
import EcommerceLayout from "./pages/business/EcommerceLayout";
import UserAccount from "./pages/business/UserAccount";
import LinksHome from "./pages/examples/links/LinksHome";
import ExampleLinkBasic from "./pages/examples/links/ExampleLinkBasic";
import ExampleLinkReplace from "./pages/examples/links/ExampleLinkReplace";
import ExampleLinkAsChild from "./pages/examples/links/ExampleLinkAsChild";
import ExampleLinkActive from "./pages/examples/links/ExampleLinkActive";
import StateReceiver from "./pages/examples/links/StateReceiver";
import SwitchHome from "./pages/examples/switch/SwitchHome";
import ExampleSwitchBasic from "./pages/examples/switch/ExampleSwitchBasic";
import ExampleSwitchOrder from "./pages/examples/switch/ExampleSwitchOrder";
import ExampleSwitchDefault from "./pages/examples/switch/ExampleSwitchDefault";
import ExampleSwitchRealWorld from "./pages/examples/switch/ExampleSwitchRealWorld";
import RedirectHome from "./pages/examples/redirect/RedirectHome";
import ExampleRedirectBasic from "./pages/examples/redirect/ExampleRedirectBasic";
import ExampleRedirectState from "./pages/examples/redirect/ExampleRedirectState";
import ExampleRedirectReplace from "./pages/examples/redirect/ExampleRedirectReplace";
import ExampleRedirectConditional from "./pages/examples/redirect/ExampleRedirectConditional";
import ExampleRedirectRealWorld from "./pages/examples/redirect/ExampleRedirectRealWorld";
import RouterHome from "./pages/examples/router/RouterHome";
import ExampleRouterBasic from "./pages/examples/router/ExampleRouterBasic";
import ExampleRouterBase from "./pages/examples/router/ExampleRouterBase";
import ExampleRouterAroundNav from "./pages/examples/router/ExampleRouterAroundNav";
import ExampleRouterSSR from "./pages/examples/router/ExampleRouterSSR";
import ExampleRouterCustom from "./pages/examples/router/ExampleRouterCustom";

function App(): JSX.Element {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Switch>
          {/* Page d'accueil */}
          <Route path="/home">
            <Home />
          </Route>

          {/* EXEMPLE 1 : Simple form */}
          <Route path="/example-1">
            <Example1SimpleForm />
          </Route>

          {/* EXEMPLE 2 : Component prop avec paramètre optionnel */}
          <Route path="/example-2/:status?">
            {(params) => <Example2ComponentProp status={params.status} />}
          </Route>

          {/* EXEMPLE 3 : Render-prop avec plusieurs paramètres */}
          <Route path="/example-3/:id/:name?">
            {(params) => (
              <Example3RenderProp id={params.id} name={params.name} />
            )}
          </Route>

          {/* EXEMPLE 4 : Route sans path (toujours visible pour démo) */}
          <Route path="/example-4">
            <Example4NoPath />
          </Route>

          {/* EXEMPLE 6 : Nesting avec prop nest */}
          <Route path="/example-6">
            <Example6Nesting />
          </Route>

          {/* EXEMPLE 7 : Préfixe ~ pour chemins absolus */}
          <Route path="/example-7">
            <Example7AbsolutePath />
          </Route>

          {/* EXEMPLE 6 : Section /app avec nesting */}
          <Route path="/app" nest>
            <Example6Nesting />
          </Route>

          {/* EXEMPLES MÉTIER : Cas d'usage réels */}
          <Route path="/business">
            <BusinessExamplesHome />
          </Route>

          {/* Admin Dashboard avec nesting */}
          <Route path="/admin" nest>
            <AdminDashboard />
          </Route>

          {/* E-commerce avec nesting */}
          <Route path="/shop" nest>
            <EcommerceLayout />
          </Route>

          {/* Compte utilisateur avec nesting */}
          <Route path="/account" nest>
            <UserAccount />
          </Route>

          {/* EXEMPLES LINK */}
          <Route path="/links">
            <LinksHome />
          </Route>

          <Route path="/links/example-1">
            <ExampleLinkBasic />
          </Route>

          <Route path="/links/example-2">
            <ExampleLinkReplace />
          </Route>

          <Route path="/links/example-3">
            <ExampleLinkAsChild />
          </Route>

          <Route path="/links/example-4">
            <ExampleLinkActive />
          </Route>

          <Route path="/links/state-receiver">
            <StateReceiver />
          </Route>

          {/* EXEMPLES SWITCH */}
          <Route path="/switch">
            <SwitchHome />
          </Route>

          <Route path="/switch/example-1">
            <ExampleSwitchBasic />
          </Route>

          <Route path="/switch/example-2">
            <ExampleSwitchOrder />
          </Route>

          <Route path="/switch/example-3">
            <ExampleSwitchDefault />
          </Route>

          <Route path="/switch/example-4">
            <ExampleSwitchRealWorld />
          </Route>

          {/* Routes pour les exemples Switch (les composants gèrent leurs propres routes internes) */}
          <Route path="/switch/orders/:status?">
            <ExampleSwitchOrder />
          </Route>

          <Route path="/switch/users/:id?">
            <ExampleSwitchDefault />
          </Route>

          <Route path="/switch/dashboard/:path*">
            <ExampleSwitchRealWorld />
          </Route>

          {/* EXEMPLES REDIRECT */}
          <Route path="/redirect">
            <RedirectHome />
          </Route>

          <Route path="/redirect/example-1">
            <ExampleRedirectBasic />
          </Route>

          <Route path="/redirect/example-2">
            <ExampleRedirectState />
          </Route>

          <Route path="/redirect/example-3">
            <ExampleRedirectReplace />
          </Route>

          <Route path="/redirect/example-4">
            <ExampleRedirectConditional />
          </Route>

          <Route path="/redirect/example-5">
            <ExampleRedirectRealWorld />
          </Route>

          {/* Routes pour les exemples Redirect (imbriquées) */}
          <Route path="/redirect/old-page">
            <ExampleRedirectBasic />
          </Route>

          <Route path="/redirect/new-page">
            <ExampleRedirectBasic />
          </Route>

          <Route path="/redirect/dashboard">
            <ExampleRedirectBasic />
          </Route>

          <Route path="/redirect/home">
            <ExampleRedirectBasic />
          </Route>

          <Route path="/redirect/state/:path*">
            <ExampleRedirectState />
          </Route>

          <Route path="/redirect/replace/:path*">
            <ExampleRedirectReplace />
          </Route>

          <Route path="/redirect/conditional/:path*">
            <ExampleRedirectConditional />
          </Route>

          <Route path="/redirect/real/:path*">
            <ExampleRedirectRealWorld />
          </Route>

          {/* EXEMPLES ROUTER */}
          <Route path="/router">
            <RouterHome />
          </Route>

          <Route path="/router/example-1">
            <ExampleRouterBasic />
          </Route>

          <Route path="/router/example-2">
            <ExampleRouterBase />
          </Route>

          <Route path="/router/example-3">
            <ExampleRouterAroundNav />
          </Route>

          <Route path="/router/example-4">
            <ExampleRouterSSR />
          </Route>

          <Route path="/router/example-5">
            <ExampleRouterCustom />
          </Route>

          {/* Routes pour les exemples Router (imbriquées) */}
          <Route path="/router/example-1/:path*">
            <ExampleRouterBasic />
          </Route>

          <Route path="/router/example-2/:path*">
            <ExampleRouterBase />
          </Route>

          <Route path="/router/example-3/:path*">
            <ExampleRouterAroundNav />
          </Route>

          <Route path="/router/example-4/:path*">
            <ExampleRouterSSR />
          </Route>

          <Route path="/router/example-5/:path*">
            <ExampleRouterCustom />
          </Route>

          {/* Redirect root to home */}
          <Route path="/">
            <Redirect to="/home" />
          </Route>

          {/* Default route (404) - must be last */}
          <Route>
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                404: Page non trouvée
              </h2>
              <p className="text-[var(--color-text-light)] mb-2">
                Cette route n'a pas de `path`, donc elle match toujours en
                dernier.
              </p>
              <p className="text-[var(--color-text-light)]">
                Retournez à{" "}
                <a
                  href="/home"
                  className="text-[var(--color-primary)] hover:underline font-semibold"
                >
                  la page d'accueil
                </a>
              </p>
            </div>
          </Route>
        </Switch>
      </main>

      <Footer />
    </>
  );
}

export default App;
