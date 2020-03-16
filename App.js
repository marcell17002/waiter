import React from 'react';
import { StyleSheet, Text,TextInput, View, Image,Button } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
          <Image style={{width:300,height:220,marginTop:120, marginLeft: 50}}source={require('./src/assets/login-fam.png')} />
          <Text style={{fontSize:20, textAlign:"center",marginTop:20}}>Have an Account ?</Text>
        <View style={{flex:1, marginLeft:50,marginTop:20}}>
          <TextInput placeholder="Username" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15, borderColor: 'gray', borderWidth: 1, borderRadius:25}} onChangeText={text => onChangeText(text)}/>
          <TextInput placeholder="Password" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15, borderColor: 'gray', borderWidth: 1, borderRadius:25}} onChangeText={text => onChangeText(text)}/>
          <Button style={{marginTop:30,borderRadius:25}}title="Login"/>
        </View>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
