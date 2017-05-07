import React, { Component } from 'react';
import CharacterList from './CharacterList';
import CharacterWorld from './CharacterWorld';
import CharacterProfile from './CharacterProfile';

class App extends Component {
  render() {
    return (
      <div >
       <h1>Star Wars</h1>
        <CharacterList />
        <CharacterProfile />
        <CharacterWorld />
      </div>
    );
  }
}

export default App;
