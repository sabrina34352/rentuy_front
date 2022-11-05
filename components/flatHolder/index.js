import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { mainStyle } from '../../styles';
import Badge from '../Badge';
const FlatHolder = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Квартира1');
  };
  return (
    <View style={mainStyle.flatDescription}>
      <View style={mainStyle.mock}></View>
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
        <Text style={{ fontWeight: 'bold' }}>address</Text>
        <Pressable onPress={handlePress}>
          <Text style={{ color: 'gray' }}>Подробнее</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FlatHolder;
