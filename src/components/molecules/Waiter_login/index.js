import React from 'react';
import {View, Image, Text} from 'react-native';
const Waiter_login = (props) =>{
    return(
        <View>
          <Image style={{width:300,height:220,marginTop:80, marginLeft: 50}} source={props.img} />
          <Text style={{fontSize:20, textAlign:"center",marginTop:20,marginBottom:20}}>{props.title}</Text>
        </View>
    )
}
export default Waiter_login;