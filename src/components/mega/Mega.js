import React, {Component} from "react";
import { Text } from "react-native";
import estilo from "../estilo";

export default class Mega extends React.Component {

    render() {
        return (
            <Text style={estilo.txtG}>
                Gerador de Numero
            </Text>
        )
    }
}