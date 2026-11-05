declare module "@paystack/inline-js" {
  type PaystackTransaction = {
    reference: string;
    [key: string]: unknown;
  };

  type PaystackOptions = {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    reference?: string;
    onSuccess?: (transaction: PaystackTransaction) => void;
    onCancel?: () => void;
    onError?: (error: Error) => void;
  };

  export default class PaystackPop {
    newTransaction(options: PaystackOptions): void;
  }
}
