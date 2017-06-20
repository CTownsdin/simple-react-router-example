// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

// A simple data API mockup :)

const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI;

// Example use, in Chrome JS console:

// Load in the const PlayerAPI

// PlayerAPI.all()
// (6) [Object, Object, Object, Object, Object, Object]0: Object1: Object2: Object3: Object4: Object5: Objectlength: 6__proto__: Array(0)

// PlayerAPI.get(5)
// Object {number: 5, name: "William Winger", position: "M"}
