import React from 'react'
import {TextInput,View,StyleSheet,Text} from 'react-native'

const Altura = (props) => {
    return (
        <>
        <Text>Informe sua Altura:</Text>
         <TextInput 
autoFocus={false}
style={estilos.txt}
keyboardType={'numeric'}
onChangeText={text=>props.aoModificar(text)

}

>

</TextInput>   
        </>
    )
    
}

const estilos = StyleSheet.create({
    txt:{
      width:'100%',
      borderWidth:1,
      borderColor: '#000',
      padding: 10,
      borderRadius:10,
    }})
export default Altura
