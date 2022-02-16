import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CameraScreen from "./CameraScreen";
import FeedScreen from "./FeedScreen";
import ImagesScreen from "./ImagesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <View style={styles.container}> */}
        {/* <StatusBar style="auto" /> */}
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            unmountOnBlur: true /* Spécificité de expo-camera : pour pouvoir naviguer entre les différents onglets facilement et que la camera reste fonctionnelle, il faut rajouter l'option "unmountOnBlur" sur cet écran. */,
          }}
        />
        <Tab.Screen name="Images" component={ImagesScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        {/* </View> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
