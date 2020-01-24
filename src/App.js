import React, { Component } from 'react';
import {
  Row
} from 'react-bootstrap'

import './App.css';
const firebase = require('firebase');

class App extends Component {

  state = {
    myNotes:null,
    isLoading:true
  }

  componentDidMount() {
    firebase.firestore()
    .collection('my-notes')
    .onSnapshot(serverUpdate =>{
      const note = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data
      })

      this.setState({
        myNotes:note,
        isLoading:false
      })

    })
  }

  render() {
    const { myNotes,isLoading } = this.state
    console.log(myNotes)
    return(
      <>
      {isLoading ? <p>loading</p> : 
        <Row>
          <p>tes</p>
        </Row>}
      </>
    )
  }
}

export default App;
