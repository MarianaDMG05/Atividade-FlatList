import { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Card, Text } from "react-native-paper";
import Usuarios from "../data/Usuarios";

const getUsuarioPorId = (id) => {
    return Usuarios.find(p => p.id == id);
}

export default ({ route, navigation }) => {
    const [usuario, setUsuario] = useState(getUsuarioPorId(route.params.id));

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Card style={styles.card}>
                <Card.Cover source={{ uri: usuario.urlImagem }} style={styles.image} />
                <Card.Title title={usuario.nome} titleStyle={styles.title} />
                <Card.Content>
                    <Text variant="bodyMedium" style={styles.email}>{usuario.email}</Text>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a32727', 
        padding: 20,
    },
    card: {
        borderRadius: 20,
        elevation: 20,
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 570,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        marginTop: 5,
        color: '#666',
        fontSize: 20,
    },
});
