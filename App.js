import * as React from 'react';
import { Text,TextInput,TouchableOpacity, View,Button, Alert, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(props) {
 
    super(props)
 
    this.state = {
 
      TextInputValueHolder: ''
 
    }
 
  }
 
 GetValueFunction = () =>{
 
 const { TextInputValueHolder }  = this.state ;
 
    var today = new Date();
    var birthDate = new Date(TextInputValueHolder); 
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }

      
    Alert.alert("Your Age is: "+age_now)
 
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "handleDate"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {TextInputValueHolder => this.setState({TextInputValueHolder})}/>

         <Button title="Calculate Age" 
        onPress={this.GetValueFunction}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
});
