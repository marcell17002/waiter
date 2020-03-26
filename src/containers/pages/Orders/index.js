import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import Menu from '../../../components/molecules/Menu';
import History from '../../../components/molecules/History';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class Orders extends Component{
    render(){
        const { navigate } = this.props.navigation;
        
        return (
            <View style={{flex:1}}>
                <ScrollView style={{marginHorizontal:15}}>
                    <View style={{marginTop:'10%'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Ongoing Orders</Text>
                        <Separator />
                    </View>
                    <View style={{marginBottom:'20%'}}>
                        <History  OnPress={()=>navigate('Invoice')} date="5 mniutes ago" status="OnGoing" tittle="Dominoz Pizza" img={require('../../../assets/dominoz.jpg')}/>
                        <History  OnPress={()=>navigate('Invoice')} date="5 mniutes ago" status="OnGoing" tittle="Dominoz Pizza" img={require('../../../assets/dominoz.jpg')}/>
                        <History  OnPress={()=>navigate('Invoice')} date="5 mniutes ago" status="OnGoing" tittle="Dominoz Pizza" img={require('../../../assets/dominoz.jpg')}/>
                    </View>
                </ScrollView>
                <View style={{height:54,backgroundColor:'#ffff',flexDirection:'row'}}>
                    <Menu OnPress={() => navigate('Landing')} tittle='Home' img={require('../../../assets/icon-home.png')}/>
                    <Menu OnPress={() => navigate('Orders')} tittle='Orders' img={require('../../../assets/icon-orders-active.png')}/>
                    <Menu OnPress={() => navigate('Profile')} tittle='Profile' img={require('../../../assets/icon-account.png')}/>
                </View>
            </View>
        )
    }
}
export default Orders;