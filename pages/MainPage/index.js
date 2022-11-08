import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { mainStyle } from '../../styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import FlatHolder from '../../components/flatHolder';
import axios from 'axios';
import Badge from '../../components/Badge';

const FlatHolderSecond = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Квартира2');
  };
  return (
    <View style={mainStyle.flatDescription}>
      <Image
        style={{ width: 160, height: 133, zIndex: -1, position: 'relative' }}
        source={require('../../assets/mockHouse2.jpg')}
      />
      <Badge />
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Мирзо Улугбек 4/5/6</Text>
        <Pressable onPress={handlePress}>
          <Text style={{ color: 'gray' }}>Подробнее</Text>
        </Pressable>
      </View>
    </View>
  );
};
const MainPage = ({ navigation }) => {
  // const [data, setData] = React.useState([]);
  // const response = async () => {
  //   const config = {
  //     proxy: {
  //       protocol: 'https',
  //       host: '127.0.0.1',
  //       port: 9000,
  //       auth: {
  //         username: 'mikeymike',
  //         password: 'rapunz3l',
  //       },
  //     },
  //   };
  //   await axios
  //     .get('http://127.0.0.1:8000/property/list', config)
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err, 'this is shit'));
  // };
  // React.useEffect(() => {
  //   response();
  //   console.log(data);
  // }, []);
  const [searchInput, setSearchInput] = React.useState('');
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
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              <FlatHolderSecond navigation={navigation} />
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <View key={item}>
                  <FlatHolder navigation={navigation} />
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
                <View key={item}>
                  <FlatHolder navigation={navigation} />
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
