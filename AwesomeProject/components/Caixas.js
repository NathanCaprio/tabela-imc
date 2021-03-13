import React from 'react'
import {View} from 'react-native'

const Caixas = (props) => {
    return (
        <View style={{width:'100%', flexDirection:'column'
       ,height:300, justifyContent:'center',alignItems:'stretch'}}>
           {
               
               
               props.exibir ?
               <View style={{flex:1}}>
            <View style={{backgroundColor:'#00f',flexGrow:1}}></View> 
            <View style={{backgroundColor:'#00a',flexGrow:1}}></View> 
            <View style={{backgroundColor:'#005',flexGrow:1}}></View>
            </View>
            :
            <View style={{flex:1}}>        
            <View style={{backgroundColor:'#f00',flexGrow:1}}></View> 
            <View style={{backgroundColor:'#a00',flexGrow:1}}></View> 
            <View style={{backgroundColor:'#500',flexGrow:1}}></View> 
            
        </View>
        
           }
           </View>
    )
}

export default Caixas
