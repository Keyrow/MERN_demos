import Counter from "./components/Counter.js";
import Scoreboard from "./components/Scoreboard.js";
import Player from "./components/Player.js";
import PlayerModel from "./models/PlayerModel.js";

// new Counter(
//   {
//     headingText: "The Great Counter",
//     buttonText: "Increment",
//   },
//   document.body
// );

new Counter(
  {
    headingText: "Very Nice",
    buttonText: "How Many Times Faris Says Very Nice",
  },
  document.body
);

// imagine this came from database
// const neil = new PlayerModel("Neil", "Mos", 9001);
// const timmy = new PlayerModel("Timmy", "C", -1);

// // and now we instantiate a component to add it to the page
// Player(
//   {
//     rankText: 1,
//     player: neil,
//   },
//   document.body
// );

// Player(
//   {
//     rankText: 9001,
//     player: timmy,
//   },
//   document.body
// );

// imagine: list of all players from database, orderBy score desc (highest score first)
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mos", 9001),
  new PlayerModel("Patrick", "Hebert", 5000),
  new PlayerModel("Timmy", "C", -1),
];

// for (let i = 0; i < rankedPlayers.length; ++i) {
//   Player(
//     {
//       player: rankedPlayers[i],
//       rankText: i + 1,
//     },
//     document.body
//   );
// }

Scoreboard(
  {
    headingText: "Scoreboard",
    rankedPlayers: rankedPlayersFromDb,
  },
  document.body
);

const rankedPlayersFromDb2 = [
  new PlayerModel("Kevin", "U", 5000),
  new PlayerModel("Mark", "T", 5000),
  new PlayerModel("Levi", "B", 4400),
];

Scoreboard(
  {
    headingText: "Scoreboard2",
    rankedPlayers: rankedPlayersFromDb2,
  },
  document.body
);
