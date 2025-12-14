import type { JSX } from "react";
import { Link } from "wouter";

function HomePage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">V3 - Page d'accueil</h2>
        <p className="text-gray-600 mb-6">
          Sélectionnez une section dans le menu de navigation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/overview"
          className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">📊</div>
          <h3 className="font-semibold text-orange-700">Overview</h3>
          <p className="text-sm text-gray-600 mt-1">Vue d'ensemble moderne</p>
        </Link>

        <Link
          href="/projects"
          className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">🚀</div>
          <h3 className="font-semibold text-orange-700">Projects</h3>
          <p className="text-sm text-gray-600 mt-1">Gestion de projets</p>
        </Link>

        <Link
          href="/team"
          className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-center"
        >
          <div className="text-4xl mb-2">👥</div>
          <h3 className="font-semibold text-orange-700">Team</h3>
          <p className="text-sm text-gray-600 mt-1">Équipe et collaboration</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
