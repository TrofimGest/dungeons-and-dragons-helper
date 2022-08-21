import { StyleSheet } from 'react-native';
import AddPersonageButton from '../components/AddPersonageButton';
import { View, FlatList } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import PersonageItem from '../components/PersonageItem';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [personages, setPersonages] = useState<number[]>([]);

  const addPersonage = (index: number) => {
    setPersonages([...personages, index]);
  };

  return (
    <View style={styles.container}>
      <AddPersonageButton addPersonage={addPersonage} />
      <FlatList
        style={styles.personagesList}
        data={personages}
        renderItem={({ item }) => <PersonageItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personagesList: {
    width: '95%',
  },
});
