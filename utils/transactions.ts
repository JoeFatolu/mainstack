import { getTransactions } from "@/api/transactions";
import { Transaction } from "@/interfaces/Transaction";
import { useQuery } from "@tanstack/react-query";

export function useTransactions() {
  return useQuery({ queryKey: ["transactions"], queryFn: getTransactions });
}
