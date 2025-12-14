import type { JSX } from "react";
import { Link } from "wouter";

function HomePage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">V2 - Page d'accueil</h2>
        <p className="text-gray-600 mb-6">
          Sélectionnez une page dans la sidebar à gauche.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/dashboard"
          className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">📊</div>
          <h3 className="font-semibold text-blue-700">Dashboard</h3>
          <p className="text-sm text-gray-600 mt-1">
            Métriques et performances
          </p>
        </Link>

        <Link
          href="/profile"
          className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">👤</div>
          <h3 className="font-semibold text-blue-700">Profile</h3>
          <p className="text-sm text-gray-600 mt-1">Gérer votre compte</p>
        </Link>

        <Link
          href="/analytics"
          className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">📈</div>
          <h3 className="font-semibold text-blue-700">Analytics</h3>
          <p className="text-sm text-gray-600 mt-1">Analyses détaillées</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
