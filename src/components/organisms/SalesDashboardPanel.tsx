"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartTypeToggle, { type ChartType } from "@/components/molecules/ChartTypeToggle";
import ThresholdInput from "@/components/molecules/ThresholdInput";
import { monthLabels, salesData, type YearSales } from "@/lib/salesData";

const seriesColors = ["#1E3A8A", "#06B6D4", "#F59E0B"];

const buildMonthlySeries = (data: YearSales[]) =>
  monthLabels.map((month, monthIndex) => {
    const entry: Record<string, string | number> = { month };
    data.forEach((year) => {
      entry[String(year.year)] = year.monthly[monthIndex];
    });
    return entry;
  });

const SalesDashboardPanel = () => {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(800_000);

  const filteredData = useMemo(
    () => salesData.filter((item) => item.total >= threshold),
    [threshold]
  );

  const chartData = useMemo(() => buildMonthlySeries(filteredData), [filteredData]);
  const pieData = useMemo(
    () => filteredData.map((item) => ({ name: String(item.year), value: item.total })),
    [filteredData]
  );

  const chartNode =
    chartType === "bar" ? (
      <BarChart data={chartData} margin={{ top: 16, right: 24, bottom: 8, left: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(value) => `${value / 1000}k`} />
        <Tooltip formatter={(value: number) => value.toLocaleString()} />
        <Legend />
        {filteredData.map((year, index) => (
          <Bar
            key={year.year}
            dataKey={String(year.year)}
            fill={seriesColors[index % seriesColors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    ) : chartType === "line" ? (
      <LineChart data={chartData} margin={{ top: 16, right: 24, bottom: 8, left: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(value) => `${value / 1000}k`} />
        <Tooltip formatter={(value: number) => value.toLocaleString()} />
        <Legend />
        {filteredData.map((year, index) => (
          <Line
            key={year.year}
            type="monotone"
            dataKey={String(year.year)}
            stroke={seriesColors[index % seriesColors.length]}
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
    ) : (
      <PieChart>
        <Tooltip formatter={(value: number) => value.toLocaleString()} />
        <Legend />
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
          {pieData.map((entry, index) => (
            <Cell key={entry.name} fill={seriesColors[index % seriesColors.length]} />
          ))}
        </Pie>
      </PieChart>
    );

  return (
    <div className="card p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Sales Analytics</h2>
            <p className="text-sm text-gray-600">2022 – 2024 • synthetic FMCG-inspired dataset</p>
          </div>
          <ChartTypeToggle active={chartType} onChange={setChartType} />
        </div>

        <ThresholdInput value={threshold} onChange={setThreshold} min={0} max={2_000_000} />

        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartNode}
          </ResponsiveContainer>
        </div>

        <SalesTable data={filteredData} />
      </div>
    </div>
  );
};

const SalesTable = ({ data }: { data: YearSales[] }) => (
  <div className="overflow-hidden rounded-lg border border-gray-100">
    <table className="min-w-full divide-y divide-gray-100 text-left text-sm text-gray-700">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 font-semibold text-gray-900">Year</th>
          <th className="px-4 py-3 font-semibold text-gray-900">Total Sales</th>
          <th className="px-4 py-3 font-semibold text-gray-900">Avg. Monthly</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {data.map((year) => (
          <tr key={year.year} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-900">{year.year}</td>
            <td className="px-4 py-3 tabular-nums">${year.total.toLocaleString()}</td>
            <td className="px-4 py-3 tabular-nums">
              ${(Math.round(year.total / 12)).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SalesDashboardPanel;

