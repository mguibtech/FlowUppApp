# AnalysisContext

Contexto compartilhado para gerenciar transações e categorias nas telas do AnalysisScreen.

## Uso

### 1. O Provider já está integrado no AppAnalysisStack

O `AnalysisProvider` já envolve todas as telas do AnalysisStack, então você pode usar o hook `useAnalysisContext` em qualquer tela filha.

### 2. Usar o contexto nas telas

```tsx
import { useAnalysisContext } from '../Context';

function MyScreen() {
  const {
    transactions,
    categories,
    addTransaction,
    setTransactions,
    getTransactionsByType,
    // ... outros métodos
  } = useAnalysisContext();

  // Usar os dados e métodos
}
```

### 3. Inicializar dados

Para inicializar dados quando a aplicação carrega ou quando necessário, você pode usar `useEffect` no componente que envolve o Provider ou em uma tela específica:

```tsx
import { useEffect } from 'react';
import { useAnalysisContext } from '../Context';
import { Transaction } from '@types';
import { CategoryData } from '@components';

function AnalysisScreen() {
  const { setTransactions, setCategories } = useAnalysisContext();

  useEffect(() => {
    // Carregar transações de uma API ou banco de dados
    const loadTransactions = async () => {
      const data = await fetchTransactions(); // sua função de fetch
      setTransactions(data);
    };

    // Carregar categorias
    const loadCategories = async () => {
      const data = await fetchCategories(); // sua função de fetch
      setCategories(data);
    };

    loadTransactions();
    loadCategories();
  }, [setTransactions, setCategories]);

  // resto do componente
}
```

### 4. Exemplo de dados mockados

```tsx
import { Transaction } from '@types';
import { CategoryData } from '@components';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    title: 'Groceries',
    dateTime: '2023-04-24T17:00:00',
    category: 'groceries',
    amount: 100.0,
    isExpense: true,
  },
  {
    id: '2',
    title: 'Salary',
    dateTime: '2023-04-24T10:00:00',
    category: 'salary',
    amount: 5000.0,
    isExpense: false,
  },
];

const mockCategories: CategoryData[] = [
  {
    label: 'food',
    percentage: 30,
    color: '#0068FF',
    showInLegend: true,
  },
  {
    label: 'transport',
    percentage: 20,
    color: '#3299FF',
    showInLegend: true,
  },
];
```

## Métodos disponíveis

- `transactions`: Array de transações
- `categories`: Array de categorias
- `setTransactions(transactions)`: Define todas as transações
- `addTransaction(transaction)`: Adiciona uma nova transação
- `updateTransaction(id, updates)`: Atualiza uma transação existente
- `deleteTransaction(id)`: Remove uma transação
- `setCategories(categories)`: Define todas as categorias
- `getTransactionsByDateRange(startDate, endDate)`: Filtra transações por período
- `getTransactionsByCategory(category)`: Filtra transações por categoria
- `getTransactionsByType(isExpense)`: Filtra transações por tipo (receita/despesa)

