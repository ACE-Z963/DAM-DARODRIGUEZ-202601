import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, space} from '../../themes';

export const CalcButton = ({label, onPress, type = 'default'}) => {
  const bgColor =
    type === 'operator' ? colors.buttonOperator :
    type === 'equal'    ? colors.buttonEqual :
                          colors.button;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={() => onPress(label)}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export const DisplayText = ({value, sub}) => (
  <>
    {sub ? <Text style={styles.subText}>{sub}</Text> : null}
    <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
      {value}
    </Text>
  </>
);

const styles = StyleSheet.create({
  button: {
    width: space.buttonSize,
    height: space.buttonSize,
    borderRadius: space.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    margin: space.sm,
  },
  label:       {color: colors.buttonText, fontSize: 26, fontWeight: '600'},
  displayText: {color: colors.displayText, fontSize: 52, fontWeight: '300', textAlign: 'right'},
  subText:     {color: colors.subText, fontSize: 22, textAlign: 'right', marginBottom: space.xs},
});