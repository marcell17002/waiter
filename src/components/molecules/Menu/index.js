import React from 'react';
import {View, Image, Text} from 'react-native';
const Menu = (props) =>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:26,height:26}}>
                <Image source={props.img} />
            </View>
            <Text style={{fontSize:10,color:'#545454',marginTop:4}}>{props.tittle}</Text>
        </View>
    )
}
export default Menu;