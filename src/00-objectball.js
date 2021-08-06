//const { mark } = require("regenerator-runtime");
//const { values } = require("core-js/core/array");


function gameObject(){
  return {
    home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 14
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee" : {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      } 
    },

    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise, Purple"],
        players: {
            "Jeff Adrien": {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2
            },
            "Bismak Biyombo": {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10
            },
            "DeSagna Diop": {
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5
            },
            "Ben Gordon": {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0
            },
            "Brendan Haywood": {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12
            }
          }
        }
  }
};

debugger

function numPointsScored(name){
  let scored = 0;
  const awayPlayers = gameObject().away.players;
  const homePlayers = gameObject().home.players;
  //debugger
  for(let key in awayPlayers){
    if(key === name){
      scored = awayPlayers[name].points;
    }
  }   
  for(let key in homePlayers){
    if(key === name){
      scored = homePlayers[name].points;
    } 
  }
  return scored;
} //away.players["Brendan Haywood"].points
//numPointsScored("Brendan Haywood")
//debugger


function shoeSize(name){ //returns the shoe size for that player
  let size = 0;
  const awayPlayers = gameObject().away.players;
  const homePlayers = gameObject().home.players;
  //debugger
  for(let key in awayPlayers){
    if(key === name){
      size = awayPlayers[name].shoe;
    }
  }   
  for(let key in homePlayers){
    if(key === name){
      size = homePlayers[name].shoe;
    } 
  }
    //size = gameObject[home][player][name][shoe];
    return size;
}// away.players["Ben Gordon"].shoe
//shoeSize("Ben Gordon");
//debugger

function teamColors(tName){//returns an array of that teams colors
  let colors = [];
    if(gameObject().away.teamName === tName){
      colors = gameObject().away.colors.slice();     
    }else if(gameObject().home.teamName === tName){
      colors = gameObject().home.colors.slice(); 
    }
  return colors; 
}//away.colors
teamColors("Charlotte Hornets");

function teamNames(){//return an array of the team names
  let tName = [];
  tName.push(gameObject().away.teamName, gameObject().home.teamName)
  return tName;
}
teamNames();

function playerNumbers(tName){//returns an array of the jersey number's for that team
    let awayNumbers = [], homeNumbers = [];
    const away = gameObject().away.teamName, home = gameObject().home.teamName;
    if(away == "Charlotte Hornets"){
      for(let key in gameObject().away.players){
        awayNumbers.push(gameObject().away.players[key].number);
      }
      return awayNumbers;
    } else if(home == "Brooklyn Nets"){
      for(let key in gameObject().home.players){
        homeNumbers.push(gameObject().home.players[key].number);    
      }
      return homeNumbers;
    } 
}//away.teamName, away.players
playerNumbers("Charlotte Hornets");

function playerStats(name){//returns a object of that player's stats.
  let stats = { };
  const awayPlayers = gameObject().away.players;
  const homePlayers = gameObject().home.players;
  //debugger
  for(let key in awayPlayers){
    if(key === name){
      stats = awayPlayers[name];
    }
  }   
  for(let key in homePlayers){
    if(key === name){
      stats = homePlayers[name];
    } 
  }
  return stats;
}//away.players["Ben Gordon"]
playerStats("Ben Gordon");


function bigShoeRebounds(){//return the number of rebounds associated with the player that has the largest shoe size
  let largestShoe = 0, shoeOwner = ' ', rb = 0;
  const awayPlayers = gameObject().away.players, homePlayers = gameObject().home.players; 
  for(let key in awayPlayers){
    if(shoeSize(key) > largestShoe){
      largestShoe = shoeSize(key);
      shoeOwner = key;
      rb = awayPlayers[shoeOwner].rebounds
      //console.log(`${key} has the largest shoe size with: ${largestShoe}, and the most rebounds ${rb}`)
    }
  }
  for(let key in homePlayers){
    if(shoeSize(key) > largestShoe){
      largestShoe = shoeSize(key);
      shoeOwner = key;
      rb = homePlayers[shoeOwner].rebounds
      //console.log(`${key} has the largest shoe size with: ${largestShoe}, and the most rebounds ${rb}`)
    }
  }
  //console.log(homePlayers[shoeOwner].rebounds);
  return rb; //shoeOwner + " has he largest shoe size at " + largestShoe;
}
bigShoeRebounds();

function mostPointsScored(){//who scored the most?
  let points = 0, shooter = ' '; 
  const awayPlayers = gameObject().away.players, homePlayers = gameObject().home.players; 
  for(let key in awayPlayers){
    //debugger;
    if(numPointsScored(key) > points){
      points = numPointsScored(key);
      shooter = key;
    }
  }
  for(let key in homePlayers){
    if(numPointsScored(key) > points){
      points = numPointsScored(key);
      shooter = key;
    }
  }//call funtion numPointsScored and compare
  return points;
}
mostPointsScored()

function winningTeam(){//which team scored the most?
  let aPoints = 0, hPoints = 0; 
  const awayPlayers = gameObject().away.players, homePlayers = gameObject().home.players; 
  for(let key in awayPlayers){
   
    aPoints += numPointsScored(key);
  }
  for(let key in homePlayers){
    hPoints += numPointsScored(key);
  }
    
  if(aPoints > hPoints){
    
    return gameObject().away.teamName;
  }else 
  //debugger
    return gameObject().home.teamName
  //call function numPoints Scored, add for the team, compare the two
}
winningTeam()

function playerWithLongestName(){//which player had the longest name
  let nameSize = 0, player = ' ';
  const awayPlayers = gameObject().away.players, homePlayers = gameObject().home.players; 
  for(let key in awayPlayers){
    if(key.length > nameSize){
      nameSize = key.length;
      player = key;  
    }
  }
  for(let key in homePlayers){
    if(key.length > nameSize){
    nameSize = key.length;  
    player = key;
    
    }
  }
  //const alan = gameObject().home.players["Alan Anderson"]
  //nameSize = gameObject().home.players.length;
  //debugger
  return player;
  
}
playerWithLongestName();

function doesLongNameStealATon(){
  let steal = 0, thief = ' ';
  const awayPlayers = gameObject().away.players;
  const homePlayers = gameObject().home.players;
  debugger
  for(let key in awayPlayers){
    if(awayPlayers[key].steals > steal){
      steal = awayPlayers[key].steals;
      thief = key;
    }
  }  
  debugger 
  for(let key in homePlayers){
    if(homePlayers[key].steals  > steal){
      steal = homePlayers[key].steals;
      thief = key;
    }
  }
  if(playerWithLongestName() == thief){
    return "Yes";
  }
  //return `${thief} had the most steals at ${steal}`;
}

debugger
doesLongNameStealATon()