import React from "react"
import  { SafeAreaView, StyleSheet } from 'react-native';

import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
//import UsuarioLogado from "./components/UsuarioLogado";
//import Familia from "./components/relacao/Familia";
//import Membro from "./components/relacao/Membro";
//import ParImpar from "./components/ParImpar";
//import Diferenciar from "./components/Diferenciar";
//import ContadorV2 from "./components/contador/ContadorV2";
//import Pai from "./components/indireta/Pai";
//import Pai from "./components/direta/Pai";
//import Contador from "./components/Contador";
//import Botao from "./components/Botao";
//import Titulo from "./components/Titulo";
//import MinMax from "./components/MinMax";
//import CompPadrao, { Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'
//import Aleatorio from "./components/Aleatorio";

export default () => (
    <SafeAreaView style = {style.App}>
        <ListaProdutosV2 />
        {/*
        <UsuarioLogado usuario={{nome: 'aaa', email: 'aa@aa.com'}}/>
        <UsuarioLogado usuario={{nome: 'bbb'}}/>
        <UsuarioLogado usuario={{email: 'cc@empresa.com'}}/>
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Joana" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>

        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Guilherme" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2  />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13}/>
        <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto" />
        <MinMax min="3" max="20" />
        <MinMax min="1" max="94" />

        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        */}
        {/*
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */}
        
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})
