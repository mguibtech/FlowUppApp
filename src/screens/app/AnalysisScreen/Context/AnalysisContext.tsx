import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Transaction } from '@types';
import { CategoryData } from '@components';
import { mockTransactions, mockCategories } from './mockData';

interface AnalysisContextData {
  transactions: Transaction[];
  categories: CategoryData[];
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  setCategories: (categories: CategoryData[]) => void;
  getTransactionsByDateRange: (startDate: Date, endDate: Date) => Transaction[];
  getTransactionsByCategory: (category: string) => Transaction[];
  getTransactionsByType: (isExpense: boolean) => Transaction[];
}

const AnalysisContext = createContext<AnalysisContextData | undefined>(
  undefined,
);

interface AnalysisProviderProps {
  readonly children: React.ReactNode;
  readonly initialTransactions?: Transaction[];
  readonly initialCategories?: CategoryData[];
}

export function AnalysisProvider({
  children,
  initialTransactions,
  initialCategories,
}: AnalysisProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(
    initialTransactions || mockTransactions,
  );
  const [categories, setCategories] = useState<CategoryData[]>(
    initialCategories || mockCategories,
  );

  const addTransaction = useCallback((transaction: Transaction) => {
    setTransactions(prev => [...prev, transaction]);
  }, []);

  const updateTransaction = useCallback(
    (id: string, updates: Partial<Transaction>) => {
      setTransactions(prev =>
        prev.map(transaction =>
          transaction.id === id ? { ...transaction, ...updates } : transaction,
        ),
      );
    },
    [],
  );

  const deleteTransaction = useCallback((id: string) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  }, []);

  const getTransactionsByDateRange = useCallback(
    (startDate: Date, endDate: Date) => {
      return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.dateTime);
        return transactionDate >= startDate && transactionDate <= endDate;
      });
    },
    [transactions],
  );

  const getTransactionsByCategory = useCallback(
    (category: string) => {
      return transactions.filter(
        transaction => transaction.category === category,
      );
    },
    [transactions],
  );

  const getTransactionsByType = useCallback(
    (isExpense: boolean) => {
      return transactions.filter(
        transaction => transaction.isExpense === isExpense,
      );
    },
    [transactions],
  );

  const contextValue = useMemo(
    () => ({
      transactions,
      categories,
      setTransactions,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      setCategories,
      getTransactionsByDateRange,
      getTransactionsByCategory,
      getTransactionsByType,
    }),
    [
      transactions,
      categories,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      getTransactionsByDateRange,
      getTransactionsByCategory,
      getTransactionsByType,
    ],
  );

  return (
    <AnalysisContext.Provider value={contextValue}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysisContext() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error(
      'useAnalysisContext must be used within an AnalysisProvider',
    );
  }
  return context;
}
