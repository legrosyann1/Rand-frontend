import React from 'react';
import {TouchableWithoutFeedback, FlatList, StyleSheet, Text, View} from 'react-native';
import VaultItem from './VaultItem'
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const VaultsList = ({navigation}) => {
  const vaults = useSelector(store => store.vaults);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Vaults</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('PrivateVault')}>
        <Icon.Button 
          style={styles.text}
          color='rgb(92,81,159)'
          backgroundColor='transparent'
          activeOpacity={0.2}
        >see all</Icon.Button>
      </TouchableWithoutFeedback>
      <FlatList 
        data={vaults} 
        renderItem={({item}) => <VaultItem item={item} />}
      />
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
    paddingLeft: 6,
  },
  text: {
    margin: 0,
    padding: 0,
  }
});

export default VaultsList;