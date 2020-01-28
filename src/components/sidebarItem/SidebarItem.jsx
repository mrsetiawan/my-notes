import React, { Component } from 'react'
import { removeHTMLTags } from '../../helpers'
import './style.css'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap'

export class SidebarItem extends Component {

  selectedNoteChild2 = (n,i) => this.props.selectedNoteChild1(n,i)

  deleteNote = note => {
    if(window.confirm(`apakah note ${ null ? 'tidak ada judul' : note.title } akan dihapus?`)){
      this.props.deleteNote(note)
    }
  }

  render() {
    const { _note, _index } = this.props
    return (
      <Col className='listSidebar' key={_index}>
        <Row>
          <Col md={9} onClick={() => this.selectedNoteChild2(_note, _index)}>
            <p className="mb-0"><b>{_note.title}</b></p>
            <small>{removeHTMLTags(_note.content.substring(0,30)) + '...'}</small>
          </Col>
          <Col md={3}>
            <Button variant="danger" size="xs" onClick={() => this.deleteNote(_note)}>
              aa
            </Button>
          </Col>
          <hr />
        </Row>
      </Col>
    )
  }
}

export default SidebarItem
