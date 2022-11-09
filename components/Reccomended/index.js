import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { mainStyle } from '../../styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import FlatHolder from '../flatHolder';
import FiltersSvg from '../../assets/Filters.js';
import FilterComp from '../FilterComp';

const RecentFlats = ({ navigation }) => {
  const [clicked, setClicked] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://6449-82-215-94-53.eu.ngrok.io/property/list')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const onChangeText = (text) => {
    setSearchInput(text);
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
              Показано {data.length} результатов
            </Text>
            <Pressable onPress={() => setClicked(!clicked)}>
              <FiltersSvg />
            </Pressable>
          </View>
          <View style={mainStyle.moreInfoFlats}>
            {data.map((item) => (
              <View key={item.id}>
                <FlatHolder navigation={navigation} data={item} />
              </View>
            ))}
          </View>
        </View>
        {clicked && <FilterComp handlePress={() => setClicked(!clicked)} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentFlats;
