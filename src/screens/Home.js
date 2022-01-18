import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, LogBox} from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import VaultsList from '../components/VaultsList';
import Prizes from '../components/Prizes';
import Footer from '../components/Footer';
import axios from '../api/index';
import {useDispatch, useSelector} from 'react-redux';
import {addVault, depositFunds} from '../actions/index'

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect (() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getUserData();
  }, [])

  function getUserData() {
    axios.get('/')
      .then(function (response) {
        dispatch(depositFunds(response.data.balance))
        const vaults = response.data.vaults;
        for (let i=0; i<vaults.length; i++){
          dispatch(addVault(vaults[i]._id, vaults[i].name, vaults[i].amount, vaults[i].type))
        }
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const balance = useSelector(store => store.balance);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title='Rand' />
        <Balance amount={balance} />
        <VaultsList navigation={navigation}/>
        <Prizes />
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

export default Home;