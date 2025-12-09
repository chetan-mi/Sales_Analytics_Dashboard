import SalesDashboardPanel from "@/components/organisms/SalesDashboardPanel";

const DashboardPage = () => (
  <div className="space-y-6">
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Track yearly performance across multiple years with interactive filters and visualizations.
      </p>
    </div>
    <SalesDashboardPanel />
  </div>
);

export default DashboardPage;

