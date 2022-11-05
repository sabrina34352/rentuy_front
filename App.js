import MainPage from './pages/MainPage/index.js';
import Requests from './pages/Requests/index.js';
import SavedPosts from './pages/SavedPosts/index.js';
import Profile from './pages/Profile/index.js';
import RecentFlats from './components/RecentFlats/index.js';
import Reccomended from './components/Reccomended/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pfp from './assets/Pfp.js';
import HomeSvg from './assets/Home.js';
import RequestsSvg from './assets/Requests.js';
import LikedSvg from './assets/Liked.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MainPageRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Главная' component={MainPage} />
      <Stack.Screen name='Рекомендации' component={Reccomended} />
      <Stack.Screen name='Недавние' component={RecentFlats} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
        {/* <Tab.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
          }}
          name='RecentSearch'
          component={RecentFlats}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
