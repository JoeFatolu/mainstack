import { Transaction } from "@/interfaces/Transaction";
import api from ".";

export async function getTransactions(): Promise<Transaction[]> {
  try {
    const response = await api.get("/transactions");
    return response.data;
  } catch (error) {
    throw new Error("Failed to get transactions");
  }
}
