import React, {Component} from 'react';
import {Text,TextInput, View, Image } from 'react-native';
import Waiter_login from '../../../components/molecules/Waiter_login/';

class Login extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>
                <Waiter_login title='Have an Account?' img={require('../../../assets/login-fam.png')} />
                <View style={{ marginLeft:50,marginRight:50,textAlign: 'center', marginVertical: 5}}>
                <TextInput placeholder="Username" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15, borderColor: 'gray', borderWidth: 1, borderRadius:25}} onChangeText={text => onChangeText(text)}/>
                <TextInput placeholder="Password" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15, borderColor: 'gray', borderWidth: 1, borderRadius:25}} onChangeText={text => onChangeText(text)}/>
                <View style={{backgroundColor:'#432f96', borderRadius:15,marginTop:20,paddingBottom:7,paddingTop:7}}>
                    <Text style={{fontSize:22,fontWeight: 'bold', color:'white',textAlign:'center'}} onPress={() => navigate('Orders')}>Login</Text>
                </View>
                </View>
                {/* <View style={{backgroundColor:'#ffff',marginTop:20,marginLeft:50,marginRight:50}}>
                <Image style={{height:67,width:310}} source={require('./src/assets/login_google.png')} />
                </View> */}
            </View>
            <View style={{height:40,backgroundColor:'#ededed'}}>
                <View style={{alignSelf:'center',marginTop:5}}>
                    <Text style={{fontSize:17, color:'grey'}}  onPress={() => navigate('Register')} >Register Here !</Text>
                </View>
            </View>
            </View>
        )
    }
}
export default Login;