import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { mainStyle } from '../../styles';
import Badge from '../Badge';
const FlatHolder = ({ navigation, data }) => {
  const handlePress = () => {
    navigation.navigate('Квартира', {
      id: data.id,
    });
  };
  return (
    <View style={mainStyle.flatDescription}>
      <Pressable onPress={handlePress}>
        <Image
          style={{ width: 158, height: 130, zIndex: -1, position: 'relative' }}
          source={{ uri: `https://6449-82-215-94-53.eu.ngrok.io${data.image}` }}
        />
        <Badge price={data.price} />
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
          <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>
          <Text style={{ color: 'gray' }}>Подробнее</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FlatHolder;
