import React, { Component } from 'react';
import fbobj from './firebase/';
import { Container, Header, Icon, Card, Image, Label, Statistic, Grid } from 'semantic-ui-react';
import ReactPaginate from 'react-paginate';
import { translateData } from './data/pokemon';
import 'semantic-ui-css/semantic.min.css';
import './paginate.css';

const getlist = fbobj.db.ref('getlist');

class App extends Component {
  constructor() {
    super();
    this.state = {
      getlistArray: [],
      pageCurrent: 0,
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
    const viewItems = this.state.getlistArray.filter((element, index, array) => {
      return index >= (this.state.pageCurrent * 9) && index < (this.state.pageCurrent * 9 + 9);
    });
    return viewItems.map((value, index) => {
      const nameJa = translateData[value.id - 1].ja;
      const nameEn = translateData[value.id - 1].en.toLowerCase();
      const url = `http://www.pokestadium.com/sprites/xy/${value.isShiny?'shiny/':''}${nameEn}.gif`;
      return (
        <Card key={`${index}-${value.id}`}>
          <Card.Content>
            <Image floated='right' size='mini' src={url} />
            <Card.Header>{nameJa}</Card.Header>
            <Card.Meta>No: {value.id}</Card.Meta>
            <Card.Description><Icon name='time' color="grey" /> {value.time}</Card.Description>
            <Card.Description><Icon name='user' color="grey" /> {value.user}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Card.Description>
              <Label>CP<Label.Detail>{value.cp}</Label.Detail></Label>
              {value.isShiny ? <Label as='a' content='shiny' icon='star' /> : null}
            </Card.Description>
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
        <Header as='h2' textAlign='center'>togoshi-web</Header>
        <Grid textAlign="center" style={{ margin: '20px 0 30px' }}>
          <Statistic>
            <Statistic.Label>Total</Statistic.Label>
            <Statistic.Value>{this.state.getlistArray.length}</Statistic.Value>
          </Statistic>
        </Grid>
        <div className="paginate">
          <ReactPaginate
            onPageChange={(e) => {
              this.setState({
                pageCurrent: e.selected,
              });
            }}
            pageCount={this.state.getlistArray.length / 9}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName="ui buttons"
            activeClassName="ui button primary"
            pageClassName="ui button page"
            previousClassName="ui button"
            nextClassName="ui button"
            breakClassName="ui button break disabled"
          />
        </div>
        {this.getlistArea()}
      </Container>
    );
  }
}

export default App;