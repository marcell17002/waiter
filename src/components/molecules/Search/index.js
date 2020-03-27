import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Search = (props) =>{
    return(
        <View style={{position:'relative',marginBottom:'10%',marginHorizontal:20,marginTop:15,paddingHorizontal:5,color:'grey'}}>
            <TouchableOpacity onPress={props.OnPress}>
            <View style={{position:'relative'}}>
                <View>
                    <Text style={{paddingLeft:90,color:'black',fontWeight:'700',fontSize:16}}>{props.tittle_name}</Text>
                    <Text style={{paddingLeft:90,color:'grey',fontWeight:'400',fontSize:14}}>{props.tittle_loc}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginTop:10}}>
                <View>
                    <Text style={{color:'black',paddingLeft:'27%',paddingTop:10,fontWeight:'bold',fontSize:15}}>{props.distance}</Text>
                </View>  
            </View>
            <View style={{width:80, height:90,position:'absolute'}}>
                <Image style={{width:undefined,height:undefined,resizeMode:'contain',flex:1,borderRadius:25}} source={props.img} />
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default Search;