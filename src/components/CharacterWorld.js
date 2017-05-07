import React from 'react';
import {connect} from 'react-redux';

const isKnown = text => text && text !== 'unknown';
/*
 "rotation_period": "24",
 "orbital_period": "4818",
 */
const CharacterWorld = ({world}) => (
  <div>
    <h2>World</h2>
    {isKnown(world.name) && <p>Name: {world.name}</p>}
    {isKnown(world.rotation_period) && <p>Rotation Period: {world.rotation_period}</p>}
    {isKnown(world.orbital_period) && <p>Orbital Period: {world.orbital_period}</p>}
  </div>
);

const mapStateToProps = ({character: {world}}) => ({world});
export default connect(mapStateToProps)(CharacterWorld);