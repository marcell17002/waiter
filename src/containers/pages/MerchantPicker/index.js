import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView, FlatList, AsyncStorage } from 'react-native';
import MenuMerchant from '../../../components/molecules/MenuMerchant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import CartReducer from '../../../config/redux/reducer/CartReducer';

class MerchantPicker  extends Component{
    constructor(props) {
      super(props);
      this.state = {
        dataSource:[],
        dataSourceToko:[],
        cart:[],
       };
     }

    gettingfirst(){
      fetch("http://pesendulu.readylearn.id/item")
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
         dataSource: responseJson.reponse
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
    }
    gettingSecond(){
      fetch("http://pesendulu.readylearn.id/toko")
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
         dataSourceToko: responseJson.reponse
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
    }
    componentDidMount(){
      this.gettingfirst();
      this.gettingSecond();
      }

    onSubtract = (item, index) => {
      const cart = [...this.state.dataSource];
      cart[index].quantity = parseInt(cart[index].quantity) - 1;
      this.setState({ cart });
    }

    onAdd = (item, index) => {
      const cart = [...this.state.dataSource];
      cart[index].quantity = parseInt(cart[index].quantity) + 1;
      this.setState({cart });
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
            <View style={{flex:1,backgroundColor:'#ffff'}}>
                <ScrollView>
                    <View style={{position:'relative'}}>
                        {this.state.dataSourceToko.map(item =>
                          <View>
                            <View>
                                <Image style={{width:'100%',height:300}} source={{uri: item.url_foto }}/>
                            </View>
                          <Text style={{marginLeft:15,marginTop:15,color:'#E3292A',fontWeight:'bold',fontSize:20}} >{item.nama_toko} </Text>
                          <Text style={{marginLeft:15,marginTop:5,color:'grey',fontWeight:'400',fontSize:15}}>{item.alamat}</Text>
                          </View>
                          )}
                        
                        
                        <View style={{marginTop:20,marginBottom:90}}>
                            <FlatList
                                data={this.state.dataSource}
                                renderItem={({item,index}) =>
                                <MenuMerchant order={parseInt(item.quantity)} plus= {()=>{this.onAdd(item,index)}} minus={()=>{this.onSubtract(item,index)}} tittle_desc={item.jenis} tittle_menu={item.nama_item} price={item.harga} img={item.url_foto}/>
                            } keyExtractor={item => item.id}
                            />
                        </View>

                    </View>
                    
                </ScrollView>
                <View style={styles.container}>
                    <View style={styles.fab}>
                        <TouchableOpacity onPress={() => navigate('MenuPicker', {cart: this.state.cart , dataSourceToko : this.state.dataSourceToko})}>
                        <View style={styles.containt}>
                            <View style={{flexDirection:'row',paddingLeft:'10%'}}>
                                <Text style={{fontSize:20,color:'white'}}>{totalQuantity} item </Text>
                                <Text style={{fontSize:20,color:'white'}}>| </Text>
                                <Text style={{fontSize:20,color:'white'}}>{totalPrice}</Text>
                            </View>
                            <View style={{width:25,height:25,marginRight:'5%'}}>
                                <Image style={{width:undefined,height:undefined,flex:1,resizeMode:'contain'}} source={require('../../../assets/ic_shop.png')}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
      addItemToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MerchantPicker);

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