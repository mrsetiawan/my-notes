import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import { Col } from 'react-bootstrap'
import debounce from '../../helpers'

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

  componentDidUpdate(){
    if(this.props.selectedNote.id != this.state.id){
      this.setState({
        content:this.props.selectedNote.content,
        title:this.props.selectedNote.title,
        id:this.props.selectedNote.id
      })
    }
  }

  updateBody = async (content) => {
    await this.setState({ content:content })
    this.update()
  }

  update = debounce(() => {
    this.props.updateNote(
      this.state.id,
      {content:this.state.content, title:this.state.title}
    )
  }, 1500)

  render() {
    const { content, title, id} = this.state

    return (
      <Col md={10} style={{paddingLeft: '0 !important'}}>
        <ReactQuill
          value={content}
          onChange={this.updateBody}
        />
      </Col>
    )
  }
}

export default Editor
