import type { JSX } from "react";
import MetricCard from "../components/MetricCard";

function DashboardPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V2 Dashboard</h2>
        <p className="text-gray-600">
          Tableau de bord de la version 2 avec métriques avancées.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          label="Ventes ce mois"
          value="€45,678"
          trend="up"
          icon="💰"
        />
        <MetricCard label="Nouveaux clients" value="234" trend="up" icon="👥" />
        <MetricCard
          label="Taux de conversion"
          value="3.2%"
          trend="down"
          icon="📊"
        />
      </div>

      <div className="mt-6 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <span>📈</span> Graphique de performance
        </h3>
        <div className="h-48 bg-white rounded flex items-center justify-center text-gray-400 border-2 border-dashed">
          Graphique de visualisation des données
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
