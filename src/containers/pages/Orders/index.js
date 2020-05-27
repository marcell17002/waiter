import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import Menu from '../../../components/molecules/Menu';
import History from '../../../components/molecules/History';

class Orders extends Component{
    constructor(props) {
        super(props);
        this.state ={
            cart:[],
            dataSourceToko:[],
        };
      }
      componentDidMount(){ 
        const { cart } = this.props.route.params;
        const { dataSourceToko } = this.props.route.params;
        this.setState({cart : cart ,dataSourceToko: dataSourceToko});
        }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ScrollView style={{marginHorizontal:15}}>
                    <View style={{marginBottom:'20%'}}>
                        {this.state.dataSourceToko.map(item =>
                        <History  date="2 mniutes ago" status="OnGoing" tittle={item.nama_toko} img={item.url_foto}/>
                        )}
                    </View>
                </ScrollView>
                <View style={{height:54,backgroundColor:'#ffff',flexDirection:'row'}}>
                    <Menu OnPress={() => navigate('HomeStackScreen', { screen: 'Landing' })} tittle='Home' img={require('../../../assets/icon-home.png')}/>
                    <Menu OnPress={() => navigate('OrdersStackScreen',{screen:'Orders'})} tittle='Orders' img={require('../../../assets/icon-orders-active.png')}/>
                    <Menu OnPress={() => navigate('ProfileStackScreen', { screen: 'Profile'})} tittle='Profile' img={require('../../../assets/icon-account.png')}/>
                </View>
            </View>
        )
    }
}
export default Orders;