import Input from "@/components/atoms/Input";

type ThresholdInputProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

const ThresholdInput = ({ value, onChange, min = 0, max = 2_000_000 }: ThresholdInputProps) => (
  <label className="flex w-full flex-col gap-2">
    <span className="text-sm font-medium text-gray-700">Minimum yearly sales</span>
    <div className="flex items-center gap-3">
      <Input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label="Minimum yearly sales threshold"
        className="max-w-xs"
      />
      <span className="text-sm text-gray-500">Show years with total ≥ threshold</span>
    </div>
  </label>
);

export default ThresholdInput;

