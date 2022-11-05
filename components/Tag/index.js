import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View } from 'react-native';
const Tag = ({ text, Icon }) => {
  return (
    <View
      style={{
        borderRadius: 4,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'rgba(90, 70, 222, 0.2)',
        alignSelf: 'flex-start',
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {/* <Icon /> */}
      <Text style={{ fontWeight: '600', color: 'rgba(90, 70, 222, 1)' }}>
        {text}
      </Text>
    </View>
  );
};

export default Tag;
