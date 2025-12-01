import { DefaultCategories } from './CategoryTypes';

export interface Transaction {
  id: string;
  title: string;
  dateTime: string; // ISO format: "2023-04-24T17:00:00"
  category: DefaultCategories;
  amount: number; // valor numérico (ex: 100.00)
  isExpense: boolean; // true para despesa, false para receita
}
