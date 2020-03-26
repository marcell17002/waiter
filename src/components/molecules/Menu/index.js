import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Menu = (props) =>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={props.OnPress}>
                <View style={{width:26,height:26}}>
                    <Image source={props.img} />
                </View>
                <Text style={{fontSize:10,color:'#545454',marginTop:4}}>{props.tittle}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Menu;