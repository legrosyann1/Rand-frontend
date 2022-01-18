import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PublicVault = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Header title='Public Vaults' />
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

export default PublicVault;