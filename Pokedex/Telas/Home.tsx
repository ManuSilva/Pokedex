import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useQuery } from "react-query";

function Cor_tipo(tipo) {
	var cor = '';
	switch (tipo) {
		case 'Bug':
			cor = '#dced51';
			break;
		case 'Dark':
			cor = '#82604a';
			break;
		case 'Dragon':
			cor = '#927fe6';
			break;
		case 'Electric':
			cor = '#f5c038';
			break;
		case 'Fairy':
			cor = '#f4b1f4';
			break;
		case 'Fighting':
			cor = '#ff3333';
			break;
		case 'Fire':
			cor = '#ff8000';
			break;
		case 'Flying':
			cor = '#a3b3f7';
			break;
		case 'Ghost':
			cor = '#7575bd';
			break;
		case 'Grass':
			cor = '#9ae65e';
			break;
		case 'Ground':
			cor = '#d3b357';
			break;
		case 'Ice':
			cor = '#a3e7fd';
			break;
		case 'Normal':
			cor = '#c8c4bc';
			break;
		case 'Poison':
			cor = '#b463b6';
			break;
		case 'Psychic':
			cor = '#ed4882';
			break;
		case 'Rock':
			cor = '#b9a156';
			break;
		case 'Steel':
			cor = '#b5b5c3';
			break;
		case 'Water':
			cor = '#61dafb';
			break;
		default:
			cor = ' ';
	}
	return (cor);
};

export function Tipo({ url }) {

	var texto1 = '';
	var texto2 = '';
	const [currentPage, setCurrentPage] = useState(url);
	const { data: data, error: error, isLoading: isLoading } = useQuery(currentPage, () =>
		fetch(currentPage).then((res) => res.json())
	);

	if (isLoading) {
		return (
			<View style={styles.container}>
				<Text>Carregando...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.container}>
				<Text>Erro ao carregar os dados...</Text>
			</View>
		);
	}

	texto1 = data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1);
	if (Object.keys(data.types).length > 1) {
		texto2 = data.types[1].type.name[0].toUpperCase() + data.types[1].type.name.substring(1);
	}

	let cor_tipo = Cor_tipo(texto1);
	let cor_tipo2 = Cor_tipo(texto2);

	const styles_item = StyleSheet.create({
		container_tipo: {
			flexDirection: 'row',
			justifyContent: 'space-evenly',

		}, tipo1: {
			borderWidth: 1,
			borderColor: "#20232a",
			borderRadius: 6,
			backgroundColor: cor_tipo,
			color: "#20232a",

			paddingHorizontal: 5,
		}, tipo2: {
			borderWidth: 1,
			borderColor: "#20232a",
			borderRadius: 6,
			backgroundColor: cor_tipo2,
			color: "#20232a",

			paddingHorizontal: 5,
		},
	});

	return (
		<View style={styles_item.container_tipo}>
			<Text style={styles_item.tipo1}> {texto1}</Text>
			<Text > </Text>
			{texto2 != '' && <Text style={styles_item.tipo2}> {texto2}</Text>}
		</View>);
}

export function Pokemon({ obj }) {
	const index = obj.url.substring(34).replace('/', '');
	const texto = obj.name[0].toUpperCase() + obj.name.substring(1);
	const imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/' + index + '.png?raw=true';
	const index_show = '#' + index.padStart(3, "0");

	const styles_item = StyleSheet.create({
		item: {
			flexDirection: 'row',
			padding: 5,
			margin: 2,
			borderColor: '#2a4944',
			borderWidth: 1,
			backgroundColor: '#ffebe6',
		}, container_image: {
			flexDirection: 'row',
			padding: 10,
			margin: 2,
			borderColor: '#2a4944',
			borderWidth: 1,
			backgroundColor: '#ffffff',
		}, container_tipo: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
			padding: 5,
			margin: 2,
			flex: 1,
		}, container_header: {
			flexDirection: 'row',
			justifyContent: "space-between",

			flex: 1,
		}, titulo: {
			fontWeight: 'bold',
			fontSize: 15,
		}, container_info: {
			flexDirection: 'column',
			flexWrap: 'wrap',
			padding: 5,
			margin: 2,
			borderColor: '#2a4944',
			borderWidth: 1,
			backgroundColor: '#ffffff',
			flex: 1,
		},
	});


	return (
		<View style={styles_item.item}>
			<View style={styles_item.container_image}>
				<Image
					style={{ width: 100, height: 70 }}
					source={{ uri: imageUrl }} ></Image>
			</View>

			<View style={styles_item.container_info}>
				<View style={styles_item.container_header}>
					<Text style={styles_item.titulo} >  {texto}</Text>
					<Text style={styles_item.titulo} >{index_show}</Text>
				</View>
				<View style={styles_item.container_tipo}>
					<Tipo url={obj.url} />
				</View>
			</View>
		</View>
	);
}

//------------- Segmento da tela com o ScrollView  ---------------------//
export function Tela_Home() {

	const url = "https://pokeapi.co/api/v2/pokemon?offset0&limit=1118";

	const [currentPage, setCurrentPage] = useState(url);

	const { data: data, error: error, isLoading: isLoading } = useQuery(currentPage, () =>
		fetch(currentPage).then((res) => res.json())
	);


	if (isLoading) {
		return (
			<View style={styles.container}>
				<Text>Carregando...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.container}>
				<Text>Erro ao carregar os dados...</Text>
			</View>
		);
	}


	return (
		<View style={styles.container}>

			<FlatList
				data={data.results}
				renderItem={({ item }) => <Pokemon obj={item} />}
				keyExtractor={(item) => item.name}
				extraData={currentPage}
			/>
			<StatusBar style="auto" />
		</View>
	);


}

// --------------------------------------------------------------------//
//                            STYLES
// --------------------------------------------------------------------//

const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignContent: 'center',
		backgroundColor: '#ffffe6',
		padding: 20,
	},
});

