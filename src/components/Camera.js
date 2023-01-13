import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = (context) => {
    setScanned(true);
    //alert(`Bar code with type ${type} and data ${data}`);
    console.log(context)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, { top: -55 }]}
      />
      {scanned && <Button title={'Código indentificado! Escanear novamente?'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});