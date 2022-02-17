import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Camera } from "expo-camera";
import * as ImageManipulator from "expo-image-manipulator";

export function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

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
      <Camera style={styles.cameraContainer} ref={cameraRef} />
      <Button
        onPress={async () => {
            const pictureMetadata = await cameraRef.current.takePictureAsync();
            console.log("pictureMetadata", pictureMetadata);
            console.log(
              await ImageManipulator.manipulateAsync(pictureMetadata.uri, [
                { resize: { width: 800 } },
              ]))
        }}
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
