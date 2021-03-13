import React from 'react'
import {TextInput,View,StyleSheet,Text,TouchableHighlight,Image} from 'react-native'



const Tabela = () =>{

 return (
<View style={estilos.bloco}>
<Image
source={require('../assets/images.png')}
style={estilos.tabela}
/>

</View>
 )

}

const estilos = StyleSheet.create({

    tabela:{
        width:'100%',
        resizeMode:'contain',
        marginTop:0
      
      
      },
      bloco:{
         marginBottom:20
             }
    

})
 
export default Tabela
