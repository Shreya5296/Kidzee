import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

export default class Animals extends Component {
  speakAnimalName = (animalName) => {
    Speech.speak(animalName);
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            backgroundColor={'green'}
            centerComponent={{
              text: 'Vegetables',
              style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
            }}
          />
          <Text style={styles.text}>
            Click on the VEGETABLES to know its name
          </Text>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakAnimalName('Lion')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/cartoon-happy-lion-isolated-white-background_29190-752.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakAnimalName('Elephant')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/005/112/389/original/cartoon-cute-baby-elephant-on-white-background-free-vector.jpg',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakAnimalName('Rabbit')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/cute-rabbit-cartoon_160606-558.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakAnimalName('Tiger')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://t3.ftcdn.net/jpg/01/18/37/28/360_F_118372873_pZW5X2UaY0jJfGaEiWnBqCqgFKHdH8Jw.jpg',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakAnimalName('Kangaroo')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/cartoon-happy-kangaroos-with-baby-joey_29190-4479.jpg?w=2000',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakAnimalName('Cat')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/004/218/321/original/cute-cat-white-pet-cartoon-character-free-vector.jpg',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakAnimalName('Horse')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/cartoon-brown-horse-isolated-white_29190-5049.jpg?w=360',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakAnimalName('Dog')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000',
                }}
              />
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
