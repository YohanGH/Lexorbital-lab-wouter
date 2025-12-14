import type { JSX } from "react";
import { Link } from "wouter";

function HomePage(): JSX.Element {
  return (
    <div className="space-y-6 text-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">V1 - Page d'accueil</h2>
        <p className="text-gray-600 mb-6">
          Sélectionnez une page dans la navigation ci-dessus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <Link
          href="/dashboard"
          className="p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 transition-colors"
        >
          <div className="text-4xl mb-2">📊</div>
          <h3 className="font-semibold text-green-700">Dashboard</h3>
          <p className="text-sm text-gray-600 mt-1">
            Vue d'ensemble et statistiques
          </p>
        </Link>

        <Link
          href="/profile"
          className="p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 transition-colors"
        >
          <div className="text-4xl mb-2">👤</div>
          <h3 className="font-semibold text-green-700">Profile</h3>
          <p className="text-sm text-gray-600 mt-1">Gérer votre profil</p>
        </Link>

        <Link
          href="/settings"
          className="p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 transition-colors"
        >
          <div className="text-4xl mb-2">⚙️</div>
          <h3 className="font-semibold text-green-700">Settings</h3>
          <p className="text-sm text-gray-600 mt-1">
            Paramètres de l'application
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
