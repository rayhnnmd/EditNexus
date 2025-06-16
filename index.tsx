
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <div className="flex items-center gap-4 mb-8">
        <img src="/logo-editnexus.png" alt="EditNexus Logo" className="h-12" />
        <h1 className="text-3xl font-bold">EditNexus</h1>
      </div>
      <h2 className="text-xl font-semibold mb-4">Choose a Category</h2>
      <ul className="space-y-2">
        {["Thumbnail Creator", "AE Transition Reel Editor", "FX Editor", "Vlog Editor", "Long Format YouTube Editor", "Poster Designer", "Gaming Video Editor"].map((role) => (
          <li key={role} className="p-4 border rounded hover:bg-gray-100">
            <Link href={`/category/${encodeURIComponent(role.toLowerCase().replace(/ /g, "-"))}`}>
              {role}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
