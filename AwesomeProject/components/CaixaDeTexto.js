import React,{useState} from 'react'
import {View, TextInput, Text} from 'react-native'

const CaixaDeTexto = () => {
    const [nome,setNome]=useState("Jão")
    const changeName = ()=>{

    }
    return (
     
        <View>
           <Text>Digite seu nome:    </Text> 
            <TextInput
            style={{borderWidth:1,
            borderColor:'#000'}}
          placeholder="Jão"
          value={nome}
          onChangeText={text=>setNome(text)}
          autoCapitalize ="none"
          multiline={true}


            
            />
            <Text>Valor Digitado: {nome}</Text>
        </View>
    )
}

export default CaixaDeTexto
