import type { JSX } from "react";
import { Link } from "wouter";

function HomePage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">V2.5 - Page d'accueil</h2>
        <p className="text-gray-600 mb-6">
          Sélectionnez une page dans la sidebar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Link
          href="/dashboard"
          className="p-6 bg-purple-50 border-2 border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">📊</div>
          <h3 className="font-semibold text-purple-700">Dashboard</h3>
          <p className="text-sm text-gray-600 mt-1">Tableau de bord amélioré</p>
        </Link>

        <Link
          href="/reports"
          className="p-6 bg-purple-50 border-2 border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">📄</div>
          <h3 className="font-semibold text-purple-700">Reports</h3>
          <p className="text-sm text-gray-600 mt-1">Rapports avancés</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
