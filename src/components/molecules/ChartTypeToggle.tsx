import Button from "@/components/atoms/Button";

export type ChartType = "bar" | "line" | "pie";

type ChartTypeToggleProps = {
  active: ChartType;
  onChange: (type: ChartType) => void;
};

const chartLabels: Record<ChartType, string> = {
  bar: "Bar",
  line: "Line",
  pie: "Pie",
};

const ChartTypeToggle = ({ active, onChange }: ChartTypeToggleProps) => (
  <div className="flex gap-2">
    {(Object.keys(chartLabels) as ChartType[]).map((type) => (
      <Button
        key={type}
        type="button"
        variant={active === type ? "primary" : "secondary"}
        onClick={() => onChange(type)}
        aria-pressed={active === type}
      >
        {chartLabels[type]}
      </Button>
    ))}
  </div>
);

export default ChartTypeToggle;

