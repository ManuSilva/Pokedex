import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Provider as PaperProvider } from "react-native-paper";

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
}

 export default function App(): JSX.Element {

   return (
    <Clock date={new Date()} />
     );
 }

*/

/*******************************************************************
*                 Atualizar horas com Hook                         *
*******************************************************************/
/*
function Clock() {

//-> Utilizando useState
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());

  };

  //-> Utilizando useEffect
    useEffect(() => {
    console.log("componentDidMount");
    const timerID = setInterval(tick, 1000);
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timerID);
    };
  }, []);

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

*/

/*******************************************************************
*                      Botão exibe horas                           *
*******************************************************************/

function Clock() {

  //-> Utilizando useState
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());

  };

  //-> Utilizando useEffect
  useEffect(() => {
    console.log("componentDidMount");
    const timerID = setInterval(tick, 1000);
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timerID);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 49, color: "green" }}>Teste Relógio</Text>
      <Text style={{ fontSize: 39, color: "aqua" }}>
        São {date.toLocaleTimeString()}.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// ---> Utilizando botão padrão (é diferente nas plataformas IOS e Android)
/*
export default function App(): JSX.Element {

  const [exibirData, setExibirData] = useState(true);

  const handleButtonPress = () => {
    setExibirData(!exibirData);
  };

  
  return (
    <View style={styles.container}>
      {exibirData && <Clock />}
      <Button title="Exibe Horas" onPress={() => setExibirData(!exibirData)} color="green" />
    </View>
  );

}
*/
// ---> Utilizando botão customizado (é o mesmo nas plataformas IOS e Android)

function App(): JSX.Element {
  const [exibirData, setExibirData] = useState(true);

  const handleButtonPress = () => {
    setExibirData(!exibirData);
  };

  return (
    <View style={styles.container}>
      {exibirData && <Clock />}
      <Button icon="camera" mode="contained" onPress={handleButtonPress}>
        Exibe Data
      </Button>
    </View>
  );
}

export default function PaperApp() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
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
