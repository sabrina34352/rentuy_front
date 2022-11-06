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
import FlatHolder from '../../components/flatHolder';
import axios from 'axios';
const MainPage = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const response = async () => {
    const config = {
      proxy: {
        protocol: 'https',
        host: '127.0.0.1',
        port: 9000,
        auth: {
          username: 'mikeymike',
          password: 'rapunz3l',
        },
      },
    };
    await axios
      .get('http://127.0.0.1:8000/property/list', config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, 'this is shit'));
  };
  React.useEffect(() => {
    response();
    console.log(data);
  }, []);
  const [searchInput, setSearchInput] = React.useState('');
  // console.log(data);
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
