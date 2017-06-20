import React from 'react';
// an API that returns a player object
import PlayerAPI from './PlayerAPI'

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>Name: {player.name}</h1> 
      <h1>Number: #{player.number}</h1>
      <h2>Postion: {player.position}</h2>
    </div>
  )
}

export default Player;
