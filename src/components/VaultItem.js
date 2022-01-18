import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VaultItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Icon name="account-circle" size={30} color='rgb(92,81,159)'></Icon>
      <View style={styles.column}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.subtext}>{item.type}</Text>
      </View>
      <Text style={styles.amount}>${item.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    padding: 5,
  },
  subtext: {
    color: 'grey',
    fontSize: 15,
    paddingLeft: 5,
  },
  amount: {
    color: 'black',
    fontSize: 15,
    marginLeft: 'auto',
    paddingHorizontal: 10,
  }
});

export default VaultItem;