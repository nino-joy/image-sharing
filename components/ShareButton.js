import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ShareButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>SHARE</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 150,
    height: 50,
    backgroundColor: '#145374',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ShareButton;
