import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import Search from '../../../components/molecules/Search';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Searching  extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'#ffff'}}>
                <ScrollView>
                    
                    <View style={{position:'relative'}}>
                        <Text style={{marginLeft:15,marginTop:5,color:'grey',textAlign:'center',top:10,fontWeight:'400',fontSize:15}}> your search related to</Text>
                        <View style={{marginTop:20}}>
                            <Search tittle_name='Dominoz Jatinangor' OnPress={()=> navigate('HomeStackScreen',{screen : 'MerchantPicker'})} tittle_loc='Jatinangor Sumedang' distance='1.5km' img={require('../../../assets/pizza1.jpg')}/>
                            <Search tittle_name='Dimsum '  OnPress={()=> navigate('HomeStackScreen',{screen : 'MerchantPicker'})} tittle_loc='Pasir Koja Bandung' distance='20.3 km' img={require('../../../assets/dimsum.jpg')}/>
                            <Search tittle_name='Ayam Nelongso'  OnPress={()=> navigate('HomeStackScreen',{screen : 'MerchantPicker'})} tittle_loc='Sayang Sumedang' distance='0.25 ft' img={require('../../../assets/ayam_nelongso.jpg')}/>
                            <Search tittle_name='Telor Gulung'  OnPress={()=> navigate('HomeStackScreen',{screen : 'MerchantPicker'})} tittle_loc='Ciseke' distance='500 m' img={require('../../../assets/telor_gulung.jpg')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Searching;
