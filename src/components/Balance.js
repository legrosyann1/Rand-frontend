import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Balance = ({amount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your balance</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};

Balance.defaultProps = {
  amount: '1000',
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'darkslateblue',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    padding: 5,
    paddingLeft: 15,
    backgroundColor: 'rgba(92,81,159,1)',
    borderRadius: 20,
    fontSize: 23,
  },
  amount: {
    color: 'white',
    padding: 5,
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 23,
  },
});

export default Balance;