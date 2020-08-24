import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';

const ImageBlock = (props) => {
  const shareImage = async () => {
    const shareOptions = {
      url: props.imageURL,
    };

    try {
      await Share.open(shareOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.imageURL,
        }}
        style={{
          height: 300,
          width: 400,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <TouchableOpacity
        style={styles.share}
        onPress={() => {
          shareImage();
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>SHARE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowRadius: 10,
    // shadowOpacity: 0.5,
  },
  share: {
    margin: 10,
    width: 110,
    height: 40,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ImageBlock;
