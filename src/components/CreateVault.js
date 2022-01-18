import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, Image, Dimensions, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormVault from './FormVault';

const win = Dimensions.get('window');

const CreateVault = () => {
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
        <FormVault style={styles.form}/>
      </Modal>

      <View style={styles.row}>
        <Text style={{ color: 'black', fontSize: 15 }}>Your private vaults</Text>
        <TouchableWithoutFeedback onPress={() => {setModal(!modal);}}>
          <Icon.Button 
            style={styles.text}
            backgroundColor='transparent'
            activeOpacity={0.2}
          ><Text style={{ color: 'rgb(92,81,159)', fontSize: 15 }}>Create</Text></Icon.Button>
        </TouchableWithoutFeedback>
      </View>
      <Image 
        source={require('../assets/PrivateVault.jpeg')}
        resizeMode='stretch'
        resizeMethod='scale'
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 3,
  },
  image: {
    width: win.width * 0.82,
    height: win.width * 0.60,
    resizeMode: "center",
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 0,
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

export default CreateVault;