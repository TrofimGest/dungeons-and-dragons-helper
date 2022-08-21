import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

type Props = { item: number };

const PersonageItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addPersonageButton}>
        <View style={styles.buttonContainer}>
          <Text>{props.item}</Text>
          <View>
            <Text>Инфернус</Text>
            <Text>Тифлинг-колдун</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', marginVertical: 10 },
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
});

export default PersonageItem;
