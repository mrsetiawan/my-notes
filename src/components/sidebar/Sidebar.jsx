import React, { Component } from 'react'
import SidebarItem from '../sidebarItem/SidebarItem'
import {
  Col
} from 'react-bootstrap'

export class Sidebar extends Component {
  render() {
    return (
      <Col md={4}>
        <p>Sidebar</p>
        <SidebarItem />
      </Col>
    )
  }
}

export default Sidebar
