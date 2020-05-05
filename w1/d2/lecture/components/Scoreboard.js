import Player from "./Player.js";

const Scoreboard = (props, parentNode) => {
  const container = document.createElement("div");

  const heading = document.createElement("h2");
  heading.innerText = props.headingText;

  container.appendChild(heading);

  for (let i = 0; i < props.rankedPlayers.length; ++i) {
    Player(
      {
        player: props.rankedPlayers[i],
        rankText: i + 1,
      },
      container
    );
  }

  parentNode.appendChild(container);
};

export default Scoreboard;
