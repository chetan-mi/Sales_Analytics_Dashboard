import Link from "next/link";

const HomePage = () => (
  <div className="card mx-auto max-w-3xl px-8 py-10 text-center">
    <h1 className="text-3xl font-semibold text-gray-900">Sales Analytics Dashboard</h1>
    <p className="mt-4 text-gray-600">
      Explore multi-year sales trends with interactive charts and thresholds.
    </p>
    <div className="mt-8">
      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-5 py-3 text-white font-medium shadow-sm transition hover:bg-blue-700"
      >
        View Dashboard
      </Link>
    </div>
  </div>
);

export default HomePage;

