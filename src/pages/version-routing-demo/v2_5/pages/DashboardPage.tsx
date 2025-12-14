import type { JSX } from "react";

function DashboardPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V2.5 Dashboard</h2>
        <p className="text-gray-600">
          Tableau de bord amélioré avec de nouvelles visualisations et widgets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>📊</span> Vue d'ensemble
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Revenus totaux</span>
              <span className="text-xl font-bold text-purple-700">€89,012</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Croissance</span>
              <span className="text-green-600 font-semibold">+12.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>🎯</span> Objectifs
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Objectif mensuel</span>
                <span className="font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-purple-600 h-3 rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
