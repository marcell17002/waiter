import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class EditProfile extends Component{
    render(){
        const { navigate } = this.props.navigation;
        
        return (
            <View style={{flex:1,marginHorizontal:15}}>
                <View style={{alignSelf:'center',marginTop:'5%'}}>
                    <Image style={{width:100,height:100,borderRadius:100/2}}source={require('../../../assets/pizza1.jpg')}/>
                </View>
                <View>
                <TextInput placeholder="Username" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15 }} onChangeText={text => onChangeText(text)}/>
                    <Separator />
                <TextInput placeholder="Password" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15 }} onChangeText={text => onChangeText(text)}/>
                    <Separator />
                <TextInput placeholder="Phone" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15}} onChangeText={text => onChangeText(text)}/>
                    <Separator />
                <TextInput placeholder="Email" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15}} onChangeText={text => onChangeText(text)}/>
                    <Separator />
                </View>
                <View style={{backgroundColor:'#eb3734',paddingHorizontal:12,paddingVertical:11,borderRadius:15,marginTop:15,alignSelf:'flex-end'}}>
                    <Text  style={{fontSize:15,fontWeight:'400',color:'white'}} onPress={()=>navigate('Profile')}>Save profile</Text>
                </View>
            </View>
        )
    }
}
export default EditProfile;