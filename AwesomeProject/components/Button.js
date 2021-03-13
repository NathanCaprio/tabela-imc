import React from 'react'
import {TextInput,View,StyleSheet,Text,TouchableHighlight} from 'react-native'




const Button = (props) =>{
  

  return(
<View style={estilos.bloco}>
<TouchableHighlight
style={estilos.btnCalc}
onPress={()=>props.aoClicar()
 
  }
>
<Text style={estilos.txtBtn}>Calcular IMC</Text>

</TouchableHighlight>
</View>
  )

} 

const estilos = StyleSheet.create({
    txt:{
      width:'100%',
      borderWidth:1,
      borderColor: '#000',
      padding: 10,
      borderRadius:10,
    }
    ,
txtBtn:{
  fontSize:15,
  textTransform:'uppercase',
  color:'#fff',
  borderRadius:10
},
bloco:{
  marginBottom:20
},
btnCalc:{
  backgroundColor:'#048',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
  borderRadius:10
}
})
export default Button
