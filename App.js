import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Home from './components/Homescreen';
import Profile from './components/Profile';
import Subject from './createTale/ChooseSubject';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        const icons = {
            Home: 'book',
            Profile: 'user',
        };
        return route.name !== 'Create Tale' ? (
            <FontAwesome name={icons[route.name]} size={size} color={color} />
        ) : null;
    },
    tabBarStyle: { height: 60, backgroundColor: 'white' },
    tabBarShowLabel: false,
});

const createTaleButton = (props) => (
    <TouchableOpacity
        {...props}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#ddd',
        }}
    >
        <MaterialIcons name="add" size={40} color="gray" />
    </TouchableOpacity>
);

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen
                    name="Create Tale"
                    component={Subject}
                    options={{ tabBarButton: createTaleButton }}
                />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
