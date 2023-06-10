import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

export default class Fruits extends Component {
  speakFruitName = (fruitName) => {
    Speech.speak(fruitName);
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            backgroundColor={'green'}
            centerComponent={{
              text: 'Fruits',
              style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
            }}
          />
          <Text style={styles.text}>Click on the FRUITS to know its name</Text>
          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakFruitName('Apple')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://howtodrawforkids.com/wp-content/uploads/2021/10/How-to-draw-an-apple-for-kids.jpg',
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakFruitName('Banana')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://ih1.redbubble.net/image.450031005.7257/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg',
                }}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.lowerContainer}>
          <TouchableOpacity onPress={() => this.speakFruitName('Mango')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://easydrawingguides.com/wp-content/uploads/2021/09/how-to-draw-a-mango-featured-image-1200.png',
                }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.speakFruitName('Grapes')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://i.pinimg.com/originals/69/2b/f7/692bf78d6f6d8f4067d8195bfc83c809.png',
                }}></Image>
            </TouchableOpacity>

            
          </View>
          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakFruitName('Water Melon')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://i.pinimg.com/originals/49/9c/81/499c817ae4a419fecd0cae1012561ca3.png',
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakFruitName('Orange')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://easydrawingguides.com/wp-content/uploads/2020/03/how-to-draw-an-orange-featured-image-1200-1024x898.png',
                }}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.lowerContainer}>
          <TouchableOpacity onPress={() => this.speakFruitName('Papaya')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/papaya-fruit-cartoon-style_202271-1402.jpg?w=2000',
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakFruitName('Strawberry')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/free-vector/sticker-design-with-strawberry-isolated_1308-64130.jpg',
                }}></Image>
            </TouchableOpacity>

            
          </View>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4ffb2',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 15,
    color: 'green',
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
  veggieImage: {
    width: 150,
    height: 150,
    padding: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
});
