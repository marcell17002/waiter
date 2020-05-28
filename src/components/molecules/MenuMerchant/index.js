import React from 'react';
import {View, Image, Text} from 'react-native';
const MenuMerchant = (props) =>{
    return(
        <View style={{position:'relative',marginHorizontal:20,marginTop:20,marginBottom:'5%',paddingHorizontal:5,color:'grey'}}>
            <View style={{position:'relative'}}>
                <View style={{paddingVertical:2}}>
                    <Text style={{paddingLeft:90,color:'black',fontWeight:'700',fontSize:16}}>{props.tittle_menu}</Text>
                    <Text style={{paddingLeft:90,color:'grey',fontWeight:'400',fontSize:14}}>{props.tittle_desc}</Text>
                </View>
                <View style={{position:'absolute',marginRight:'4%',marginTop:'2%',alignSelf:'flex-end'}}>
                    <Image style={{width:20,height:20,resizeMode:'contain'}} source={require('../../../assets/love_icon.png')} />
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginTop:10}}>
                <View>
                    <Text style={{color:'black',paddingLeft:'25%',paddingTop:10,fontWeight:'bold',fontSize:15}}> {props.price}</Text>
                </View>  

                <View style={{backgroundColor:'#e6e6e6',justifyContent:'flex-end',borderRadius:10,paddingTop:5,height:30,width:80}}>
                    <View style={{flexDirection:'row',position:'relative',marginLeft:'7%'}}>
                        <View style={{}}>
                            <Text style={{paddingLeft:'1%',top:5,fontSize:40,color:'#24972B',fontWeight:'bold'}} onPress={props.minus}>- </Text>
                        </View>
                        <View style={{}} >
                            <Text style={{fontSize:20,paddingTop:20,color:'black',fontWeight:'bold'}}> {props.order} </Text>
                        </View>
                        <View style={{position:'absolute',marginLeft:'65%'}}>
                        <Text style={{paddingRight:'2%',paddingTop:18,fontSize:25,color:'#24972B'}} onPress={props.plus}> + </Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{width:80, height:90,position:'absolute'}}>
                <Image style={{width:undefined,height:undefined,resizeMode:'contain',flex:1,borderRadius:25}} source={{uri : props.img}} />
            </View>
        </View>
    )
}
export default MenuMerchant;