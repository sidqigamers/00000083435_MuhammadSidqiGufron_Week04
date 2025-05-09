import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Week4 from './Week4'; 

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.identitas}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Muhammad Sidqi Gufron - 00000083435
        </Text>
        <StatusBar style="auto" />
        <Week4 />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  identitas: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(2, 5, 250, 0.5)',
    flex: 1,
    padding: 10, 
  },
});
