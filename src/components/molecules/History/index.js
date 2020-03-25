import React from "react";
import { View, Image, Text } from "react-native";
const History = props => {
  return (
    <View style={{ flexDirection: "row", marginTop: "5%" }}>
        <View style={{ width: 100, height: 100 }}>
            <Image style={{width: undefined,height: undefined,resizeMode: "contain",flex: 1,borderRadius: 100 / 2 }} source={props.img}/>
        </View>
        <View style={{ marginLeft: "3%" }}>
            <Text style={{ fontSize: 17, color: "#E3292A", fontWeight: "bold" }}>{props.tittle} </Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 15, color: "black" }}>Status </Text>
                <Text style={{ fontSize: 15, color: "#114C98" }}>{props.status}</Text>
            </View>
            <Text style={{ fontSize: 14, color: "grey" }}>{props.date}</Text>
        </View>
    </View>
  );
};
export default History;
