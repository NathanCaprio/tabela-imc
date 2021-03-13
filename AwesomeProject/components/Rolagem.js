import React,{useState} from 'react'
import {View, TextInput, Text, ScrollView, RefreshControl} from 'react-native'

 const Rolagem = () => {
  const [atualizando,setAtualizando] = useState(false)
  const isUpdating = ()=>{
    //código de atualização
    


      setAtualizando(true)
      setTimeout(()=>{setAtualizando(false)},3000);
  }

    return (


      <View style={{flex: 1}}>
          <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={atualizando}
              onRefresh={isUpdating}
            
            />
          }
          >
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur scelerisque nisl, ut rutrum purus placerat id. Integer neque libero, iaculis id gravida eu, tempor in metus. Etiam vitae euismod ligula. Ut ante turpis, condimentum ac mauris ac, finibus condimentum tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur imperdiet, nibh vitae aliquam pulvinar, dui elit tincidunt risus, in interdum purus purus ac augue. Nunc et enim magna.

Donec gravida venenatis nibh sed auctor. Praesent justo est, pretium accumsan sagittis scelerisque, finibus a odio. Curabitur congue dignissim placerat. Duis imperdiet fringilla tristique. Sed eget facilisis est, at tincidunt libero. Donec blandit turpis quis diam iaculis ornare. Suspendisse vel diam id arcu sollicitudin hendrerit eget nec massa.

Donec sollicitudin, dolor et pretium tristique, massa eros dapibus risus, id mattis libero tellus a nunc. Pellentesque dictum tincidunt nisi. Mauris ornare sed dolor ut interdum. Donec porta dictum aliquet. Donec ultrices nibh sit amet ipsum cursus, vitae eleifend nisl gravida. Mauris commodo arcu nec massa egestas, vitae venenatis purus maximus. Donec vulputate diam ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et metus vitae ex mollis volutpat. Etiam dignissim purus sed ante eleifend, in finibus nibh vulputate. Donec lorem lorem, ultricies vel est eget, dapibus euismod ex. Sed eget tincidunt leo.

Morbi at augue sit amet odio aliquet hendrerit id ut velit. Nulla blandit dolor vel elit pellentesque, sit amet efficitur mi venenatis. Integer a ornare sapien, non mollis nunc. Pellentesque ullamcorper tempus sapien sed vulputate. Nunc malesuada, lacus in pharetra sollicitudin, justo nibh hendrerit nibh, suscipit vestibulum justo justo id velit. Fusce sed erat non erat volutpat faucibus. Integer a urna dictum, feugiat diam in, pulvinar lectus. Etiam consequat eros eu libero auctor fermentum. Phasellus molestie sit amet eros nec commodo. Sed sollicitudin turpis eu mauris imperdiet, ut vehicula lectus hendrerit. Phasellus pellentesque sapien ante, in consequat tellus pharetra quis. Integer et lorem vitae sem pulvinar faucibus.

Suspendisse ut sem et diam vestibulum blandit. Quisque non sem ut diam pulvinar aliquet. Aenean semper gravida magna. Nullam nec urna imperdiet, porta enim at, feugiat tortor. Curabitur nec est viverra nulla viverra vestibulum id et elit. Suspendisse eu varius nulla, non ultrices justo. Fusce accumsan, eros eu pulvinar gravida, leo ex malesuada odio, sit amet lobortis massa diam eu mauris. Vivamus vestibulum varius mi, ut maximus sapien sodales quis. Donec et sem molestie, faucibus nulla fringilla, rutrum diam. Nulla quis elit enim. Phasellus ut mollis lectus. Vivamus hendrerit sollicitudin felis at porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla cursus scelerisque libero, efficitur scelerisque justo lacinia vitae. Maecenas ullamcorper fermentum neque eu iaculis.
            </Text>

          </ScrollView>
      </View>
    )
}

export default Rolagem