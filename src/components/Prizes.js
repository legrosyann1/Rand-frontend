import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Prizes = () => {
  const prizes = useSelector(store => store.prizes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Prizes</Text>
      <Text style={styles.text}>{prizes.length == 0 ? 'None' : 'Some'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderColor: 'darkslategrey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
  },
  title: {
    color: 'black',
    fontSize: 23,
    paddingBottom: 10,
    paddingLeft: 6,
  },
  text: {
    color: 'grey',
    fontSize: 20,
    paddingVertical: 60,
    textAlign: 'center',
  },
});

export default Prizes;