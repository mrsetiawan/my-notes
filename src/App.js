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

        this.setState({
          myNotes: note,
          isLoading: false
        })

      })
  }

  newNote = title => {
    
    const model = {...newNoteModel}

    const newNote = {
      model,title:title,
      model,content:''
    }

    console.log(newNote)
  }

  selectedNoteParent = (n,i) => this.setState({ selectedNote:n,selectedNoteIndex:i})
    

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
          />
          {selectedNote ? 
            <Editor 
              selectedNote={selectedNote} 
            />
          : null}
          
        </Row>}
      </div>
    )
  }
}

export default App;
