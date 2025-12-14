import type { JSX } from "react";

function ReportsPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V2.5 Reports</h2>
        <p className="text-gray-600">
          Génération de rapports avancés - Version 2.5
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <span>📄</span> Rapport mensuel - Janvier 2024
            </h3>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Télécharger
            </button>
          </div>
          <p className="text-gray-600">
            Rapport complet avec analyses détaillées et recommandations.
          </p>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <span>📄</span> Rapport trimestriel - Q4 2023
            </h3>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Télécharger
            </button>
          </div>
          <p className="text-gray-600">
            Vue d'ensemble trimestrielle avec tendances et prévisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
