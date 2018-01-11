import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Home screen </Text>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}

export default Home;