import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <Buton title="Go to Home Screen"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});