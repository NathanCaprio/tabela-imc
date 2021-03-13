import React from 'react'
import {TextInput,View,StyleSheet,Text,TouchableHighlight} from 'react-native'


const Resultado = (props) =>{

    return (
    <View style={estilos.bloco}>
<Text>Resultado: {props.resultado}</Text>
</View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom:20
      }
})
export default Resultado
