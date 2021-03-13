import React from 'react'
import {View,Text,FlatList} from 'react-native'
const produtos = [
    {
      id: '001',
      desc:['Mouse','25.00']  
    },
    {
        id: '002',
        desc:['Microfone','30.00']  
      },
      {
        id: '003',
        desc:['Monitor','400.00']  
      },
]
const ListaPlana = () =>{
    return (
    <View>
        <FlatList
            data={produtos}
            keyExtractor={item=>item.id}
            renderItem={({item})=><Text>Descrição: {item.desc[0]} - Valor: {item.desc[1]}</Text>}
        />


    </View>
    )
}






export default ListaPlana