import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { mainStyle } from '../../styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { Searchbar } from 'react-native-paper';
const MainPage = ({ navigation }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [fontsLoaded] = useFonts({
    'SF-Pro':
      'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap',
  });
  if (!fontsLoaded) {
    return null;
  }

  const onChangeText = (text) => {
    setSearchInput(text);
  };

  const onRecent = () => {
    navigation.navigate('Недавние');
    console.log('here');
  };
  const onRecomended = () => {
    navigation.navigate('Рекомендации');
    console.log('here');
  };
  const onMap = () => {
    console.log('world map');
  };
  return (
    <SafeAreaView style={{ fontFamily: 'SF-Pro', backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={mainStyle.header}>Привет, Сабрина!</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={mainStyle.wrapper}>
          <Searchbar
            placeholder='Поиск квартир'
            value={searchInput}
            onChangeText={onChangeText}
          />
        </View>

        <View style={mainStyle.wrapperBlock}>
          <View style={mainStyle.headerBlocks}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              Карта Квартир
            </Text>
            <Pressable onPress={onMap}>
              <Text style={{ fontSize: 16 }}>Смотреть все {' >'}</Text>
            </Pressable>
          </View>
          <Image
            style={mainStyle.map}
            source={require('../../assets/map.png')}
          />
        </View>
        <View style={mainStyle.wrapperBlock}>
          <View style={mainStyle.headerBlocks}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Недавние</Text>
            <Pressable onPress={onRecent}>
              <Text style={{ fontSize: 16 }}>Смотреть все {' >'}</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <View style={mainStyle.flatWrapper}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <View style={mainStyle.flatDescription} key={item}>
                  <View style={mainStyle.mock}></View>
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 1,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      borderRadius: 6,
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold' }}>address</Text>
                    <Text style={{ color: 'gray' }}>Подробнее</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={mainStyle.wrapperBlock}>
          <View style={mainStyle.headerBlocks}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              Рекомендовано
            </Text>

            <Pressable onPress={onRecomended}>
              <Text style={{ fontSize: 16 }}>Смотреть все {' >'}</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <View style={mainStyle.flatWrapper}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <View style={mainStyle.flatDescription} key={item}>
                  <View style={mainStyle.mock}></View>
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 1,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      borderRadius: 6,
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold' }}>Чиланзар 4/3/9</Text>
                    <Text style={{ color: 'gray' }}>Подробнее</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
