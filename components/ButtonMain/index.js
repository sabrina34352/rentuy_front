import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
const ButtonMain = ({ text, onPress, disabled, pressed }) => {
  if (disabled) {
    return (
      <Pressable
        style={{
          borderColor: '#5A46DE',
          borderWidth: 1,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 40,
          marginVertical: 5,
        }}
        onPress={onPress}
      >
        <Text style={{ color: '#5A46DE', fontWeight: '600', marginTop: 2 }}>
          {text}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={mainStyle.btn} onPress={onPress}>
      <Text style={{ color: 'white', fontWeight: '600', marginTop: 2 }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonMain;
