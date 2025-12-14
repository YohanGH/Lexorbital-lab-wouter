import type { JSX } from "react";

function ProfilePage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V1 Profile</h2>
        <p className="text-gray-600">
          Gestion du profil utilisateur - Version 1
        </p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h3 className="text-xl font-semibold">Utilisateur Exemple</h3>
            <p className="text-gray-500">user@example.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              defaultValue="Dupont"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Prénom</label>
            <input
              type="text"
              defaultValue="Jean"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
