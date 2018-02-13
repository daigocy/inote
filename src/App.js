import React, { Component } from 'react';
import BookList from './components/booklist'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BookList></BookList>
      </div>
    );
  }
}

export default App;
