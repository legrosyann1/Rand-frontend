import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from '../api/index';
import {useDispatch} from 'react-redux';
import {addVault, withdrawFunds} from '../actions/index'

const FormVault = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  function createVault() {
    axios.post('/vaults', {name: name, amount: amount, type: 'Private'})
      .then(function (response) {
        dispatch(addVault(response.data._id, response.data.name, response.data.amount, response.data.type))
        dispatch(withdrawFunds(response.data.amount))
        setCompleted(true)  
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Icon name='bank-outline' size={30} color='grey'/>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="title of your vault"
        />
      </View>
      <View style={styles.row2}>
        <Icon name='currency-usd' size={30} color='grey'/>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="deposit"
          keyboardType="numeric"
        />
      </View>
      <Button 
        style={styles.button}
        color='rgb(92,81,159)'
        activeOpacity={0.2}
        title='Create'
        onPress={() => createVault()}
      ></Button>
      {completed && <Text>The vault was succesfully created</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: '50%',
    marginBottom: 'auto',
  },
  input:{
    fontSize: 20,
    paddingLeft: 10,
  }, 
  row1:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  row2:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  }
});

export default FormVault;