import type { JSX } from "react";

function SettingsPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V1 Settings</h2>
        <p className="text-gray-600">Paramètres de l'application - Version 1</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>🔔</span> Notifications
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>Notifications par email</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Notifications push</span>
            </label>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>🌐</span> Langue
          </h3>
          <select className="w-full px-3 py-2 border border-gray-300 rounded">
            <option>Français</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>🎨</span> Thème
          </h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Clair
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              Sombre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
