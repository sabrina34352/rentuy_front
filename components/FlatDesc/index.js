import React from 'react';
import { mainStyle } from '../../styles';
import { Text, SafeAreaView, View, ScrollView, Image } from 'react-native';
import Badge from '../Badge';
import ChatSvg from '../../assets/Chat.js';
import Tag from '../Tag';
import ButtonMain from '../ButtonMain';
const FlatDesc = () => {
  return (
    <SafeAreaView style={{ fontFamily: 'SF-Pro', backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ position: 'relative' }}>
          <View style={mainStyle.wrapperBadge}>
            <Badge />
          </View>
          <Image source={require('../../assets/mockHouse.png')} />
          <View style={{ margin: 10, padding: 10 }}>
            <View style={mainStyle.nameHolder}>
              <View style={mainStyle.nameWrapper}>
                <Text style={{ fontWeight: '600' }}>
                  Мамасаидов Мухаммадсаид
                </Text>
                <Text style={mainStyle.extraText}>Владелец квартиры</Text>
              </View>
              <ChatSvg />
            </View>
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Мирзо Улугбек 5/9/0
              </Text>
              <Text style={{ color: 'gray', fontSize: 14 }}>
                Сдача на 6+ месяцев
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {[
                'Питомцы',
                'Для семьи',
                '4-х комнатная',
                'Долгосрочный съем',
              ].map((item) => (
                <Tag text={item} />
              ))}
            </View>
            <Text>
              Светлая и просторная квартира идеально подходящая для семей.
              Имеется телевизор, интернет и стиральная машина. С нас - оплата
              квартплаты, с вас - коммунальные услуги. Если заинтересованы в
              квартире, оставляйте заявку и мы запланируем встречу
            </Text>
            <ButtonMain text='Заполнить заявку на встречу' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlatDesc;
