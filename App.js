import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class App extends Component {

placeSubmitHandler = () => {
    console.log("Submitted");	
}

render() {
   return (
    <View style={ styles.container }>
       <View style = { styles.inputContainer }>
        <TextInput
           placeholder = "Seach Places"
           style = { styles.placeInput }
        ></TextInput>
        <Button title = 'Add' 
            style = { styles.placeButton }
            onPress = { this.placeSubmitHandler }
        />
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});