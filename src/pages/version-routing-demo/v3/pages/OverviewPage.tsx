import type { JSX } from "react";

function OverviewPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V3 Overview</h2>
        <p className="text-gray-600">
          Vue d'ensemble moderne avec dashboard interactif et métriques en temps
          réel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg">
          <div className="text-3xl mb-2">🚀</div>
          <h3 className="font-semibold text-orange-700 mb-1">Performance</h3>
          <p className="text-2xl font-bold text-orange-900">98%</p>
        </div>
        <div className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg">
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="font-semibold text-orange-700 mb-1">Vitesse</h3>
          <p className="text-2xl font-bold text-orange-900">0.8s</p>
        </div>
        <div className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg">
          <div className="text-3xl mb-2">✨</div>
          <h3 className="font-semibold text-orange-700 mb-1">Satisfaction</h3>
          <p className="text-2xl font-bold text-orange-900">4.9/5</p>
        </div>
      </div>

      <div className="mt-6 p-6 bg-white border-2 border-orange-200 rounded-lg">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <span>📊</span> Graphique de tendances
        </h3>
        <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded flex items-center justify-center text-gray-500 border-2 border-dashed">
          Visualisation interactive des données
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
