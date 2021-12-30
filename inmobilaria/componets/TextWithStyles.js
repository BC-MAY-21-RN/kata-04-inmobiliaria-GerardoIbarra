import React from 'react';
import {Text} from 'react-native';
import {styles as defaultStyles} from './stayled';

const TextWithStyles = (props) => {
  const { name, styles, value } = props;

  return (
    <Text style={styles || defaultStyles.palabras}>
      {name}: {value}
    </Text>
  )
}

export default TextWithStyles;
