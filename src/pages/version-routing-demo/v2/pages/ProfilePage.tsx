import type { JSX } from "react";

function ProfilePage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V2 Profile</h2>
        <p className="text-gray-600">
          Gestion du profil utilisateur - Version 2 avec options étendues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>👤</span> Informations personnelles
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input
                type="text"
                defaultValue="Martin"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                defaultValue="martin@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>🔒</span> Sécurité
          </h3>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Changer le mot de passe
            </button>
            <button className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              Activer l'authentification à deux facteurs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
