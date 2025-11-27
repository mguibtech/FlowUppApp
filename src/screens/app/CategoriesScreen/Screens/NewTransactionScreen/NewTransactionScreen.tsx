import {
  BodyBox,
  Box,
  Button,
  DateInput,
  ObservationInput,
  Option,
  Screen,
  SelectInput,
  Text,
  TextInput,
} from '@components';
import { CategoryType } from '@types';
import { useState } from 'react';

const categoryLabels: Record<CategoryType, string> = {
  wedding: 'Casamento',
  car: 'Carro',
  newHome: 'Casa Nova',
  travel: 'Viagem',
  more: 'Mais',
  saving: 'Poupança',
  entertainment: 'Entretenimento',
  food: 'Comida',
  medicine: 'Medicina',
  gift: 'Presente',
  rent: 'Aluguel',
  groceries: 'Mercado',
  transport: 'Transporte',
  salary: 'Salário',
};

const categoryOptions: ReadonlyArray<Option<CategoryType>> = [
  { label: categoryLabels.wedding, value: 'wedding' },
  { label: categoryLabels.car, value: 'car' },
  { label: categoryLabels.newHome, value: 'newHome' },
  { label: categoryLabels.travel, value: 'travel' },
  { label: categoryLabels.more, value: 'more' },
  { label: categoryLabels.saving, value: 'saving' },
  { label: categoryLabels.entertainment, value: 'entertainment' },
  { label: categoryLabels.food, value: 'food' },
  { label: categoryLabels.medicine, value: 'medicine' },
  { label: categoryLabels.gift, value: 'gift' },
  { label: categoryLabels.rent, value: 'rent' },
  { label: categoryLabels.groceries, value: 'groceries' },
  { label: categoryLabels.transport, value: 'transport' },
  { label: categoryLabels.salary, value: 'salary' },
] as const;

export function NewTransactionScreen() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null,
  );
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [observation, setObservation] = useState<string>('');

  return (
    <Screen scrollable canGoBack title="Nova transação" icon="notification">
      <BodyBox flex={1}>
        <DateInput label="Data" />
        <SelectInput
          label="Categorias"
          items={categoryOptions}
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />
        <TextInput
          label="Valor"
          placeholder="Valor"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          label="Título"
          placeholder="Digite um título para a transação"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          label="Descrição"
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <ObservationInput
          label="Observação"
          placeholder="Digite uma observação para a transação"
          value={observation}
          onChangeText={setObservation}
        />
        <Button
          title="Salvar"
          alignSelf="center"
          onPress={() => {}}
          width="60%"
          mt="s36"
        />
      </BodyBox>
    </Screen>
  );
}
