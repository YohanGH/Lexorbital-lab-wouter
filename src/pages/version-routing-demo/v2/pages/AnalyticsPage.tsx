import type { JSX } from "react";

function AnalyticsPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V2 Analytics</h2>
        <p className="text-gray-600">Analyses et statistiques - Version 2</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>📊</span> Vue d'ensemble
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Pages vues</span>
              <span className="font-semibold">12,345</span>
            </div>
            <div className="flex justify-between">
              <span>Visiteurs uniques</span>
              <span className="font-semibold">8,901</span>
            </div>
            <div className="flex justify-between">
              <span>Taux de rebond</span>
              <span className="font-semibold">32%</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>🎯</span> Objectifs
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Conversion</span>
                <span className="font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Engagement</span>
                <span className="font-semibold">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
