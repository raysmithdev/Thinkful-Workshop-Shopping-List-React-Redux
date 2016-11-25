import React, { Component } from 'react'
import './App.css'
import AddItem from './containers/AddItem'
import ItemList from './containers/ItemList'
import ItemListInfo from './containers/ItemListInfo'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col md={12}>
              <ItemListInfo />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <AddItem />
            </Col>
            <Col md={6}>
              <ItemList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App
