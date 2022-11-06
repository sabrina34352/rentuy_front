import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
const ButtonMain = ({ text, onPress }) => {
  return (
    <Pressable style={mainStyle.btn} onPress={onPress}>
      <Text style={{ color: 'white', fontWeight: '600', marginTop: 2 }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonMain;
