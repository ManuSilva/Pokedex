import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/*
//---> Hello Word
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 59, color: "green" }}>Hello World</Text>
      <Text style={{ fontSize: 29, color: "aqua" }}>Made By : Manuzinha</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
//Definindo PROPs para o relógio
interface ClockProps {
  date: Date;
}

//Definindo função do relógio
function Clock(props: ClockProps) {

  return (
    <View style={styles.container}>
    
      <Text style={{ fontSize: 49, color: "green" }}>Teste Relógio</Text>
      <Text style={{ fontSize: 39, color: "pink" }}>
        São {props.date.toLocaleTimeString()}.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App(): JSX.Element {
  <meta charSet= "UTF-8" />

  return (
    <Clock date={new Date()} />
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C357C7',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
