import React, { Component } from 'react'
import SidebarItem from '../sidebarItem/SidebarItem'
import {
  Col,
  Button,
  Form,
} from 'react-bootstrap'
import './style.css'

export class Sidebar extends Component {

  state = {
    addNote: null,
    title: null
  }

  selectedNoteChild1 = (n,i) => this.props.selectedNoteParent(n,i)

  newNote = () => {
    this.setState({
      addNote: !this.state.addNote,
      title: null
    })
  }

  updateTitle = txt => this.setState({title:txt})

  submitNote = () => {
    this.props.newNote(this.state.title)
    this.setState({title:null,addNote:null})
  }

  deleteNote = note => this.props.deleteNote(note)

  render() {
    const { addNote } = this.state
    const { myNotes } = this.props
    return (
      <Col md={2} className='sidebarContainer'>
        <Button variant="info" block onClick={this.newNote}>{addNote ? "Cancel" : "New Note"}</Button>
        {addNote ?
          <>
            <Form.Control 
              type="text" 
              placeholder="Input note.." 
              required="on"
              onChange={(txt)=> this.updateTitle(txt.target.value)}
            />
            <Button variant="success" block onClick={this.submitNote}>Submit</Button>
          </>
          : null}

          <br />
          {myNotes.map((_note, _index) => {
            return (
              <div key={_index}>
                <SidebarItem 
                _note={_note}
                _index={_index}
                selectedNoteChild1={this.selectedNoteChild1}
                deleteNote={this.deleteNote}
              />
              </div>
            )
          })}
      </Col>
    )
  }
}

export default Sidebar
