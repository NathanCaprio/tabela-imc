import React , {useState} from 'react'
import {SafeAreaView,StyleSheet,View,Text,TouchableHighlight,TextInput,Image} from 'react-native'
export default props =>{
    return(
        <>
       
  
      <View style={estilos.bloco}>
      <Text>Informe seu Peso:</Text>
  
      <TextInput 
      autoFocus={true}
      keyboardType={'numeric'}
     
      style={estilos.txt}
      onChangeText={text=>props.aoModificar(text)}
      
      >
      
      </TextInput>
  
      </View>  
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