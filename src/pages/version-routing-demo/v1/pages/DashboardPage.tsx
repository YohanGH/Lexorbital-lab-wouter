import type { JSX } from "react";
import StatCard from "../components/StatCard";

function DashboardPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V1 Dashboard</h2>
        <p className="text-gray-600">
          Bienvenue sur le tableau de bord de la version 1.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Utilisateurs actifs" value="1,234" icon="👥" />
        <StatCard title="Commandes" value="567" icon="🛒" />
        <StatCard title="Revenus" value="€12,345" icon="💰" />
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Activité récente</h3>
        <ul className="space-y-2 text-sm">
          <li>✅ Nouvelle commande #1234</li>
          <li>✅ Utilisateur inscrit: John Doe</li>
          <li>✅ Mise à jour du profil: Jane Smith</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;
