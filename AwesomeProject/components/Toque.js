import React, {useState} from 'react'
import {View,Text,StyleSheet,TouchableHighlight,TouchableOpacity} from 'react-native'
const Toque = () => {
  
    const [cont,setCont] = useState(0)
    const contar = () =>{
        setCont(cont+1)
    }
    return (
       <View>
           <TouchableOpacity
           style={estilos.botao}
           onPress={contar}
           underlayColor="#fff"
           >
                <Text>TouchableHighlight</Text>
           </TouchableOpacity>
           <Text>{cont}</Text>
           <TouchableHighlight
           style={estilos.botao}
           onPress={contar}
           underlayColor="#fff"
           >
                <Text>TouchableHighlight</Text>
           </TouchableHighlight>
           <Text>{cont}</Text>
       </View>
    )
}

const estilos = StyleSheet.create({
botao:{
    alignItems: "center",
    backgroundColor:"#ccc",
    padding:10

}    

})
export default Toque
