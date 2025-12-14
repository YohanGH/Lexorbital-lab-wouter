import type { JSX } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: string;
  color?: "green" | "blue" | "purple" | "orange";
}

function StatCard({
  title,
  value,
  icon = "📊",
  color = "green",
}: StatCardProps): JSX.Element {
  const colorClasses = {
    green: "bg-green-50 border-green-200 text-green-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
  };

  return (
    <div
      className={`p-4 rounded-lg border-2 ${colorClasses[color]} transition-transform hover:scale-105`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
