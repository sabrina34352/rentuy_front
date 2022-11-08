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
} from 'react-native';
import Badge from '../Badge';
import ChatSvg from '../../assets/Chat.js';
import Tag from '../Tag';
import ButtonMain from '../ButtonMain';
import { Video, AVPlaybackStatus } from 'expo-av';
import Tick from '../../assets/Tick';

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
const SecondFlatDesc = () => {
  const scrollRef = useRef();
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  const [clicked, setClicked] = React.useState(false);
  const handlePress = () => {
    setClicked(!clicked);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
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
                  style={{ borderRadius: 4, maxHeight:350 }}
                  source={require('../../assets/mockHouse2.jpg')}
                />
              </View>
            ))}
            <Video
              ref={video}
              style={{ alignSelf: 'center', width: 400, height: 300 }}
              source={require('../../assets/house2.mp4')}
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
                <Text style={{ fontWeight: '600' }}>Асатов Фаррух</Text>
                <Text style={mainStyle.extraText}>Владелец квартиры</Text>
              </View>
              <ChatSvg />
            </View>
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                <Tick />
                Унусобад 5/9/0
              </Text>
              <Text style={{ color: 'gray', fontSize: 14 }}>
                Сдача на 2+ месяцев
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
              Очень Темная и Некрасивая Квартира, но в ней есть все необходимое
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
                        description='Ну такое'
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
                <TextInput
                  placeholder='Ноябрь 2022'
                  style={{
                    marginVertical: 10,
                    borderWidth: 0.2,
                    height: 36,
                    borderRadius: 4,
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={mainStyle.extraText}>Выезд</Text>
                <TextInput
                  placeholder='Февраль 2023'
                  style={{
                    marginVertical: 10,
                    borderWidth: 0.2,
                    height: 36,
                    borderRadius: 4,
                    paddingLeft: 10,
                  }}
                />
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

export default SecondFlatDesc;
