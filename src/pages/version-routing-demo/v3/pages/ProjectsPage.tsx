import type { JSX } from "react";

function ProjectsPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V3 Projects</h2>
        <p className="text-gray-600">
          Gestion de projets avancée avec collaboration en temps réel - Version
          3
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white border-2 border-orange-200 rounded-lg hover:border-orange-300 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">Projet Alpha</h3>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
              Actif
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Développement d'une nouvelle fonctionnalité majeure
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>👥 5 membres</span>
            <span>•</span>
            <span>📅 12 jours restants</span>
          </div>
        </div>

        <div className="p-6 bg-white border-2 border-orange-200 rounded-lg hover:border-orange-300 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">Projet Beta</h3>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
              En cours
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Refonte de l'interface utilisateur
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>👥 3 membres</span>
            <span>•</span>
            <span>📅 8 jours restants</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
