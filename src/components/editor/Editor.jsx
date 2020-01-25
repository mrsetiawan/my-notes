import React, { Component } from 'react'
import ReactQuill from 'react-quill';
import {
  Col,
  Row
} from 'react-bootstrap'


export class Editor extends Component {
  render() {
    return (
      <Col md={10}>
        <ReactQuill
          value=''
          onChange=''
        />
      </Col>
    )
  }
}

export default Editor
