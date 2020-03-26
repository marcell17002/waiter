import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView, Button, Alert} from 'react-native';
import Order from '../../../components/molecules/Order';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class Invoice  extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView>
                    <View style={{marginHorizontal:'2%',flexDirection:'row',marginTop:40}}>
                        <View>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Estimating Time</Text>
                            <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>You will get your order in </Text>
                        </View>
                        <View style={{marginLeft:'45%',alignSelf:'flex-end'}}>    
                            <Text style={{fontSize:20,color:'Blue',fontWeight:'bold'}}>20:00 </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,paddingVertical:'5%',backgroundColor:'white'}}>
                        <View style={{top:5,paddingLeft:'2%'}}>
                            <Image style={{width:35,height:35,resizeMode:'contain'}}source={require('../../../assets/target.png')}/>
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:14,color:'grey',fontWeight:'500'}}>Merchant Location</Text>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Jl. Jatinangor Sumedang No.179</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,paddingVertical:'5%',paddingHorizontal:'2%',backgroundColor:'white',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Order item(s)</Text>
                            <Text style={{fontSize:13,color:'grey',fontWeight:'900'}}>What you have been order </Text>
                        </View>
                    </View>
                    <View>
                        <Order tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                        <Order tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                        <Order tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                        <Order tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                        <Order tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                    </View>
                    <View style={{marginHorizontal:15,marginTop:'6%',marginBottom:'5%'}}>
                        <Separator/>
                        <View style={{flexDirection:'row',marginTop:'3%',justifyContent:'space-between'}}>
                            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Total</Text>
                            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>100.000</Text>
                        </View>
                        <View style={{marginTop:'5%'}}>
                            <Separator/>
                            <Text style={{fontSize:13,color:'grey',textAlign:'center',fontWeight:'900'}}>Hurry up your order is waiting! </Text>
                            <Text style={{fontSize:13,color:'grey',textAlign:'center',fontWeight:'900'}}>Check in order for your order list! </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Invoice;
