import { action } from 'easy-peasy';

export const type = {
	normal: {
		url: "1",
		cor: "#e8e6e3",
	},
	fighting: {
		url: "2",
		cor: "#ffb3b3",
	},
	flying: {
		url: "3",
		cor: "#d0d8fb",
	},
	poison: {
		url: "4",
		cor: "#d5a8d6",
	},
	ground: {
		url: "5",
		cor: "#e4d29a",
	},
	rock: {
		url: "6",
		cor: "#d9cca5",
	},
	bug: {
		url: "7",
		cor: "#f5fad1",
	},
	ghost: {
		url: "8",
		cor: "#babade",
	},
	steel: {
		url: "9",
		cor: "#d5d5dd",
	},
	fire: {
		url: "10",
		cor: "#ffddcc",
	},
	water: {
		url: "11",
		cor: "#b3ecff",
	},
	grass: {
		url: "12",
		cor: "#b3ffb3",
	},
	electric: {
		url: "13",
		cor: "#f9d886",
	},
	psychic: {
		url: "14",
		cor: "#f48bb0",
	},
	ice: {
		url: "15",
		cor: "#e6f8fe",
	},
	dragon: {
		url: "16",
		cor: "#c9bff2",
	},
	dark: {
		url: "17",
		cor: "#c7ae9e",
	},
	fairy: {
		url: "18",
		cor: "#f9d2f9",
	},
};


export const ChangeTipo = {
	mode: type.fire,
	toggle: action((state, payload) => {
		switch (payload) {
			case 'fire':
				state.mode = type.fire;
				break;
			case 'water':
				state.mode = type.water;
				break;
			case 'grass':
				state.mode = type.grass;
				break;
			case 'bug':
				state.mode = type.bug;
				break;
			case 'dark':
				state.mode = type.dark;
				break;
			case 'dragon':
				state.mode = type.dragon;
				break;
			case 'electric':
				state.mode = type.electric;
				break;
			case 'fairy':
				state.mode = type.fairy;
				break;
			case 'fighting':
				state.mode = type.fighting;
				break;
			case 'flying':
				state.mode = type.flying;
				break;
			case 'ghost':
				state.mode = type.ghost;
				break;
			case 'ground':
				state.mode = type.ground
				break;
			case 'ice':
				state.mode = type.ice;
				break;
			case 'normal':
				state.mode = type.normal;
				break;
			case 'poison':
				state.mode = type.poison;
				break;
			case 'psychic':
				state.mode = type.psychic;
				break;
			case 'rock':
				state.mode = type.rock;
				break;
			case 'steel':
				state.mode = type.steel;
				break;

			default:
		}
	}),
};

