import React, { Component } from 'react';
import fbobj from './firebase/';
import { Container, Header, Icon, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const getlist = fbobj.db.ref('getlist');

class App extends Component {
  constructor() {
    super();
    this.state = {
      getlistArray: [],
    };
  }
  componentDidMount() {
    getlist.once('value').then((snapshot) => this.updateList(snapshot));
  }
  updateList(snapshot) {
    const firebaseSnapshot = snapshot.val();
    const snapshotArray = Object.keys(firebaseSnapshot).map((value) => {
      return firebaseSnapshot[value];
    });
    this.setState({
      getlistArray: snapshotArray.reverse(),
    });
  }
  getlist() {
    return this.state.getlistArray.map((value, index) => {
      return (
        <Card key={`${index}-${value.id}`}>
          <Card.Content>
            <Image floated='right' size='mini' src='http://www.pokestadium.com/sprites/xy/ditto.gif' />
            <Card.Header>メタモン</Card.Header>
            <Card.Meta>No: {value.id}</Card.Meta>
            <Card.Description><Icon name='time' color="grey" /> {value.time}</Card.Description>
            <Card.Description><Icon name='user' color="grey" /> {value.user}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Card.Description>CP: {value.cp}</Card.Description>
          </Card.Content>
        </Card>
      );
    })
  }
  getlistArea() {
    if (this.state.getlistArray.length === 0) {
      return <div style={{ textAlign: 'center' }}><Icon name='spinner' color="grey" size="large" loading /></div>;
    } else {
      return <Card.Group style={{ justifyContent: 'center' }}>{this.getlist()}</Card.Group>;
    }
  }
  render() {
    return (
      <Container style={{ margin: 20 }}>
        <Header as='h2' icon textAlign='center'>
          <Icon name='gamepad' color="grey" />
          <Header.Content>togoshi-web</Header.Content>
        </Header>
        <Header as='h3' textAlign='center'>
          Total: {this.state.getlistArray.length}
        </Header>
        {this.getlistArea()}
      </Container>
    );
  }
}

export default App;
