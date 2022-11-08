import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { mainStyle } from '../../styles';
import React from 'react';
import PfpPicture from '../../components/Pfp';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={mainStyle.wrapperBlock}>
          <View style={mainStyle.headerBlocks}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              Моя квартира
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderWidth: 0.5,
              borderRadius: 6,
              padding: 10,
            }}
          >
            <Image
              source={require('../../assets/mockHouse.png')}
              style={{
                width: 70,
                height: 50,
                borderRadius: 6,
              }}
            />
            <View style={{ marginLeft: 10, marginTop: 7 }}>
              <Text>Ул. Мирзо Улугбек 50/50</Text>
              <Text style={mainStyle.extraText}>
                Владелец: Сабрина Бабакулова
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                borderBottomWidth: 0.2,
                borderColor: 'gray',
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              Статус оплат по квартире
            </Text>
            <Text
              style={{
                borderBottomWidth: 0.2,
                borderColor: 'gray',
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              Чат с владельцем квартиры
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
            }}
          >
            <PfpPicture />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Сабрина Бабакулова
              </Text>
              <Text style={mainStyle.extraText}>+998949452411</Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                borderBottomWidth: 0.2,
                borderColor: 'gray',
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              Личная информация
            </Text>
            <Text
              style={{
                borderBottomWidth: 0.2,
                borderColor: 'gray',
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              Статус регистрации
            </Text>
            <View
              style={{
                borderBottomWidth: 0.2,
                borderColor: 'gray',
                paddingBottom: 20,
                paddingTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text>Смена пароля</Text>
              <Text>{'>'}</Text>
            </View>
            <Text
              style={{
                borderBottomWidth: 0.2,
                borderColor: 'gray',
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              Уведомления
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
