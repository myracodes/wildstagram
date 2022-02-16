import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Camera } from "expo-camera";

export function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <Camera style={styles.cameraContainer} />
      <Button
        onPress={() => console.log('picture button pressed :D')}
        title="Take a picture"
        color="pink"
        accessibilityLabel="Take a picture"
      />
    </>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
});
