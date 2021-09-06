import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/* 
*******************************************************************
*                         Hello World                             *
*******************************************************************

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

/*******************************************************************
*                 Definir horas com props                          *
*******************************************************************/

//Definindo PROPs para o relógio
/*
interface ClockProps {
  date: Date;
}

//Definindo função do relógio

function Clock(props: ClockProps) {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 49, color: "green" }}>Teste Relógio</Text>
      <Text style={{ fontSize: 39, color: "aqua" }}>
        São {props.date.toLocaleTimeString()}.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*******************************************************************
*                 Atualizar horas com State                        *
*******************************************************************/

function Clock() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());

  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 49, color: "white" }}>Teste Relógio</Text>
      <Text style={{ fontSize: 39, color: "aqua" }}>
        São {date.toLocaleTimeString()}.
      </Text>
      <Button title="Atualiza Data" onPress={tick} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App(): JSX.Element {

  return (
    <Clock  />
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
