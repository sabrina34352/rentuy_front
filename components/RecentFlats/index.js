import { Text, SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { mainStyle } from '../../styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import FlatHolder from '../flatHolder';
const RecentFlats = ({ navigation }) => {
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
              Показано unknown результатов
            </Text>
          </View>
          <View style={mainStyle.moreInfoFlats}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <FlatHolder navigation={navigation} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentFlats;
