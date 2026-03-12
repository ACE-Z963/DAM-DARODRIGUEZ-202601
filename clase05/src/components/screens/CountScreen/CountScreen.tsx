import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { stylesCountScreen } from './CountScreen.style';
import { useCalculator } from '../CountScreen/hook';

export const CountScreen: React.FC = () => {
  const { display, handleDigit, handleOperator, handleEquals, handleClear } = useCalculator();

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#1F2937' }}>
      {/* Display */}
      <View style={{ backgroundColor: '#374151', padding: 16, borderRadius: 12, marginBottom: 16, alignItems: 'flex-end' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 'bold' }}>{display}</Text>
      </View>

      {/* Números */}
      {[['7','8','9'],['4','5','6'],['1','2','3'],['0']].map((row, i) => (
        <View key={i} style={{ flexDirection: 'row', gap: 12, marginBottom: 12 }}>
          {row.map(digit => (
            <Pressable key={digit} style={stylesCountScreen.button} onPress={() => handleDigit(digit)}>
              <Text style={stylesCountScreen.labelText}>{digit}</Text>
            </Pressable>
          ))}
        </View>
      ))}

      {/* Operadores */}
      <View style={{ flexDirection: 'row', gap: 12, marginBottom: 12 }}>
        <Pressable style={[stylesCountScreen.button, { backgroundColor: '#4B5563' }]} onPress={() => handleOperator('+')}>
          <Text style={stylesCountScreen.labelText}>+</Text>
        </Pressable>
        <Pressable style={[stylesCountScreen.button, { backgroundColor: '#4B5563' }]} onPress={() => handleOperator('-')}>
          <Text style={stylesCountScreen.labelText}>−</Text>
        </Pressable>
        <Pressable style={[stylesCountScreen.button, { backgroundColor: '#6B7280' }]} onPress={handleEquals}>
          <Text style={stylesCountScreen.labelText}>=</Text>
        </Pressable>
        <Pressable style={[stylesCountScreen.button, { backgroundColor: '#9CA3AF' }]} onPress={handleClear}>
          <Text style={[stylesCountScreen.labelText, { color: '#1F2937' }]}>C</Text>
        </Pressable>
      </View>
    </View>
  );
};