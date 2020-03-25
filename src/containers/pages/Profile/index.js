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
                    <View style={{marginTop:'10%'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>My Profile</Text>
                        <Separator />
                    </View>
                    <View style={{marginHorizontal:15}}>
                        <View>
                            <Text style={{fontSize:17,marginTop:'2%',color:'Black',textAlign:'center',fontWeight:'bold'}}>Free Account</Text>
                            <View style={{marginLeft:'20%',marginTop:'2%',backgroundColor:'#114C98',height:40,width:200,borderRadius:25}}>
                                <Text style={{fontSize:17,top:7,textAlign:'center',color:'white'}}> PREMIUM</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:'8%'}}>
                            <View>
                                <Image style={{width:50,height:50,borderRadius:50/2}}source={require('../../../assets/pizza1.jpg')}/>
                            </View>
                            <View style={{marginLeft:'5%'}}>
                                <Text style={{fontSize:15,color:'black',fontWeight:'700'}}>Marcell Antonius</Text>
                                <Text style={{fontSize:15,color:'black',fontWeight:'400'}}>+62 895401011469</Text>
                            </View>
                            <View style={{backgroundColor:'#F20C94',marginLeft:'22%',width:50,height:30,borderRadius:25}}>
                                <Text style={{color:'white',paddingHorizontal:12,paddingVertical:5}}>Edit</Text> 
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
                            <Text style={{fontSize:17,top:7,textAlign:'center',color:'white'}}> Sign Out</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{height:54,backgroundColor:'#ffff',flexDirection:'row'}}>
                    <Menu tittle='Home' img={require('../../../assets/icon-home.png')}/>
                    <Menu tittle='Orders' img={require('../../../assets/icon-order.png')}/>
                    <Menu tittle='Profile' img={require('../../../assets/icon-account-active.png')}/>
                </View>
            </View>
        )
    }
}
export default Profile;