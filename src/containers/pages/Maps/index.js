import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Callout } from 'react-native-maps';

export default class Maps extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <MapView style={styles.mapStyle}
          initialRegion={{
              latitude: -6.886440,
              longitude: 107.598450,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: -6.886440,
            longitude: 107.598450}}
            title={"Pujasera Bandung"}
            description={"Tempat Jajanan Murah dan Enak "}
         />
      </MapView>
 </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
  });