import type { JSX } from "react";
import { Link } from "wouter";

/**
 * HomeNoVersioning - Page d'accueil / Sélecteur de version
 *
 * Cette page statique sert de "hall d'entrée" pour choisir quelle version
 * de l'application explorer. Elle n'est pas versionnée elle-même.
 */
function HomeNoVersioning(): JSX.Element {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Sélecteur de Version</h1>
        <p className="text-gray-600">
          Choisissez une version de l'application à explorer. Chaque version
          possède son propre routeur isolé.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Version 1 */}
        <Link
          href="/v1/dashboard"
          className="block p-6 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            Version 1
          </h2>
          <p className="text-gray-600">
            Layout horizontal avec navigation simple
          </p>
        </Link>

        {/* Version 2 */}
        <Link
          href="/v2/dashboard"
          className="block p-6 border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Version 2
          </h2>
          <p className="text-gray-600">
            Layout sidebar avec navigation latérale
          </p>
        </Link>

        {/* Version 2.5 */}
        <Link
          href="/v2.5"
          className="block p-6 border-2 border-purple-500 rounded-lg hover:bg-purple-50 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-700">
            Version 2.5
          </h2>
          <p className="text-gray-600">
            Version intermédiaire avec améliorations
          </p>
        </Link>

        {/* Version 3 */}
        <Link
          href="/v3"
          className="block p-6 border-2 border-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2 text-orange-700">
            Version 3
          </h2>
          <p className="text-gray-600">
            Version la plus récente avec nouvelles fonctionnalités
          </p>
        </Link>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Comment ça fonctionne ?</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>
            Chaque version possède son propre routeur Wouter avec un{" "}
            <code className="bg-gray-200 px-1 rounded">base</code> path isolé
          </li>
          <li>
            Les navigations internes à une version sont automatiquement
            préfixées
          </li>
          <li>
            Les versions sont complètement isolées et peuvent avoir des
            structures différentes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeNoVersioning;
