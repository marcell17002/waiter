import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Merchant = (props) =>{
    return(
        <View style={{marginLeft:16,backgroundColor:'#fafafa'}} >
            <TouchableOpacity onPress={props.OnPress}>
            <View style={{width:150, height:150,borderRadius:14}}>
                <Image style={{width:undefined,height:undefined,resizeMode:'contain',flex:1,borderRadius:4}} source={props.img} />
            </View>
            <Text style={{fontSize:16,textAlign:'center',paddingTop:5,paddingBottom:5,color:'Black' }}>{props.tittle}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Merchant;