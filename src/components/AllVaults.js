import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Modal} from 'react-native';
import VaultItem from './VaultItem'
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectVault from './SelectVault';

const AllVaults = () => {
  const vaults = useSelector(store => store.vaults);
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal 
        animationType="slide" 
        visible={modal}
        onRequestClose={() => {setModal(!modal);}}
        style={styles.modal}
      >
        <TouchableWithoutFeedback onPress={() => {setModal(!modal);}}>
          <Icon.Button 
            style={styles.exit}
            name='close'
            backgroundColor='transparent'
            color='black'
            activeOpacity={0.2}
          ></Icon.Button>
        </TouchableWithoutFeedback>
        <SelectVault style={styles.form}/>
      </Modal>

      <FlatList 
        data={vaults} 
        renderItem={({item}) => <VaultItem item={item} />}
      />
      <TouchableWithoutFeedback onPress={() => {setModal(!modal);}}>
        <Icon.Button 
          style={styles.text}
          backgroundColor='transparent'
          activeOpacity={0.2}
        ><Text style={{ color: 'rgb(92,81,159)', fontSize: 15 }}>Delete</Text></Icon.Button>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: 'darkslategrey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 20,
  },
  text: {
    marginLeft: 'auto'
  },
  modal: {
    alignSelf: 'center'
  },
  exit:{
    alignSelf: 'center',
    marginTop: 30,
  },
  form: {
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default AllVaults;