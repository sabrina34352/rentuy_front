import React, { useRef } from 'react';
import { mainStyle } from '../../styles';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TextInput,
  Animated,
  Button,
  Pressable,
} from 'react-native';
import Badge from '../Badge';
import ChatSvg from '../../assets/Chat.js';
import Tag from '../Tag';
import ButtonMain from '../ButtonMain';
import { Video, AVPlaybackStatus } from 'expo-av';
import Tick from '../../assets/Tick';
import DatePicker from '@react-native-community/datetimepicker';

const OneComment = ({ name, date, description }) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderWidth: 0.2,
        borderRadius: 4,
      }}
    >
      <View style={mainStyle.nameWrapper}>
        <Text style={{ fontWeight: '600' }}>{name}</Text>
        <Text style={mainStyle.extraText}>{date}</Text>
        <Text>* * * * *</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};
const FlatDesc = () => {
  const scrollRef = useRef();
  const [status, setStatus] = React.useState({});
  const [showFirst, setShowFirst] = React.useState(false);
  const [showSecond, setShowSecond] = React.useState(false);
  const video = React.useRef(null);
  const [clicked, setClicked] = React.useState(false);
  const handlePress = () => {
    setClicked(!clicked);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  const [date, setDate] = React.useState('09-10-2020');
  const [date2, setDate2] = React.useState('09-10-2020');
  console.log(date);
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} ref={scrollRef}>
        <View style={{ position: 'relative' }}>
          <View style={mainStyle.wrapperBadge}>
            <Badge />
          </View>
          <ScrollView horizontal={true}>
            {[1, 2].map((item) => (
              <View
                key={item}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginHorizontal: 6,
                }}
              >
                <Image
                  style={{ borderRadius: 4 }}
                  source={require('../../assets/mockHouse.png')}
                />
              </View>
            ))}
            <Video
              ref={video}
              style={{ alignSelf: 'center', width: 400, height: 300 }}
              source={require('../../assets/houseTour.mp4')}
              useNativeControls
              resizeMode='contain'
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </ScrollView>
          {/* <View> */}
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
                <Tick />
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
              ].map((item, index) => (
                <View key={index}>
                  <Tag text={item} />
                </View>
              ))}
            </View>
            <Text>
              Светлая и просторная квартира идеально подходящая для семей.
              Имеется телевиз ор, интернет и стиральная машина. С нас - оплата
              квартплаты, с вас - коммунальные услуги. Если заинтересованы в
              квартире, оставляйте заявку и мы запланируем встречу
            </Text>
            <ButtonMain
              text='Заполнить заявку на встречу'
              onPress={handlePress}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Комментарии и отзывы
              </Text>
              {!clicked && (
                <>
                  {[1, 2, 3].map((item) => (
                    <View key={item}>
                      <OneComment
                        name='Мамасаидов Мухаммадсаид'
                        date='18:35, 17 Октября 2022'
                        description='Квартира очень понравилась, соответствует ожиданиям и фотографиям.
                      Быстро оформили договор без всякой бе>готни. Все супер, советую!'
                      />
                    </View>
                  ))}
                </>
              )}
              <TextInput
                placeholder='Ваш комментарий'
                style={{ borderWidth: 0.2, height: 36, borderRadius: 4 }}
              />
            </View>
          </View>
          {clicked && (
            <View
              style={{
                position: 'absolute',
                top: 240,
                left: 1,
                right: 1,
                bottom: 5,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Предполагаемый срок съема квартиры
              </Text>
              <View style={{ marginTop: 15 }}>
                <Text style={mainStyle.extraText}>Заезд</Text>
                {/* <TextInput
                  placeholder='Ноябрь 2022'
                  style={{
                    marginVertical: 10,
                    borderWidth: 0.2,
                    height: 36,
                    borderRadius: 4,
                    paddingLeft: 10,
                  }}
                /> */}
                <Pressable onPress={() => setShowFirst(true)}>
                  <TextInput placeholder={date} value={date} editable={false} />
                </Pressable>
                {showFirst && (
                  <DatePicker
                    // style={styles.datePickerStyle}
                    value={new Date()}
                    mode='date'
                    customStyles={{
                      dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                    }}
                    onChange={(eve, date) => {
                      // setShowFirst(false);
                      console.log(date);
                      setDate(date.toString().slice(0, 10));
                    }}
                  />
                )}
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={mainStyle.extraText}>Выезд</Text>
                <Pressable onPress={() => setShowSecond(true)}>
                  <TextInput placeholder={date2} editable={false} />
                </Pressable>
                {showSecond && (
                  <DatePicker
                    // style={styles.datePickerStyle}
                    value={new Date()}
                    mode='date' // The enum of date, datetime and time
                    customStyles={{
                      dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                    }}
                    onChange={(event, date) => {
                      // setShowSecond(false);
                      setDate2(date.toString().slice(0, 10));
                    }}
                  />
                )}
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>
                  Комментарий к заявке
                </Text>
                <Text style={{ marginTop: 20, marginBottom: 10 }}>
                  Коментарий
                </Text>
                <View
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    padding: 5,
                  }}
                >
                  <TextInput
                    style={{
                      height: 100,
                      justifyContent: 'flex-start',
                      textAlignVertical: 'top',
                    }}
                    underlineColorAndroid='transparent'
                    placeholder='Ваш комментарий'
                    placeholderTextColor='grey'
                    numberOfLines={10}
                    multiline={true}
                  />
                </View>
              </View>
              <ButtonMain
                text='Заполнить заявку на встречу'
                onPress={handlePress}
              />
            </View>
          )}
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlatDesc;
