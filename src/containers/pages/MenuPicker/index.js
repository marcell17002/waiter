import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView, Button, Alert} from 'react-native';
import Order from '../../../components/molecules/Order';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { counterIncrement , counterDecrement} from '../../../config/redux/actions/counterActions';

class MenuPicker  extends Component{
    constructor(props) {
        super(props);
        this.state ={
            count: 0
        };
      }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView>
                    <View style={{flexDirection:'row',marginTop:20,paddingVertical:'5%',backgroundColor:'white'}}>
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
                        <View style={{marginLeft:'45%',alignSelf:'flex-end'}}>    
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
                    <View style={{marginBottom:'40%'}}>
                        <Order order={this.props.count} plus= {this.props.counterIncrement} minus={this.props.counterDecrement} tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                        <Order  order={this.props.count} plus= {this.props.counterIncrement} minus={this.props.counterDecrement} tittle='Pizza Pepperoni' price='40000' img={require('../../../assets/pizza1.jpg')}/>
                    </View>
                </ScrollView>
                <View style={styles.container}>
                    <View style={styles.fab}>
                        <TouchableOpacity onPress={()=> navigate('Orders')}>
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
function mapStateToProps(state){
    return{
        count: state
    }
}

export default connect(mapStateToProps,{counterIncrement, counterDecrement})(MenuPicker);

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
    },
  });