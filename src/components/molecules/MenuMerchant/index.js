import React from 'react';
import {View, Image, Text} from 'react-native';
const MenuMerchant = (props) =>{
    return(
        <View style={{position:'relative',marginHorizontal:20,marginTop:15,paddingHorizontal:5,color:'grey'}}>
            <View style={{position:'relative'}}>
                <View>
                    <Text style={{paddingLeft:90,color:'black',fontWeight:'700',fontSize:16}}>{props.tittle_menu}</Text>
                    <Text style={{paddingLeft:90,color:'grey',fontWeight:'400',fontSize:14}}>{props.tittle_desc}</Text>
                </View>
                <View style={{position:'absolute',marginRight:'4%',marginTop:'2%',alignSelf:'flex-end'}}>
                    <Image style={{width:20,height:20,resizeMode:'contain'}} source={require('../../../assets/love_icon.png')} />
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginTop:10}}>
                <View>
                    <Text style={{color:'black',paddingLeft:'25%',paddingTop:10,fontWeight:'bold',fontSize:15}}>40000</Text>
                </View>  
                <View style={{backgroundColor:'#E3292A',borderRadius:25,height:35,width:60}}>
                    <Text style={{fontSize:16,color:'white',paddingVertical:6,textAlign:'center'}}>Add +</Text>
                </View>
            </View>
            <View style={{width:80, height:90,position:'absolute'}}>
                <Image style={{width:undefined,height:undefined,resizeMode:'contain',flex:1,borderRadius:25}} source={props.img} />
            </View>
        </View>
    )
}
export default MenuMerchant;