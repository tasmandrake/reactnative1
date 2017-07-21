import React from 'react'
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';

export default class Amount extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Choose an amount</Text>
        <Text style={styles.greeting}>$10</Text>
        <Text style={styles.greeting}>$100</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Donate now!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d8ccb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 30,
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});