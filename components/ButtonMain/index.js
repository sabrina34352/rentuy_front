import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View } from 'react-native';
const ButtonMain = ({text}) => {
  return (
    <View style={mainStyle.btn}>
      <Text style={{ color: 'white', fontWeight: '600', marginTop: 2 }}>
       {text}
      </Text>
    </View>
  );
};

export default ButtonMain;
