import React from 'react';
import { useRef } from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import ButtonMain from '../../components/ButtonMain';

const Done = ({ navigation, onPress, pressed }) => {
  const handlePress = () => {
    navigation.navigate('Главная');
    onPress();
    pressed();
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        margin: 100,
      }}
    >
      <Image source={require('../../assets/36.png')} />
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        Договор успешно заключен!
      </Text>
      <ButtonMain text='Назад на главную' onPress={handlePress} />
    </View>
  );
};

const Oformit = ({ onPress, navigation }) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <View style={{ margin: 10, backgroundColor: '#fff' }}>
      {!clicked && (
        <>
          <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
            Мирзо Улугбек 4/5/6
          </Text>
          <View style={{ marginBottom: 20 }}>
            <Text>Имя*</Text>
            <TextInput
              placeholder='Ф.И.О'
              style={{ backgroundColor: '#fff', borderWidth: 0.2, height: 30 }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text>ПИНФЛ*</Text>
            <TextInput
              placeholder='00000 00000 00000'
              style={{ backgroundColor: '#fff', borderWidth: 0.2, height: 30 }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text>Номер кадастра*</Text>
            <TextInput
              placeholder='xx:xx:xx:xx:xx:xxxx:xxxx:xxx'
              style={{ backgroundColor: '#fff', borderWidth: 0.2, height: 30 }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text>ЭЦП*</Text>
            <TextInput
              placeholder='Загрузить'
              style={{ backgroundColor: '#fff', borderWidth: 0.2, height: 30 }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                backgroundColor: '#fff',
                fontWeight: 'bold',
                marginBottom: 10,
              }}
            >
              Личные данные клиента
            </Text>
            <View style={{ marginBottom: 20 }}>
              <Text>Имя*</Text>
              <TextInput
                value='Сабрина Бабакулова'
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 0.2,
                  height: 30,
                }}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text>ПИНФЛ*</Text>
              <TextInput
                placeholder='12498 24803 45323'
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 0.2,
                  height: 30,
                }}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text>ЭЦП*</Text>
              <TextInput
                placeholder='DS10375028424.pfx'
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 0.2,
                  height: 30,
                }}
              />
            </View>
            <ButtonMain
              text='Заключить Договор'
              onPress={() => setClicked(!clicked)}
            />
            <ButtonMain text='Назад' disabled={true} onPress={onPress} />
          </View>
        </>
      )}
      {clicked && (
        <Done
          navigation={navigation}
          onPress={() => setClicked(!clicked)}
          pressed={onPress}
        />
      )}
    </View>
  );
};

const Requests = ({ navigation }) => {
  const scrollRef = useRef();
  const [clicked, setClicked] = React.useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      ref={scrollRef}
    >
      {!clicked && (
        <View
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            borderColor: 'black',
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Image
              style={{
                width: 120,
                height: 100,
                zIndex: -1,
                borderRadius: 10,
                position: 'relative',
                marginRight: 15,
              }}
              source={require('../../assets/mockHouse.png')}
            />
            <View>
              <Text>Квартира: Мирзо Улугбек 4/5/6 </Text>
              <Text>Заезд: Sun Nov 06</Text>
              <Text>Выезд: Web Nov 30</Text>
            </View>
          </View>
          <ButtonMain text='Оформить' onPress={() => setClicked(!clicked)} />
        </View>
      )}
      {clicked && (
        <Oformit onPress={() => setClicked(false)} navigation={navigation} />
      )}
    </ScrollView>
  );
};

export default Requests;
