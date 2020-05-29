import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView, FlatList, Alert, AsyncStorage} from 'react-native';
import Order from '../../../components/molecules/Order';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class MenuPicker  extends Component{
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
                    <View style={{flexDirection:'row',marginTop:10,paddingVertical:'5%',backgroundColor:'white'}}>
                        <View style={{top:5,paddingLeft:'2%'}}>
                            <Image style={{width:35,height:35,resizeMode:'contain'}}source={require('../../../assets/target.png')}/>
                        </View>
                        <TouchableOpacity onPress={()=> navigate('OrdersStackScreen',{screen:'Location'})} >
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:14,color:'grey',fontWeight:'500'}}>Merchant Location</Text>
                            {this.state.dataSourceToko.map(item =>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>{item.alamat}</Text>
                            )}
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:'2%',flexDirection:'row',marginTop:15,marginBottom:15}}>
                        <View>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Estimating Time</Text>
                            <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>You will get your order in </Text>
                        </View>
                        <View style={{marginLeft:'85%',position:'absolute',alignSelf:'flex-end'}}>    
                            <Text style={{fontSize:20,color:'Blue',fontWeight:'bold'}}>10:00 </Text>
                        </View>
                    </View>
                    <Separator/>
                    <View style={{flexDirection:'row',marginTop:5,paddingVertical:'5%',paddingHorizontal:'2%',backgroundColor:'white',justifyContent:'space-between'}}>
                            <View>
                                <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Order item(s)</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16,color:'#24972B',paddingRight:'2%',fontWeight:'bold'}} onPress={()=>navigate('MerchantPicker')}>+ Add More</Text>
                            </View>
                        </View>
                    <View style={{}}>
                            <FlatList
                                data={this.state.cart}
                                renderItem={({item,index}) =>
                                   { if(item.quantity >0 ){
                                        return <Order price={item.harga} quantity={parseInt(item.quantity)} tittle={item.nama_item} img={item.url_foto}/>;
                                    }
                                }} keyExtractor={item => item.id}
                            />
                    </View>
                </ScrollView>
                <View style={styles.container}>
                    <View style={styles.fab}>
                        <TouchableOpacity onPress={()=>navigate('OrdersStackScreen',{screen:'On-Going Orders',params :{cart :this.state.cart ,dataSourceToko: this.state.dataSourceToko}})}>
                        <View style={styles.containt}>
                            <View style={{paddingLeft:'30%'}}>
                                <Text style={{fontSize:18,color:'white',textAlign:'center'}}>Rp. {totalPrice}</Text>
                                <Text style={{fontSize:20,color:'white',textAlign:'center',fontWeight:'bold'}}>Pre Order Now</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(MenuPicker)

const styles = StyleSheet.create({
    fab:{
      height: 70,
      width: 330,
      borderRadius: 20,
      position: 'absolute',
      bottom: 20,
      right: 20,
      marginRight:'3%',
      justifyContent: 'center',
      backgroundColor:'#31B059',
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
      marginTop:'20%'
    },
  });