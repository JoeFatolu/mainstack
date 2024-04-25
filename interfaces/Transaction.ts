export interface Transaction {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: TransactionType;
  date: string;
}

export enum TransactionType {
  WITHDRAWAL = "withdrawal",
  DEPOSIT = "deposit",
}
