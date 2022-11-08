import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { mainStyle } from '../../styles';
import Badge from '../Badge';
const FlatHolder = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Квартира1');
  };
  return (
    <View style={mainStyle.flatDescription}>
      <Image
        style={{ width: 160, height: 133, zIndex: -1, position: 'relative' }}
        source={require('../../assets/mockHouse.png')}
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

export default FlatHolder;
