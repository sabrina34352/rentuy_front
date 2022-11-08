import MainPage from './pages/MainPage/index.js';
import Requests from './pages/Requests/index.js';
import SavedPosts from './pages/SavedPosts/index.js';
import Profile from './pages/Profile/index.js';
import RecentFlats from './components/RecentFlats/index.js';
import Reccomended from './components/Reccomended/index.js';
import FlatDesc from './components/FlatDesc/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pfp from './assets/Pfp.js';
import HomeSvg from './assets/Home.js';
import RequestsSvg from './assets/Requests.js';
import LikedSvg from './assets/Liked.js';
import PfpPicture from './components/Pfp/index.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondFlatDesc from './components/FlatDesc/flat2.js';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MainPageRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <PfpPicture />,
      }}
    >
      <Stack.Screen
        name='Главная'
        options={{
          headerTitle: 'Привет Сабрина!',
        }}
        component={MainPage}
      />
      <Stack.Screen name='Рекомендации' component={Reccomended} />
      <Stack.Screen name='Недавние' component={RecentFlats} />
      <Stack.Screen name='Квартира1' component={FlatDesc} />
      <Stack.Screen name='Квартира2' component={SecondFlatDesc} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => <HomeSvg name='mainPage' />,
            headerShown: false,
          }}
          name='Main'
          component={MainPageRoutes}
        />
        <Tab.Screen
          name='Запросы'
          component={Requests}
          options={{
            tabBarIcon: () => <RequestsSvg name='requestsPage' />,
          }}
        />
        <Tab.Screen
          name='Сохраненное'
          component={SavedPosts}
          options={{
            tabBarIcon: () => <LikedSvg name='savedPage' />,
          }}
        />
        <Tab.Screen
          name='Профиль'
          component={Profile}
          options={{
            tabBarIcon: () => <Pfp name='provilePage' />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
