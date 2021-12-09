import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Provider as PaperProvider } from "react-native-paper";

import { routes } from "../Navigation";
import { useStoreActions } from "easy-peasy";



export function Tela_Tipos({ navigation }) {
	const changeType = useStoreActions((state) => state.tipo.toggle);


	const handleButtonPress_water = () => {
		changeType("water");
		navigation.navigate(routes.Lista)
	};

	const handleButtonPress_fire = () => {
		changeType("fire");
		navigation.navigate(routes.Lista)
	};

	const handleButtonPress_grass = () => {
		changeType("grass");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_bug = () => {
		changeType("bug");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_dark = () => {
		changeType("dark");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_dragon = () => {
		changeType("dragon");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_electric = () => {
		changeType("electric");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_fairy = () => {
		changeType("fairy");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_fighting = () => {
		changeType("fighting");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_flying = () => {
		changeType("flying");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_ghost = () => {
		changeType("ghost");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_ground = () => {
		changeType("ground");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_ice = () => {
		changeType("ice");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_normal = () => {
		changeType("normal");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_poison = () => {
		changeType("poison");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_psychic = () => {
		changeType("psychic");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_rock = () => {
		changeType("rock");
		navigation.navigate(routes.Lista)
	};
	const handleButtonPress_steel = () => {
		changeType("steel");
		navigation.navigate(routes.Lista)
	};


	return (

		<PaperProvider>
			<ScrollView style={styles.container}>
				<Button icon="ladybug" mode="contained" color="#dced51" onPress={handleButtonPress_bug} style={styles.item}>Bug</Button>
				<Button icon="brightness-4" mode="contained" color="#82604a" onPress={handleButtonPress_dark} style={styles.item}>Dark</Button>
				<Button icon={require('../assets/dragon.png')} mode="contained" color="#927fe6" onPress={handleButtonPress_dragon} style={styles.item}>Dragon</Button>
				<Button icon="lightning-bolt" mode="contained" color="#f5c038" onPress={handleButtonPress_electric} style={styles.item}>Electric</Button>
				<Button icon="octagram" mode="contained" color="#f4b1f4" onPress={handleButtonPress_fairy} style={styles.item}>Fairy</Button>
				<Button icon="mixed-martial-arts" mode="contained" color="#ff3333" onPress={handleButtonPress_fighting} style={styles.item}>Fighting</Button>
				<Button icon="fire" mode="contained" color="#ff8000" onPress={handleButtonPress_fire} style={styles.item}>Fire</Button>
				<Button icon={require('../assets/flying.png')} mode="contained" color="#a3b3f7" onPress={handleButtonPress_flying} style={styles.item}>Flying</Button>
				<Button icon="ghost" mode="contained" color="#7575bd" onPress={handleButtonPress_ghost} style={styles.item}>Ghost</Button>
				<Button icon={require('../assets/grass.png')} mode="contained" color="#9ae65e" onPress={handleButtonPress_grass} style={styles.item}>Grass</Button>
				<Button icon={require('../assets/ground.png')} mode="contained" color="#d3b357" onPress={handleButtonPress_ground} style={styles.item}>Ground</Button>
				<Button icon="snowflake" mode="contained" color="#a3e7fd" onPress={handleButtonPress_ice} style={styles.item}>Ice</Button>
				<Button icon="circle-double" mode="contained" color="#c8c4bc" onPress={handleButtonPress_normal} style={styles.item}>Normal</Button>
				<Button icon="skull" mode="contained" color="#b463b6" onPress={handleButtonPress_poison} style={styles.item}>Poison</Button>
				<Button icon="eye" mode="contained" color="#ed4882" onPress={handleButtonPress_psychic} style={styles.item}>Psychic</Button>
				<Button icon={require('../assets/rock.jpg')} mode="contained" color="#b9a156" onPress={handleButtonPress_rock} style={styles.item}>Rock</Button>
				<Button icon={require('../assets/steel.png')} mode="contained" color="#b5b5c3" onPress={handleButtonPress_steel} style={styles.item}>Steel</Button>
				<Button icon="water" mode="contained" color="#3366ff" onPress={handleButtonPress_water} style={styles.item}>Water</Button>
				<StatusBar style="auto" />
			</ScrollView>

		</PaperProvider >

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: '#ffffe6',
		alignItens: "center",
		paddingHorizontal: 70,
	},
	item: {
		justifyContent: 'center',
		padding: 5,
		margin: 10,
	},


});

