import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View, Image } from 'react-native';
import { Pressable } from 'react-native';
const PfpPicture = ({ text, onPress }) => {
  return (
    <Image
      source={require('../../assets/favicon.png')}
      style={{
        width: 40,
        height: 40,
        borderRadius: 50,
      }}
    />
  );
};

export default PfpPicture;
