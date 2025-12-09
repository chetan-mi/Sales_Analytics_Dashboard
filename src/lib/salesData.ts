export type YearSales = {
  year: number;
  total: number;
  monthly: number[];
};

export const salesData: YearSales[] = [
  {
    year: 2022,
    total: 894_500,
    monthly: [64000, 72000, 68500, 70500, 73000, 75500, 78200, 80100, 82000, 84000, 86500, 91000],
  },
  {
    year: 2023,
    total: 965_800,
    monthly: [71000, 76000, 79500, 80500, 83500, 86200, 89500, 91500, 94000, 97200, 99500, 103900],
  },
  {
    year: 2024,
    total: 1_042_300,
    monthly: [78000, 81000, 84500, 87000, 90500, 93000, 96500, 99000, 102500, 105800, 108900, 112600],
  },
];

export const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

