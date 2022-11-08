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
              Показано unknown результатов
            </Text>
            <Pressable onPress={() => setClicked(!clicked)}>
              <FiltersSvg />
            </Pressable>
          </View>
          <View style={mainStyle.moreInfoFlats}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <View key={item}>
                <FlatHolder navigation={navigation} />
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
