import React, { Component } from 'react';
import fbobj from './firebase/';
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
    getlist.once('value').then((snapshot) => {
      const firebaseSnapshot = snapshot.val();
      const snapshotArray = Object.keys(firebaseSnapshot).map((value) => {
        return firebaseSnapshot[value];
      });
      this.setState({
        getlistArray: snapshotArray,
      });
    });
  }
  getlist() {
    return this.state.getlistArray.map((value, index) => {
      return (
        <li key={`${index}-${value.id}`}>
          <div className="img">
            画像
          </div>
          <div className="status">
            <h2>名前:***</h2>
            <p><span>図鑑No:</span>{value.id}</p>
            <p><span>CP:</span>{value.cp}</p>
            <p><span>時間:</span>{value.time}</p>
            <p><span>親:</span>{value.user}</p>
          </div> 
        </li>
      );
    })
  }
  getlistArea() {
    if (this.state.getlistArray.length === 0) {
      return <p>読み込み中......</p>
    } else {
      return <ul>{this.getlist()}</ul>;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.getlistArray.length}匹</h1>
        {this.getlistArea()}
      </div>
    );
  }
}

export default App;
