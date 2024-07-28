import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'

import Detalhes from "../components/Detalhes";



export default function Filmes({ data }){

    const [visibleModal, setVisibleModal] = useState(false)

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                source={{uri: data.foto }}
                style={styles.capa}
                />
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.txtBotao}>Leia mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },

    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2
    },
    
    titulo:{
        fontSize: 24,
        padding: 10
    },

    capa:{
        height: 250,
        zIndex: 2
    },

    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -35,
        zIndex: 2,
    },

    botao:{
        backgroundColor: '#09A6FF',
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    txtBotao: {
        color: '#FFF',
        textAlign: 'center'
    }
})
