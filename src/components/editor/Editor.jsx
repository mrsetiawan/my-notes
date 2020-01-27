import React, { Component } from 'react'
import ReactQuill from 'react-quill';
import {
  Col,
  Row
} from 'react-bootstrap'

export class Editor extends Component {
  render() {
    const { selectedNote } = this.props
    console.log(`editor ${selectedNote.title}`)
    return (
      <Col md={10}>
        <ReactQuill
        />
      </Col>
    )
  }
}

export default Editor
