import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import VegetableScreen from './Vegetables';
import FruitScreen from './Fruits';
import AnimalScreen from './Animals';

const bgImg = {
  uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-simple-kid-grass-play-background-image_223050.jpg',
};
const vegImg = {
  uri: 'https://media.baamboozle.com/uploads/images/334970/1664406722_187272.jpeg',
};

const fruitImg = {
  uri: ' https://images.assetsdelivery.com/compings_v2/lupascoroman/lupascoroman1707/lupascoroman170700303.jpg',
};

const animalImg = {
  uri: ' https://static.vecteezy.com/system/resources/thumbnails/000/360/560/small_2x/xv53_602i_140810.jpg',
};

const HomeScreen = ({ navigation }) => {
  const goToVegetableScreen = () => {
    navigation.navigate('VegetableScreen');
  };

  const goToFruitScreen = () => {
    navigation.navigate('FruitScreen');
  };

  const goToAnimalScreen = () => {
    navigation.navigate('AnimalScreen');
  };

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <ImageBackground
          source={bgImg}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <Header
            backgroundColor={'green'}
            centerComponent={{
              text: 'Kidzee',
              style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
            }}
          />
          <TouchableOpacity onPress={goToVegetableScreen}>
            <Image style={styles.buttonImage} source={vegImg}></Image>
          </TouchableOpacity>

           <TouchableOpacity onPress={goToAnimalScreen}>
            <Image style={styles.buttonImage} source={animalImg}></Image>
          </TouchableOpacity>

           <TouchableOpacity onPress={goToFruitScreen}>
            <Image style={styles.buttonImage} source={fruitImg}></Image>
          </TouchableOpacity>

        </ImageBackground>
      </SafeAreaProvider>
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null,
      },
    },
    VegetableScreen: {
      screen: VegetableScreen,
      navigationOptions: {
        title: 'Vegetable Screen',
        header: null,
      },
    },

    AnimalScreen: {
      screen: AnimalScreen,
      navigationOptions: {
        title: 'Animal Screen',
        header: null,
      },
    },

    FruitScreen: {
      screen: FruitScreen,
      navigationOptions: {
        title: 'Fruit Screen',
        header: null,
      },
    },
  },
  
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignContent:"center"
  },
  backgroundImage: {
    flex: 1,
  },
  buttonImage: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 180,
    padding: 20,
    margin: 15,
    borderRadius: 10,
    borderWidth: 2,
  },
});
