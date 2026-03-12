import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CountScreen } from './components';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1F2937' }}>
        <CountScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;