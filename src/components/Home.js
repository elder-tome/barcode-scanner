import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  function handleClick() {  
    navigation.navigate('Camera');
  } 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick} style={styles.button}> 
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClick} style={styles.button}> 
        <Text>Scaner</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  button: {
    backgroundColor: '#2596be',
    padding: 18,
    borderRadius: 4
  }
});
