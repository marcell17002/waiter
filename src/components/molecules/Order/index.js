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
                <View style={{backgroundColor:'#e6e6e6',marginBottom:'5%',marginTop:'5%',justifyContent:'flex-end',borderRadius:10,height:30,width:80,flexDirection:'row'}}>
                    <Text style={{fontSize:40,color:'#24972B',fontWeight:'bold',bottom:11,textAlign:'center'}} onPress={props.minus}>- </Text>
                    <Text style={{fontSize:20,color:'black',fontWeight:'bold',top:3,textAlign:'center'}}> {props.order} </Text>
                    <Text style={{paddingRight:'8%',paddingLeft:'1%',fontSize:25,color:'#24972B',fontWeight:'bold',top:1,textAlign:'center'}} onPress={props.plus}> + </Text>
                </View>
            </View>
            <View style={{width:80, height:90,position:'absolute'}}>
                <Image style={{width:undefined,height:undefined,resizeMode:'contain',flex:1,borderRadius:25}} source={props.img} />
            </View>
        </View>
    </View>
    )
}
export default Order;