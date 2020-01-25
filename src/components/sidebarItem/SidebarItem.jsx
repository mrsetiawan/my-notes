import React, { Component } from 'react'
import { removeHTMLTags } from '../../helpers'
import './style.css'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap'

export class SidebarItem extends Component {
  render() {
    const { _note, _index } = this.props
    return (
      <Col className='listSidebar'>
        <Row>
          <Col md={9}>
            <p className="mb-0"><b>{_note.title}</b></p>
            <small>{removeHTMLTags(_note.content.substring(0,30)) + '...'}</small>
          </Col>
          <Col md={3}>
            <Button variant="danger" size="xs">
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
