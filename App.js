import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const[result, setResult] = useState(0);

  const CalculateBMI = () => {

    const heightFormat = height/100
    let bmi = weight/ (heightFormat*heightFormat);
          bmi = bmi.toFixed(2);
    setResult(bmi);

  }
  return (
    <View style={styles.container}>
      <Text>Please add your height in cm</Text>
      <TextInput  
        style={styles.inputStyle}
        value={height}
        onChangeText={text => setHeight(text)}
        style={styles.inputStyle}
      />
      <Text>Please add your weight in kg</Text>
      <TextInput  
        style={styles.inputStyle}
        value={weight}
        onChangeText={text => setWeight(text)}
        style={styles.inputStyle}

      />
      <Text style ={{fontSize: 30, marginVertical:20}}>{result}</Text>
      
      <TouchableOpacity  onPress={CalculateBMI}  style= {styles.TouchableOpacity}>
         <Text>Calculate BMI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:
  {
    backgroundColor: '#ffffff',
    width: '55%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical:14,
    marginTop: 6,
    fontSize:16,
    textAlign: 'center'
  },
  container: 
  {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TouchableOpacity:
  {
    backgroundColor: '#faaf00',
    width: '55%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical:14,
    marginTop: 6,
    fontSize:16,
    textAlign: 'center'

  }

});
