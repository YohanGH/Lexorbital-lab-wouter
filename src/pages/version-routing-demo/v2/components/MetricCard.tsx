import type { JSX } from "react";

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  icon?: string;
}

function MetricCard({
  label,
  value,
  trend = "neutral",
  icon = "📈",
}: MetricCardProps): JSX.Element {
  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-gray-600",
  };

  return (
    <div className="p-4 bg-white border-2 border-blue-100 rounded-lg hover:border-blue-300 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        {trend !== "neutral" && (
          <span className={`text-sm ${trendColors[trend]}`}>
            {trend === "up" ? "↑" : "↓"}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-2xl font-bold text-blue-700">{value}</p>
    </div>
  );
}

export default MetricCard;
