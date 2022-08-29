import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import React from 'react';

type Props = { item: number; id: number; name: string };

const PersonageItem = ({ item, id, name }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addPersonageButton}>
        <View style={styles.buttonContainer}>
          <Text>{item}</Text>
          <View style={styles.textContainer}>
            <Text>{name}</Text>
            <Text>{id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingVertical: 10 },
  addPersonageButton: {
    backgroundColor: '#fff',
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
  textContainer: {
    backgroundColor: 'transparent',
  },
});

export default PersonageItem;
