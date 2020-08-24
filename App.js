import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ImageBlock from './components/ImageBlock';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [images, setImages] = useState([]);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      // width: 400,
      // height: 300,
      // cropping: true,
    }).then((data) => {
      // console.log(data);
      setImages([...images, {imageURL: data.path}]);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 40, marginTop: 20}}>
        Share Images
      </Text>
      {images.length === 0 ? (
        <Text
          style={{
            fontSize: 15,
            position: 'absolute',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Press "ADD IMAGE" to get started
        </Text>
      ) : null}
      <FlatList
        style={{marginTop: 20}}
        data={images}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ImageBlock imageURL={item.imageURL} />}
        keyExtractor={(item) => item.imageURL}
      />
      <TouchableOpacity
        style={styles.addImageButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          ADD IMAGE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImageButton: {
    margin: 30,
    width: 170,
    height: 50,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default App;
