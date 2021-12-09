import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,  Image } from 'react-native';
import { useQuery } from "react-query";


export function Efeito({ url }) {

	var texto = '';
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

	texto = data.effect_entries[0].effect;

	const styles_item = StyleSheet.create({
		desc: {
			fontSize: 10,

		},
	});

	return (
		<View >
			<Text style={styles_item.desc}> {texto}</Text>
		</View>);
}

export function Pokemon({ obj }) {
	/*	const index = obj.url.substring(34).replace('/', '');
		
		
		const index_show = '#' + index.padStart(3, "0");
	*/
	const texto = obj.name[0].toUpperCase() + obj.name.substring(1);
	const imageUrl = "https://github.com/PokeAPI/sprites/blob/master/sprites/items/" + obj.name + ".png?raw=true";
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
			alignItems: 'center',
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
					style={{ width: 50, height: 50 }}
					source={{ uri: imageUrl }} ></Image>
			</View>
			<View style={styles_item.container_info}>
				<Text style={styles_item.titulo} >  {texto}</Text>
				<View style={styles_item.container_tipo}>
					<Efeito url={obj.url} />
				</View>
			</View>

		</View>
	);
}

//------------- Segmento da tela com o ScrollView  ---------------------//
export function Tela_Item() {

	const url = "https://pokeapi.co/api/v2/item?offset=0&limit=954";

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

