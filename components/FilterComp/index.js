import React from 'react';
import { mainStyle } from '../../styles';
import { Text, View, TextInput, Switch } from 'react-native';
import { Pressable } from 'react-native';
import ButtonMain from '../ButtonMain';
import Tag from '../Tag';
const FilterComp = ({ handlePress }) => {
  const [text, setText] = React.useState('');
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [pets, setPets] = React.useState(false);
  const [longterm, setLongTerm] = React.useState(false);
  const [self, setSelf] = React.useState(false);
  const [verified, setVerified] = React.useState(false);

  return (
    <View
      style={{
        position: 'absolute',
        top: 150,
        left: 1,
        right: 1,
        bottom: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 6,
          height: 5,
        },
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '600' }}>Фильтры поиска</Text>
      <View style={{ marginTop: 15 }}>
        <TextInput
          placeholder='Поиск районов'
          style={{
            marginVertical: 10,
            borderWidth: 0.2,
            height: 36,
            borderRadius: 4,
            paddingLeft: 10,
          }}
          onChangeText={setText}
        />
      </View>
      {text && <Tag text={text} />}
      <View style={{ marginVertical: 15 }}>
        <Text style={mainStyle.extraText}>Количество Комнат</Text>
        <TextInput
          style={{
            marginVertical: 10,
            borderWidth: 0.2,
            height: 36,
            borderRadius: 4,
            paddingLeft: 10,
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ marginTop: 14 }}>Питомцы</Text>
        <Switch
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{ false: '#767577', true: '#5A46DE' }}
          thumbColor={isEnabled ? '#eee' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setPets(!pets)}
          value={pets}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ marginTop: 14 }}>Долгосрочный съем</Text>
        <Switch
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{ false: '#767577', true: '#5A46DE' }}
          thumbColor={isEnabled ? '#eee' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setLongTerm(!longterm)}
          value={longterm}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ marginTop: 14 }}>Квартиры от собственников</Text>
        <Switch
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{ false: '#767577', true: '#5A46DE' }}
          thumbColor={isEnabled ? '#eee' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setSelf(!self)}
          value={self}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ marginTop: 14 }}>Верифицированные квартиры</Text>
        <Switch
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{ false: '#767577', true: '#5A46DE' }}
          thumbColor={isEnabled ? '#eee' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setVerified(!verified)}
          value={verified}
        />
      </View>
      <ButtonMain text='Применить фильтры' onPress={handlePress} />
    </View>
  );
};

export default FilterComp;
