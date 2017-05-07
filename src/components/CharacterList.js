import React from 'react';
import {connect} from 'react-redux';
import {setCurrentCharacter, getCharacterProfile} from '../reducers/character/actions';

const CharacterList = ({characters, setCharacter}) => {
  return (
    <div id="character-list">
      <h2>Characters</h2>
      <ul>
        {characters.map((c, i) =>
          <li key={c.name} onClick={setCharacter(i + 1)}>
            {c.name}
          </li>
        )}
      </ul>
    </div>
  )
};

const mapStateToProps = ({characters}) => ({characters});
const mapDispatchToProps = dispatch => ({
  setCharacter(id)  {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);