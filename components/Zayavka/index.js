import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View } from 'react-native';
const Zayavka = () => {
  return (
    <View style={mainStyle.plashka}>
      <Text style={{ color: 'white', fontWeight: '600', marginTop: 2 }}>
        $400
      </Text>
    </View>
  );
};

export default Zayavka;
