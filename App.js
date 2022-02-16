// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CameraScreen, FeedScreen, ImagesScreen } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Camera") {
              iconName = focused
                ? "camera"
                : "camera";
            } else if (route.name === "Images") {
              iconName = focused
              ? "image"
              : "image";
            } else if (route.name === "Feed") {
              iconName = focused
              ? "infinite"
              : "infinite";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
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
