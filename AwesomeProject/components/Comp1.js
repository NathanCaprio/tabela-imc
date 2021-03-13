import React from 'react'
import {Text,StyleSheet, View} from 'react-native'
import Estilo from'./styles/Style'


let Comp1 = (props)=>{
    return(
        <View>
       <Text style={Estilo.textoCursos}>Curso de {props.curso}</Text>

        </View>
    )
}



export default Comp1