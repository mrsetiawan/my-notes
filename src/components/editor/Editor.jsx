import React, { Component } from 'react'
import ReactQuill from 'react-quill';
import {
  Col,
  Row
} from 'react-bootstrap'

export class Editor extends Component {

  state = {
    content:'',
    title:'',
    id:''
  }

  componentDidMount(){
    this.setState({
      content:this.props.selectedNote.content,
      title:this.props.selectedNote.title,
      id:this.props.selectedNote.id
    })
  }

  render() {
    const { content, title, id} = this.state
    return (
      <Col md={10}>
        <ReactQuill
          value={content}
        />
      </Col>
    )
  }
}

export default Editor
