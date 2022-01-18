import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateVault from '../components/CreateVault';
import AllVaults from '../components/AllVaults';

const PrivateVault = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Header title='Private Vaults' />
        <CreateVault />
        <AllVaults />
      </ScrollView>
      <Footer navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 15,
  },
});

export default PrivateVault;