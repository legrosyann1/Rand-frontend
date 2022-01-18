import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Footer = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <Icon.Button 
        name="web" size={23} backgroundColor={'transparent'} 
        onPress={() => navigation.navigate('PublicVault')}
      ></Icon.Button>
      <Icon.Button 
        name="home" size={23} backgroundColor={'transparent'} 
        onPress={() => navigation.navigate('Home')}
      ></Icon.Button>
      <Icon.Button 
        name="account-multiple" size={23} backgroundColor={'transparent'} 
        onPress={() => navigation.navigate('PrivateVault')}
      ></Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 80,
    backgroundColor: 'rgb(92,81,159)',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 5,
  },
});

export default Footer;