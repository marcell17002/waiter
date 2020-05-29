import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import Menu from '../../../components/molecules/Menu';
import Properties from '../../../components/molecules/Properties';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class Profile extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ScrollView style={{marginHorizontal:15}}>
                    <View style={{marginHorizontal:15}}>
                        <View>
                            <Text style={{fontSize:17,marginTop:'2%',color:'Black',textAlign:'center',fontWeight:'bold'}}>Free Account</Text>
                            <View style={{marginLeft:'20%',marginTop:'2%',backgroundColor:'#114C98',height:40,width:200,borderRadius:25}}>
                                <Text style={{fontSize:17,paddingVertical:10,textAlign:'center',color:'white'}}> PREMIUM</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:'8%'}}>
                            <View>
                                <Image style={{width:80,height:80,borderRadius:80/2}}source={require('../../../assets/pizza1.jpg')}/>
                            </View>
                            <View style={{marginLeft:'5%',paddingTop:'4%'}}>
                                <Text style={{fontSize:15,color:'black',fontWeight:'700'}} >Marcell Antonius</Text>
                                <Text style={{fontSize:15,color:'black',fontWeight:'400'}}>+62 895401011469</Text>
                            </View>
                            <View style={{backgroundColor:'#F20C94',marginTop:'4%',marginLeft:'80%',width:10,height:30,borderRadius:25,position:'absolute'}}>
                                <Text style={{color:'white',textAlign:'center',paddingVertical:8}} onPress={() => navigate('EditProfile')} >Edit</Text> 
                            </View>
                        </View>
                        <View style={{marginTop:'10%'}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Properties</Text>
                            <View>
                                <Properties title="Kode Promo" img={require('../../../assets/ic_assignment_24px_Polos.png')} />
                                <Separator/>
                                <Properties title="Keuntungan Mu" img={require('../../../assets/ic_assignment_24px_Polos.png')} />
                                <Separator/>
                                <Properties title="Panduan " img={require('../../../assets/ic_assignment_24px_Polos.png')} />
                                <Separator/>
                                <Properties title="Syarat dan Ketentuan" img={require('../../../assets/ic_assignment_24px_Polos.png')} />
                                <Separator/>
                                <Properties title="Pusat Bantuan" img={require('../../../assets/ic_assignment_24px_Polos.png')} />
                                <Separator/>
                            </View>
                        </View>
                        
                        <View style={{marginHorizontal:'15%',marginTop:'15%',backgroundColor:'#FCB11C',height:40,width:240,borderRadius:25}}>
                            <Text style={{fontSize:17,top:7,textAlign:'center',color:'white'}}  onPress={() => navigate('PreStackScreen', { screen: 'Login' })}> Sign Out</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{height:54,backgroundColor:'#ffff',flexDirection:'row'}}>
                    <Menu OnPress={() => navigate('HomeStackScreen', { screen: 'Landing' })} tittle='Home' img={require('../../../assets/icon-home.png')}/>
                    <Menu OnPress={() => navigate('OrdersStackScreen',{screen:'Orders'})} tittle='Orders' img={require('../../../assets/icon-order.png')}/>
                    <Menu OnPress={() => navigate('ProfileStackScreen', { screen: 'Profile'})} tittle='Profile' img={require('../../../assets/icon-account-active.png')}/>
                </View>
            </View>
        )
    }
}
export default Profile;