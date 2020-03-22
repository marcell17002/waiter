import React, {Component} from 'react';
import {Text,TextInput, View, Image, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../../../assets/banner_home_1.jpg'),
            require('../../../assets/kopi.jpg'),
            require('../../../assets/banner_home_2.jpg'),
            require('../../../assets/banner_home_3.jpg'),
          ]
        };
      }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ScrollView>
                <View style={{marginHorizontal:17,flexDirection:'row'}}>
                    <View style={{position:'relative',flex:1,marginTop:40}}>
                        <TextInput placeholder='What do you want to eat ?' style={{fontSize:13,paddingLeft:50,width:'100%',paddingRight:20,borderWidth:1,borderRadius:25, borderColor:'grey' }} />
                        <Image style={{position:'absolute',width:30,height:20,top:5,left:7}} source={require('../../../assets/search.png')}/>
                    </View>
                    <View style={{width:35,marginTop:36,marginLeft:'5%',alignItems:'center'}}>
                        <Image style={{width:35,height:35}}source={require('../../../assets/love.png')} />
                    </View>
                </View>
                <View style={{flex:1,marginTop:17,position:'relative'}}>
                    <SliderBox images={this.state.images} autoplay='true' onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}/>

                    <View style={{backgroundColor:'#ededed',position:'absolute',marginTop:'45%',width:'80%',marginHorizontal:'10%',borderRadius:25}}>
                        <View style={{position:'relative',marginTop:'15%',marginLeft:'10%'}}>
                            <Image style={{width:5,height:30,marginTop:4,position:'absolute',marginLeft:'12%'}} source={require('../../../assets/pin.png')} />
                            <Text style={{fontSize:18,textAlign:'center',width:'100%',paddingTop:6,borderColor:'black',textAlign:'center' }}>Saung Baraya Caringin</Text>
                        </View>
                        <View style={{justifyContent:'space-between',marginTop:30}}>
                            <Text style={{fontSize:13,paddingLeft:50,width:'100%',paddingRight:20, borderColor:'black' }}>MENU</Text>
                            <Text style={{fontSize:13,paddingLeft:50,width:'100%',paddingRight:20, borderColor:'black' }}>MENU</Text>
                            <Text style={{fontSize:13,paddingLeft:50,width:'100%',paddingRight:20, borderColor:'black' }}>MENU</Text>
                            <Text style={{fontSize:13,paddingLeft:50,width:'100%',paddingRight:20, borderColor:'black' }}>MENU</Text>
                        </View>
                        <View style={{ flexDirection: 'row',marginHorizontal:40,marginTop:30,marginBottom:'7%', justifyContent: 'space-between'}}>
                             <View style={{backgroundColor:'#E3292A',borderRadius:25}}>
                                 <Text style={{fontSize:15,paddingLeft:20,paddingTop:'5%',paddingBottom:'5%',paddingRight:20, color:'white' }}>Ganti Menu </Text>
                            </View>  
                            <View style={{backgroundColor:'#E3292A',borderRadius:25}}>
                                 <Text style={{fontSize:15,paddingLeft:20,paddingRight:20,paddingTop:'5%',paddingBottom:'5%', color:'white' }}>One More</Text>
                            </View>   
                        </View>
                    </View>

                    <View style={{position:'absolute',backgroundColor:'white',marginTop:'40%',borderRadius:25,height:60,width:190,marginHorizontal:'30%'}}>
                        <Text style={{fontSize:18,top:10,textAlign:'center',width:'100%', borderColor:'black' }}>Terakhir Dibeli</Text>
                    </View>
                </View>
                <View style={{flex:1,marginTop:'60%'}}>
                    <View style={{ flexDirection: 'row',marginHorizontal:20,marginTop:20,marginBottom:'10%', justifyContent: 'space-between'}}>
                        <Text style={{fontSize:18,color:'Black',marginTop:7 }}>Tempat Makan Rekomendasi </Text>
                        <View style={{backgroundColor:'#E3292A',width:'20%',borderRadius:25}}>
                            <Text style={{fontSize:15,top:'25%',textAlign:'center',paddingLeft:10,paddingRight:10, color:'white' }}>See All</Text>
                        </View>   
                    </View>
                </View>
                </ScrollView>
                <View style={{height:40,backgroundColor:'#ededed'}}>
                    {/* MENU BOTTOM BAR */}
                </View>
            </View>
        )
    }
}
export default Landing;