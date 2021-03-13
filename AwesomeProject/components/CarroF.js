import {View,Text,Button, Switch} from 'react-native'
import React,{useState} from 'react'

const CarroF = (props) => {
    const [ligado,setLigado] = useState(true)
    const toggleLigado = () =>{
        setLigado(!ligado)
    }
    return (
        <View>
        <Text>Carro:{props.nome} - Ligado:{ligado? 'Sim':'Não'}</Text>              
        <Switch
        trackColor={{false:'#777', true:"#8bf"}}
        thumbColor={ligado ? '#00f' : '#444'}
        value={ligado}
        onValueChange={toggleLigado
           

        }
        
        />

           
        </View>
    )
}

export default CarroF
