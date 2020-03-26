import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import MenuMerchant from '../../../components/molecules/MenuMerchant';
import { TouchableOpacity } from 'react-native-gesture-handler';
class MerchantPicker  extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'#ffff'}}>
                <ScrollView>
                    
                    <View style={{position:'relative'}}>
                        <View>
                            <Image style={{width:400,height:300}} source={require('../../../assets/dominoz.jpg')}/>
                        </View>
                        <Text style={{marginLeft:15,marginTop:15,color:'#E3292A',fontWeight:'bold',fontSize:20}}> Dominoz Pizza</Text>
                        <Text style={{marginLeft:15,marginTop:5,color:'grey',fontWeight:'400',fontSize:15}}> Jatinangor Sumedang</Text>
                        
                        <View style={{marginTop:20}}>
                            <MenuMerchant tittle_menu='Pizza Peperroni' tittle_desc='Big deals for all of you' img={require('../../../assets/pizza1.jpg')}/>
                            <MenuMerchant tittle_menu='Pizza Cheese' tittle_desc='Big deals for all of you' img={require('../../../assets/pizza1.jpg')}/>
                            <MenuMerchant tittle_menu='Pizza Delicious' tittle_desc='Big deals for all of you' img={require('../../../assets/pizza1.jpg')}/>
                            <MenuMerchant tittle_menu='Pizza Peperroni' tittle_desc='Big deals for all of you' img={require('../../../assets/pizza1.jpg')}/>
                            <MenuMerchant tittle_menu='Pizza Peperroni' tittle_desc='Big deals for all of you' img={require('../../../assets/pizza1.jpg')}/>
                        
                        </View>

                    </View>
                    
                </ScrollView>
                <View style={styles.container}>
                    <View style={styles.fab}>
                        <TouchableOpacity onPress={() => navigate('MenuPicker')}>
                        <View style={styles.containt}>
                            <View style={{flexDirection:'row',paddingLeft:'10%'}}>
                                <Text style={{fontSize:20,color:'white'}}>2 item </Text>
                                <Text style={{fontSize:20,color:'white'}}>|</Text>
                                <Text style={{fontSize:20,color:'white'}} > 100.000</Text>
                            </View>
                            <View style={{width:25,height:25,marginRight:'5%'}}>
                                <Image style={{width:undefined,height:undefined,flex:1,resizeMode:'contain'}}source={require('../../../assets/ic_shop.png')}/>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default MerchantPicker;

const styles = StyleSheet.create({
    fab:{
      height: 60,
      width: 330,
      borderRadius: 200,
      position: 'absolute',
      bottom: 20,
      right: 20,
      marginRight:'3%',
      justifyContent: 'center',
      backgroundColor:'#a81313',
    },
    containt:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });