import React, {Component} from 'react';
class Navbar extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{height:54,backgroundColor:'#ffff',flexDirection:'row'}}>
                <Menu OnPress={() => navigate('Landing')} tittle='Home' img={require('../../../assets/icon-home-active.png')}/>
                <Menu OnPress={() => navigate('Orders')} tittle='Orders' img={require('../../../assets/icon-order.png')}/>
                <Menu OnPress={() => navigate('Profile')} tittle='Profile' img={require('../../../assets/icon-account.png')}/>
            </View>
        )
    }
}
export default Navbar;