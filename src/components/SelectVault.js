import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../api/index';
import {removeVault, depositFunds} from '../actions/index'

const SelectVault = () => {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const vaults = useSelector(store => store.vaults);
  const dispatch = useDispatch();


  function createVault() {
    let id = null;
    let pos = null;
    for (let i=0; i<vaults.length; i++){
      if (vaults[i].name == name){
        console.log('here')
        id = vaults[i].id;
        pos = vaults[i].position;
        console.log('after',id, pos);
        break;
      }
    }
    const url = `/vaults/${id}`
    axios.delete(url)
      .then(function (response) {
        console.log(response.data)
        dispatch(removeVault(pos))
        dispatch(depositFunds(response.data.amount))
        setCompleted(true)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name='bank-outline' size={30} color='grey'/>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Write name of vault"
        />
      </View>
      <Button 
        style={styles.button}
        color='rgb(92,81,159)'
        activeOpacity={0.2}
        title='Delete'
        onPress={() => createVault()}
      ></Button>
      {completed && <Text>The vault was succesfully deleted</Text>}
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
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default SelectVault;