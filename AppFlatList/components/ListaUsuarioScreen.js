// React
import React from 'react';

// React Native
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';

// React Native Paper
import {
    List
} from 'react-native-paper';

import Usuarios from '../data/Usuarios';

export default props => {

    // Function to read title
    const Item = ({ elemento: item }) => {
        return (   
            <List.Item
                title={item.nome}
                description={item.id.toString()} // Convertendo ID para string
                left={props => 
                    <Image 
                        {...props} 
                        style={styles.tinyLogo} 
                        source={{ uri: item.urlImagem }} 
                    />
                }
                onPress={() => props.navigation.navigate("DetalheUsuario", { id: item.id })}
                style={styles.listItem} // Adicionando estilo ao item da lista
            />
        );
    };

    // App
    return (
        <View style={styles.container}>
            <FlatList
                data={Usuarios}
                renderItem={({ item }) => <Item elemento={item} />}
                keyExtractor={item => item.id.toString()} // Convertendo ID para string
            />
        </View>
    );
}

// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a32727', // Cor de fundo
        marginTop: StatusBar.currentHeight || 0,
    },
    listItem: {
        backgroundColor: '#ffffff', // Cor de fundo do item
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 4, // Sombra para o item
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25, // Arredondar imagem
    },
});
