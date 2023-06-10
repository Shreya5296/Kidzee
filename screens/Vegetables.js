import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

export default class Vegetables extends Component {
  speakVegetableName = (vegetableName) => {
    Speech.speak(vegetableName);
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
            <TouchableOpacity onPress={() => this.speakVegetableName('Potato')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://media.istockphoto.com/id/1068867872/vector/potato.jpg?s=612x612&w=0&k=20&c=8o-CDz84gEBTX1faiH4-_v-X4C-1f3dDW4FXhEvk09U=',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakVegetableName('Carrot')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://i.pinimg.com/originals/26/00/72/260072123d97bd2ea2e008636128c863.jpg',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakVegetableName('Brinjal')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjnvzlgCarUKkGDZ7i0_2FS7rCe7VDeoJi0CCM3oqDA&usqp=CAU&ec=48600112',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakVegetableName('Peas')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mqP2H4KQyUrlvQbxrKq1yg2pg-SlNR7i9RWlb5hjng&usqp=CAU&ec=48600112',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakVegetableName('Tomato')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://i.pinimg.com/736x/4b/1a/58/4b1a5831900aa601fde4c7ddb48a271f.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakVegetableName('Cauliflower')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdmhwjNj7Ce3r8pIfdlIkiRgRf9bCcTPfFg67Evex2w&usqp=CAU&ec=48600112',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.lowerContainer}>
            <TouchableOpacity onPress={() => this.speakVegetableName('Onion')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://img.freepik.com/premium-vector/red-onion-vector-illustration-vegetable-cartoon-style_329121-178.jpg?w=2000',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.speakVegetableName('Pumpkin')}>
              <Image
                style={styles.veggieImage}
                source={{
                  uri: 'https://howtodrawforkids.com/wp-content/uploads/2021/11/how-to-draw-a-pumpkin-for-kids.jpg',
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
