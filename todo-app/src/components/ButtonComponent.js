import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from '../styles/Styles';
const ButtonComponent = ({text, onPress}) => (
    <TouchableOpacity
        style={Styles.buttonContainer}
        onPress={onPress}>
        <Text style={Styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);


export default ButtonComponent;