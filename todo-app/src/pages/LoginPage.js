import React from 'react';
import {
    View, TextInput, Alert,
    TouchableOpacity, Image, StyleSheet
} from 'react-native';
import ComponentButton from '../components/ButtonComponent';
import Styles from '../styles/Styles';
const logoImage = require('../images/login.png');

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    goTodoPage = () => {
        const { login, password } = this.state;
        if (login === 'admin' && password == 1) {
            const { navigation } = this.props;
            navigation.navigate('TodoPage');
        } else {
            Alert.alert(
                'Login',
                'Usuário ou senha inválido!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
    }

    onChangeTextLogin = (login) => {
        this.setState({
            login
        });
    }

    onChangeTextPassword = (password) => {
        this.setState({
            password
        });
    }

    render() {
        const { login, password } = this.state;
        return (
            <View style={Styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={logoImage} />
                </View>

                <TextInput
                    style={Styles.input}
                    onChangeText={this.onChangeTextLogin}
                    name='login'
                    value={login}
                    autoCapitalize="none"
                    placeholder='Login'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput
                    style={Styles.input}
                    onChangeText={this.onChangeTextPassword}
                    name='password'
                    value={password}
                    placeholder='Senha'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />

                <ComponentButton
                    onPress={this.goTodoPage}
                    text='LOGIN' />

            </View>
        )
    }


};

const styles = StyleSheet.create({
    logoContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
});

export default LoginPage;