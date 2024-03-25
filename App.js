import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './gatos';
import Cliques from './cliques';

export default function App() {
  return (
    <View style={styles.container}>
      <Cliques/>
      <Text>Open up App.js to start working on your app!</Text>
      <Gato 
            idade={2}/>
      <Gato
            idade={4}/>
      <Gato 
            idade={8}/>
      <StatusBar style="auto" 
            idade={6}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
