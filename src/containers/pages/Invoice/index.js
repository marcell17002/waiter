import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView, FlatList, Alert} from 'react-native';
import Order from '../../../components/molecules/Order';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class Invoice  extends Component{
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
        const { cart } = this.state;
        let totalQuantity = 0;
        let totalPrice = 0;

        cart.forEach((item) => {
          totalQuantity += parseInt(item.quantity);
          totalPrice += parseInt(item.quantity) * item.harga;
        })
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView>
                    <View style={{marginHorizontal:'2%',flexDirection:'row',marginTop:20}}>
                        <View>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Estimating Time</Text>
                            <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>You will get your order in </Text>
                        </View>
                        <View style={{marginLeft:'72%',paddingTop:'3%',position:'absolute',alignSelf:'flex-end'}}>    
                            <CountDown
                                until={60*10}
                                onFinish={() => alert('Selamat Menikmati! ')}
                                onPress={() => alert('Hurry Up')}
                                size={20}
                                digitStyle={{backgroundColor: ' #fafafa'}}
                                timeToShow={['M', 'S']}
                                timeLabels={{m: null, s: null}}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,paddingVertical:'5%',backgroundColor:'white'}}>
                        <View style={{top:5,paddingLeft:'2%'}}>
                            <Image style={{width:35,height:35,resizeMode:'contain'}}source={require('../../../assets/target.png')}/>
                        </View>
                        <TouchableOpacity onPress={()=> navigate('Location')} >
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:14,color:'grey',fontWeight:'500'}}>Merchant Location</Text>
                            {this.state.dataSourceToko.map(item =>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>{item.alamat}</Text>
                            )}
                        </View>
                        </TouchableOpacity>
                    </View>
                    <Separator/>
                    <View style={{flexDirection:'row',paddingVertical:'5%',paddingHorizontal:'2%',backgroundColor:'white'}}>
                        <View>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Order item(s)</Text>
                            <Text style={{fontSize:13,color:'grey',fontWeight:'900'}}>What you have been order </Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={this.state.cart}
                            renderItem={({item,index}) =>
                               { if(item.quantity >0 ){
                                    return <Order price={item.harga} quantity={parseInt(item.quantity)} tittle={item.nama_item} img={item.url_foto}/>;
                                }
                            }} keyExtractor={item => item.id}
                        />   
                    </View>
                    <View style={{marginHorizontal:15,marginTop:'6%',marginBottom:'5%'}}>
                        <Separator/>
                        <View style={{flexDirection:'row',marginTop:'3%',justifyContent:'space-between'}}>
                            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Total</Text>
                            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>{totalPrice}</Text>
                        </View>
                        <View style={{marginTop:'5%'}}>
                            <Separator/>
                            <Text style={{fontSize:13,color:'grey',textAlign:'center',fontWeight:'900'}}>Hurry up your order is waiting! </Text>
                            <Text style={{fontSize:13,color:'grey',textAlign:'center',fontWeight:'900'}}>Check in order for your order list! </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Invoice;
