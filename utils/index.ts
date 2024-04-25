import { Transaction } from "@/interfaces/Transaction";

export const formatNumber = (number: number): string =>
  number.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return `${
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
      parseInt(month, 10) - 1
    ]
  } ${parseInt(day, 10)},${year}`;
};

export function sortByDate(data: Transaction[]): Transaction[] {
  return data.sort((a: Transaction, b: Transaction) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
