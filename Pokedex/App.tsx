import * as React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from "./Navigation";
import { Ionicons } from '@expo/vector-icons';

import { StoreProvider } from "easy-peasy";

import { store } from "./easy-peasy/store";
import { Tela_Home } from "./Telas/Home";
import { Tela_Lista } from "./Telas/Lista";
import { Tela_Tipos } from "./Telas/tipos";
import { Tela_Item } from "./Telas/item";

// Create client
const queryClient = new QueryClient();

// Create Stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tipos() {
	return (
		<Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: '#ff4d4d',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}}>
			<Stack.Screen name={routes.tipos} component={Tela_Tipos} options={{ title: 'Tipos' }}/>
			<Stack.Screen name={routes.Lista} component={Tela_Lista} options={{ title: 'Pokedex' }}/>
		</Stack.Navigator>
	);
}

// --------------------------------------------------------------------//
//                            Executar APP
// --------------------------------------------------------------------//

export default function App() {
	return (
		<StoreProvider store={store}>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;
								if (route.name === routes.Home) {
									iconName = focused
										? 'home-sharp'
										: 'home-outline';
								} else if (route.name === routes.tipos) {
									iconName = focused
										? 'list-sharp'
										: 'list-outline';
								} else if (route.name === routes.item) {
									iconName = focused
										? 'apps-sharp'
										: 'apps-outline';
								}

								return <Ionicons name={iconName} size={size} color={color} />;
							},
						})}
						tabBarOptions={{
							activeTintColor: 'tomato',
							inactiveTintColor: 'gray',
						}}>
						<Tab.Screen name={routes.Home} component={Tela_Home} options={{
							headerStyle: {
								backgroundColor: '#ff4d4d',
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold',
							},
						}} />
						<Tab.Screen name={routes.tipos} component={Tipos} options={{ headerShown: false, title: 'Tipos' }} />
						<Tab.Screen name={routes.item} component={Tela_Item} options={{
							headerStyle: {
								backgroundColor: '#ff4d4d',
							},
							headerTintColor: '#fff',
							title: 'Itens',
							headerTitleStyle: {
								fontWeight: 'bold',
							},
						}} />
					</Tab.Navigator>

				</NavigationContainer>
			</QueryClientProvider>
		</StoreProvider>
	);
}

