import type { JSX } from "react";

function TeamPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">V3 Team</h2>
        <p className="text-gray-600">
          Gestion d'équipe et collaboration - Version 3
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Alice Martin", role: "Lead Developer", avatar: "👩‍💻" },
          { name: "Bob Dupont", role: "Designer", avatar: "👨‍🎨" },
          { name: "Charlie Bernard", role: "Product Manager", avatar: "👨‍💼" },
        ].map((member) => (
          <div
            key={member.name}
            className="p-6 bg-white border-2 border-orange-200 rounded-lg hover:border-orange-300 transition-colors text-center"
          >
            <div className="text-5xl mb-3">{member.avatar}</div>
            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
            <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm">
              Contacter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
