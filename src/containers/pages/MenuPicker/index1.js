import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView, FlatList, Alert} from 'react-native';
import Order from '../../../components/molecules/Order';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class MenuPicker  extends Component{
    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            cartItems:[],
        };
        console.log(this.props.cartItems)
      }
    render(){
        const { navigate } = this.props.navigation;
        return (
            
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView>
                    <View style={{flexDirection:'row',marginTop:10,paddingVertical:'5%',backgroundColor:'white'}}>
                        <View style={{top:5,paddingLeft:'2%'}}>
                            <Image style={{width:35,height:35,resizeMode:'contain'}}source={require('../../../assets/target.png')}/>
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:14,color:'grey',fontWeight:'500'}}>Merchant Location</Text>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Jl. Jatinangor Sumedang No.179</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:'2%',flexDirection:'row',marginTop:15}}>
                        <View>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Estimating Time</Text>
                            <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>You will get your order in </Text>
                        </View>
                        <View style={{marginLeft:'85%',position:'absolute',alignSelf:'flex-end'}}>    
                            <Text style={{fontSize:20,color:'Blue',fontWeight:'bold'}}>20:00 </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,paddingVertical:'5%',paddingHorizontal:'2%',backgroundColor:'white',justifyContent:'space-between'}}>
                            <View>
                                <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Order item(s)</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16,color:'#24972B',paddingRight:'2%',fontWeight:'bold'}} onPress={()=>navigate('MerchantPicker')}>+ Add More</Text>
                            </View>
                        </View>
                    <View style={{}}>
                        {this.props.cartItems.length > 0 ?
                        
                        <ScrollView>
                            <FlatList
                            data={this.props.cartItems}
                            renderItem={({item}) =>   <Order order={this.props.count} plus= {this.props.counterIncrement} tittle={item.nama_item} price={item.harga} img={require('../../../assets/pizza1.jpg')}/>
                            } 
                            keyExtractor={item => item.id}
                            />
                             </ScrollView>
                            :
                            <EmptyCart />
                        }
                    </View>
                </ScrollView>
                <View style={styles.container}>
                    <View style={styles.fab}>
                        <TouchableOpacity onPress={()=>navigate('OrdersStackScreen',{screen:'Orders'})}>
                        <View style={styles.containt}>
                            <View style={{paddingLeft:'30%'}}>
                                <Text style={{fontSize:18,color:'white',textAlign:'center'}}> 100.000</Text>
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

console.log(this.cartItems);
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