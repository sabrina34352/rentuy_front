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
import React from 'react';
import { Searchbar } from 'react-native-paper';
import FlatHolder from '../../components/flatHolder';

const MainPage = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState('');
  React.useEffect(() => {
    fetch('https://6449-82-215-94-53.eu.ngrok.io/property/list')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
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

  if (!data) {
    return <Text>Loading...</Text>;
  }
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
              {data.map((item) => (
                <View key={item.id}>
                  <FlatHolder navigation={navigation} data={item} />
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
              {data.map((item) => (
                <View key={item.id}>
                  <FlatHolder navigation={navigation} data={item} />
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
