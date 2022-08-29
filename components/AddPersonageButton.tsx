import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { IPersonage } from '../interfaces/interfaces';

type Props = { addPersonage: (personage: IPersonage) => void };

const AddPersonageButton = ({ addPersonage }: Props) => {
  const [index, setIndex] = useState(0);

  const handleAddPersonage = () => {
    const time = Date.now();
    const newPersonage = {
      id: index,
      key: time,
      name: 'Hell',
    };
    addPersonage(newPersonage);
    setIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addPersonageButton}
        onPress={handleAddPersonage}
      >
        <View style={styles.buttonContainer}>
          <Text>Создать нового персонажа</Text>
          <FontAwesome name='plus' size={24} color='black' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '95%', marginVertical: 10 },
  addPersonageButton: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 20,
  },
  buttonContainer: {
    marginHorizontal: 10,
    backgroundColor: 'transparent',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default AddPersonageButton;
