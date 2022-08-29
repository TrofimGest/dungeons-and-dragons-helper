import { StyleSheet, TouchableOpacity } from 'react-native';
import AddPersonageButton from '../components/AddPersonageButton';
import { View, Text } from '../components/Themed';
import SwipeableFlatList from 'react-native-swipeable-list';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import PersonageItem from '../components/PersonageItem';
import { IPersonage } from '../interfaces/interfaces';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [personages, setPersonages] = useState<IPersonage[]>([]);

  const addPersonage = (personage: IPersonage) => {
    setPersonages([...personages, personage]);
  };

  const deletePersonage = (itemId: number) => {
    const newState = [...personages];
    const filteredState = newState.filter((item) => item.id !== itemId);
    setPersonages(filteredState);
  };

  const QuickActions = (item: IPersonage) => {
    return (
      <View style={styles.qaContainer}>
        <View style={styles.qaButton}>
          <TouchableOpacity onPress={() => deletePersonage(item.id)}>
            <Text style={styles.qaText}>Удалить</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AddPersonageButton addPersonage={addPersonage} />
      <SwipeableFlatList
        style={styles.personagesList}
        data={personages}
        renderItem={({ item }) => (
          <PersonageItem
            item={personages.indexOf(item) + 1}
            id={item.id}
            name={item.name}
          />
        )}
        keyExtractor={(item: { key: number }) => item.key}
        maxSwipeDistance={70}
        shouldBounceOnMount={true}
        renderQuickActions={({ item }) => QuickActions(item)}
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
  qaContainer: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  qaButton: {
    width: 70,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qaText: {
    color: 'red',
  },
});
