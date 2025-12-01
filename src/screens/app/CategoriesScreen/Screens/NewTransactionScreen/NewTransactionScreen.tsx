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
import { DefaultCategories } from '@types';
import { useState } from 'react';
import { mapCategoryToProps } from '../../Components/mapCategoryToProps';
import { AppCategoryScreenProps } from '@routes';

export function NewTransactionScreen({
  navigation,
  route,
}: AppCategoryScreenProps<'NewTransactionScreen'>) {
  const [selectedCategory, setSelectedCategory] =
    useState<DefaultCategories | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [observation, setObservation] = useState<string>('');
  const { categories } = route.params;
  console.log(categories);

  return (
    <Screen scrollable canGoBack title="Nova transação" icon="notification">
      <BodyBox flex={1}>
        <DateInput label="Data" />
        <SelectInput
          label="Categorias"
          items={
            Array.isArray(categories)
              ? categories
                  .filter(category => mapCategoryToProps[category])
                  .map(category => ({
                    label: mapCategoryToProps[category].label,
                    value: category,
                  }))
              : mapCategoryToProps[categories]
              ? [
                  {
                    label: mapCategoryToProps[categories].label,
                    value: categories,
                  },
                ]
              : []
          }
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
          boxProps={{
            mt: 's12',
            mb: 's12',
          }}
        />

        <ObservationInput
          label="Descrição"
          placeholder="Digite uma descrição para a transação"
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
