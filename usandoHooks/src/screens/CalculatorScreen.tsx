import React, {useCallback, useState, useEffect} from 'react';
import {AppState} from 'react-native';
import {Calculator} from '../components/organisms';

const CalculatorScreen = () => {
  const [isActive, setIsActive] = useState(true);

  // Simulamos useFocusEffect usando AppState de React Native
  // Escucha cuando la app pasa a primer plano o segundo plano
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextState => {
      if (nextState === 'active') {
        setIsActive(true);
        console.log('Pantalla entró al foco');
      } else {
        setIsActive(false);
        console.log('Pantalla salió del foco');
      }
    });

    // Limpieza del efecto
    return () => subscription.remove();
  }, []); // [] = solo se ejecuta una vez al montar

  return <Calculator isActive={isActive} />;
};

export default CalculatorScreen;