import React , {useState} from 'react'
import {SafeAreaView,StyleSheet,View,Text,TouchableHighlight,TextInput,Image} from 'react-native'
import Peso from './components/Peso'
import Altura from './components/Altura'
import Button from './components/Button'
import Resultado from './components/Resultado'
import Tabela from './components/Tabela'
const App = () => {

  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)

  const calcImc=()=>{
    if(peso==0 || peso == NaN){
      alert('informe o peso')
      return
    }
  
  if(altura==0 || altura == NaN){
    alert('informe a altura')
    return
  }
  const r = peso/(Math.pow(altura,2))
  setResultado(r.toFixed(1))
}

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
      <Text>Calculadora de IMC</Text>

    <Peso aoModificar={setPeso} />



      </View>



<View style={estilos.bloco}>

<Altura aoModificar={setAltura} />

</View>
<Button aoClicar={calcImc} />
<Resultado resultado={resultado}/>
<Tabela/>


    </SafeAreaView>
  )
  
  


}

const estilos = StyleSheet.create({
txt:{
  width:'100%',
  borderWidth:1,
  borderColor: '#000',
  padding: 10,
  borderRadius:10,
},
corpo:{
  padding:10
},

btnCalc:{
  backgroundColor:'#048',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
  borderRadius:10
},
txtBtn:{
  fontSize:15,
  textTransform:'uppercase',
  color:'#fff',
  borderRadius:10
},


})

export default App
