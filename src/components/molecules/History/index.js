import React ,{useState} from "react";
import { View, Image,Switch, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

const History = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <TouchableOpacity onPress={props.OnPress}>
        <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <View style={{ width: 100, height: 100 }}>
                <Image style={{width: undefined,height: undefined,resizeMode: "contain",flex: 1,borderRadius: 100 / 2 }} source={{uri: props.img}}/>
            </View>
            <View style={{ marginLeft: "3%" }}>
                <Text style={{ fontSize: 17, color: "#E3292A", fontWeight: "bold" }}>{props.tittle} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 15, color: "black" }}>Status </Text>
                    <Text style={{ fontSize: 15, color: "#114C98" }}>{props.status}</Text>
                </View>
                <Text style={{ fontSize: 14, color: "grey" }}>{props.date}</Text>
            </View>
            <View style={{marginLeft:'80%',marginTop:'2%',position:'absolute'}}>    
            <CountDown
              until={60*10}
              onFinish={() => alert('finished')}
              onPress={() => alert('hello')}
              size={15}
              digitStyle={{backgroundColor: '#ffff'}}
              timeToShow={['M', 'S']}
              timeLabels={{m: null, s: null}}
            />
            </View>
        </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginBottom:'5%'}}>
          <View>
            <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>Do you have arrived ? </Text>
            <Text style={{color:'grey',fontSize:10,fontWeight:'500'}}>( turn on your toogle button when you have arrived )</Text>
          </View>
          <View style={{marginLeft:'18%',position:'absolute',marginLeft:'70%'}}>
            <Switch trackColor={{ false: "#767577", true: "#31B059" }} thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
          </View>
        </View>
    </View>
  );
};
export default History;
