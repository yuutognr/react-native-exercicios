import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        ({ item: p }) => {
            return <Text>{p.id} {p.nome}</Text>
        }
    }

    return ( 
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos
            </Text>
            <FlatList 
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={produtoRender}
            />
        </>
    ) 
}