import React from 'react';
import {View, Image, Text} from 'react-native';
const Properties = (props) =>{
    return(
        <View style={{flexDirection:'row',position:'relative',marginTop:'5%'}}>
            <View>
                <Image style={{width:25,height:25}}source={props.img}/>
            </View>
            <Text style={{paddingLeft:'5%',fontSize:16,color:'black',fontWeight:'800'}}>{props.title}</Text>
            <View style={{position:'absolute',marginLeft:'90%'}}>
                <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>></Text>
            </View>
        </View>
    )
}
export default Properties;
