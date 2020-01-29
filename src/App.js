import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Sidebar from '../src/components/sidebar/Sidebar'
import Editor from '../src/components/editor/Editor'
import 'bootstrap/dist/css/bootstrap.min.css'
import { newNoteModel } from './model/newNoteModel'
import './App.css';
const firebase = require('firebase');

class App extends Component {

  state = {
    myNotes: null,
    selectedNote:null,
    selectedNoteIndex:null,
    isLoading: true,
  }

  componentDidMount() {
    firebase.firestore()
      .collection('my-notes')
      .onSnapshot(serverUpdate => {
        const note = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data
        })

        note.sort((a,b) => a - b)
        console.log(note)

        this.setState({
          myNotes: note,
          isLoading: false
        })
    })
  }

  selectedNoteParent = (n,i) => this.setState({ selectedNote:n,selectedNoteIndex:i})

  newNote = async (title) => {
    
    const model = {...newNoteModel}

    const newObjNote = {
      model,title:title,
      model,content:''
    }

    const sentNote = await
      firebase.firestore()
      .collection('my-notes')
      .add({
        title:newObjNote.title,
        content:newObjNote.content,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      
    const newId = sentNote.id
    console.log(newId)

  }

  updateNote = (id, obj) => {

    firebase.firestore()
    .collection('my-notes')
    .doc(id)
    .update ({
      title: obj.title,
      content:obj.content,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
    
  deleteNote = async (note) => {
    const noteIdx = this.state.myNotes.indexOf(note)
    await this.setState({myNotes: this.state.myNotes.filter(_note => _note !== note)})
    
    if(this.state.selectedNoteIndex === noteIdx){
      this.setState({selectedNote:null, selectedNoteIndex:null})
    }else {
      this.state.myNotes.length > 1 ?
      this.selectedNoteParent(this.state.myNotes[this.state.selectedNoteIndex -1], this.state.selectedNoteIndex -1 ) :
      this.setState({selectedNote:null, selectedNoteIndex:null})
    }

    firebase.firestore()
    .collection('my-notes')
    .doc(note.id)
    .delete();
  }


  render() {
    const { myNotes, isLoading,selectedNote } = this.state

    return (
      <div className='app-container'>
        {isLoading ? 
        <p>loading</p> :
        <Row className='m-0'>
          <Sidebar 
            myNotes={myNotes}
            selectedNoteParent={this.selectedNoteParent} 
            newNote={this.newNote}
            deleteNote={this.deleteNote}
          />
          {selectedNote ? 
            <Editor 
              selectedNote={selectedNote} 
              updateNote={this.updateNote}
            />
          : null}
          
        </Row>}
      </div>
    )
  }
}

export default App;
