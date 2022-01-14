import * as React from "react"
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Button,Image} from "react-native"
import * as Speech from "expo-speech"
import {Header} from "react-native-elements"

export default class App extends React.Component{

  constructor(){

   super()

   this.state = {

     name: ""
   }

  }

  speak = () =>{

    var thingToSay = this.state.name
    this.state.name = ""
    ? alert("Please Enter A Word")
    : Speech.speak(thingToSay)
  }

  render(){
    return(

      <View>
      <TextInput style = {styles.inputBox}
        onChangeText={(text) =>{
          this.setState({name: text})
        }}

        value = {this.state.name}

      />
      
      <TouchableOpacity style = {styles.submit} onPress = {this.speak}><Text style = {styles.buttontext}>Submit</Text></TouchableOpacity>
      
      
      </View>

    )
  }


}

const styles = StyleSheet.create({
inputBox: {
marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
},

submit: {

  padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 20,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
},

buttontext:{
  color: 'black',

    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',

}


})

