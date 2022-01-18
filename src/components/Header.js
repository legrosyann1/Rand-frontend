import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Rand',
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
  },
  text: {
    color: 'darkslategrey',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;