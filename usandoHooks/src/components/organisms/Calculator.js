import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {CalcButton, DisplayText} from '../atoms';
import {colors, space} from '../../themes';

const BUTTONS = [
  [{label:'C',type:'operator'},{label:'+/-',type:'operator'},{label:'%',type:'operator'},{label:'÷',type:'operator'}],
  [{label:'7'},{label:'8'},{label:'9'},{label:'×',type:'operator'}],
  [{label:'4'},{label:'5'},{label:'6'},{label:'-',type:'operator'}],
  [{label:'1'},{label:'2'},{label:'3'},{label:'+',type:'operator'}],
  [{label:'0'},{label:'.'},{label:'=',type:'equal'}],
];

// Recibe isActive desde CalculatorScreen
const Calculator = ({isActive}) => {

  // useState: valor en pantalla
  const [display, setDisplay] = useState('0');
  // useState: primer operando
  const [firstVal, setFirstVal] = useState(null);
  // useState: operador activo
  const [operator, setOperator] = useState(null);
  // useState: esperar siguiente número
  const [waitNext, setWaitNext] = useState(false);
  // useState: expresión visible arriba
  const [expression, setExpression] = useState('');

  // useEffect: reacciona cuando la pantalla entra o sale del foco
  // Puente con el exterior - como explicó el profesor
  useEffect(() => {
    if (isActive) {
      console.log('Calculadora lista para usar');
    } else {
      console.log('Calculadora en segundo plano');
    }
  }, [isActive]); // dependencia: isActive

  // useEffect: actualiza la expresión cuando cambia el operador
  useEffect(() => {
    if (operator) {
      setExpression(`${firstVal} ${operator}`);
    } else {
      setExpression('');
    }
  }, [operator, firstVal]); // dependencias: operator y firstVal

  // useCallback: memoiza el handler para evitar re-renders innecesarios
  const handlePress = useCallback((label) => {
    if (label === 'C') {
      setDisplay('0');
      setFirstVal(null);
      setOperator(null);
      setWaitNext(false);
      setExpression('');
      return;
    }
    if (label === '+/-') {
      setDisplay(p => String(parseFloat(p) * -1));
      return;
    }
    if (label === '%') {
      setDisplay(p => String(parseFloat(p) / 100));
      return;
    }
    if (['+', '-', '×', '÷'].includes(label)) {
      setFirstVal(parseFloat(display));
      setOperator(label);
      setWaitNext(true);
      return;
    }
    if (label === '=') {
      if (operator && firstVal !== null) {
        const second = parseFloat(display);
        let result;
        switch (operator) {
          case '+': result = firstVal + second; break;
          case '-': result = firstVal - second; break;
          case '×': result = firstVal * second; break;
          case '÷': result = second !== 0 ? firstVal / second : 'Error'; break;
          default:  result = second;
        }
        setExpression(`${firstVal} ${operator} ${second} =`);
        setDisplay(String(result));
        setFirstVal(null);
        setOperator(null);
        setWaitNext(false);
      }
      return;
    }
    if (label === '.') {
      if (waitNext) {setDisplay('0.'); setWaitNext(false); return;}
      if (!display.includes('.')) setDisplay(p => p + '.');
      return;
    }
    if (waitNext) {
      setDisplay(label);
      setWaitNext(false);
    } else {
      setDisplay(p => p === '0' ? label : p + label);
    }
  }, [display, firstVal, operator, waitNext]);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Indicador de estado - muestra concepto de useFocusEffect */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>
          {isActive ? '🟢 Pantalla activa' : '🔴 En segundo plano'}
        </Text>
      </View>

      {/* Pantalla de la calculadora */}
      <View style={styles.display}>
        <DisplayText value={display} sub={expression} />
      </View>

      {/* Botones */}
      <View style={styles.buttons}>
        {BUTTONS.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map(({label, type}) => (
              <CalcButton
                key={label}
                label={label}
                type={type}
                onPress={handlePress}
              />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe:      {flex: 1, backgroundColor: colors.background},
  statusBar: {
    alignItems: 'center',
    paddingTop: space.sm,
    paddingBottom: space.xs,
  },
  statusText: {
    color: colors.subText,
    fontSize: 12,
  },
  display: {
    flex: 1,
    backgroundColor: colors.display,
    justifyContent: 'flex-end',
    padding: space.lg,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttons: {flex: 2, justifyContent: 'center', paddingVertical: space.md},
  row:     {flexDirection: 'row', justifyContent: 'center'},
});

export default Calculator;