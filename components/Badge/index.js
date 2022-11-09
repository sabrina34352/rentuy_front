import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View } from 'react-native';
const Badge = ({ price }) => {
  return (
    <View style={mainStyle.plashka}>
      <Text style={{ color: 'white', fontWeight: '600', marginTop: 2 }}>
        {price}
      </Text>
    </View>
  );
};

export default Badge;
