
import React from 'react';
import Note from './app/component/Note'

import { ScrollView, StyleSheet, Text, TextInput, View,SafeAreaView, TouchableOpacity } from 'react-native';
import Main from './app/component/Main';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      noteArray:[],
      noteText:'',
    }
  }
  
  render() {
    let notes=this.state.noteArray.map((val,key)=>{
      return<Note key={key} keyval={key} val={val}
      deleteMethod={()=>this.deleteNote(key)}/>
    })
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>TO DO</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
      {notes}
        </ScrollView>

        <View style={styles.footer}>
         
         <TextInput value={this.state.noteText} onChangeText={(noteText)=>this.setState({noteText})} style={styles.textInput} placeholder="Type here ..." >
          </TextInput>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
      
        </View>
        
      </SafeAreaView>
      

    );
  }
  deleteNote (key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray})
  }
  addNote(){
   if (this.state.noteText ){
     var d=new Date();
     this.state.noteArray.push({
       'date':d.getFullYear()+'/'
       +(d.getMonth()+1)+'/'+d.getDate(),
       'note':this.state.noteText
     });
     this.setState({noteArray: this.state.noteArray})
     this.setState({noteText: ''});
   }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
    
  }
  ,
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
    fontWeight:'bold',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    // backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    marginBottom:1,
    height:80

  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#E91E63",
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:50,
    // elevation: B,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  }

});
