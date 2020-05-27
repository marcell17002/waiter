import React from 'react';
import {View, Image, Text} from 'react-native';
const Order = (props) =>{
    return(
        <View style={{backgroundColor:'white'}}>
        <View style={{position:'relative',marginHorizontal:20,marginTop:15,paddingHorizontal:5,color:'grey'}}>
            <View>
             <Text style={{paddingLeft:'25%',paddingTop:'2%',color:'black',fontWeight:'700',fontSize:16}}>{props.tittle}</Text>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginTop:10}}>
                <View>
                    <Text style={{color:'black',paddingLeft:'25%',paddingTop:10,fontWeight:'bold',fontSize:15}}>{props.price}</Text>
                </View>  
                <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginTop:10}}>
                    <View style={{backgroundColor:'#E3292A',borderRadius:25,height:35,width:60}}>
                        <Text style={{fontSize:16,color:'white',paddingVertical:6,textAlign:'center'}}>{props.quantity}</Text>
                    </View>
                </View>
            </View>
            <View style={{width:80, height:90,position:'absolute'}}>
                <Image style={{width:undefined,height:undefined,resizeMode:'contain',flex:1,borderRadius:25}} source={{uri : props.img}} />
            </View>
        </View>
    </View>
    )
}
export default Order;