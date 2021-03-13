import React, {useState} from 'react'
import {View,Text,Button,Modal, StyleSheet} from 'react-native'

const Mod = () =>{
const[visible,setVisible] = useState(true)
const Estilos = StyleSheet.create({
    cor:{
    backgroundColor: '#000',
    padding:20,
    margin:20,
    borderRadius:20,
    elevation:10

    }
})

    return(
        <View>
            <View >
            <Modal style={Estilos.cor}
            animationType="fade"
                transparent={true}
                visible={visible}
                style={Estilos.cor}
                
            >
                
                <Text>Cursos</Text>
                <Text>React Native</Text>   
                <Button
                title="Fechar"
                onPress={()=>{setVisible(!visible)}}
                />
                </Modal>
                
            </View>

   
               
                <Button
                
                title="Mostrar"
                onPress={()=>{setVisible(true)}}
                />
        </View>
        

    )
   
}

export default Mod