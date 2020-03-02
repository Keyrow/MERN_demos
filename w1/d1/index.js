class Counter {
  constructor(props, parentNode) {
    this.count = 0;

    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.innerText = props.heading;
    container.appendChild(heading);

    const paragraph = document.createElement("p");
    this.updateParagraph(paragraph);
    container.appendChild(paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    btn.addEventListener("click", event => {
      this.count++;

      this.updateParagraph(paragraph);

      console.log(this.count);
    });
    container.appendChild(btn);

    parentNode.appendChild(container);
  }
  updateParagraph(pTag) {
    pTag.innerText = `The button has been clicked ${this.count} times.`;
  }
}

const Player = (props, parentNode) => {
  const container = document.createElement("div");

  const rankingHeading = document.createElement("h2");
  rankingHeading.innerText = `Rank: ${props.rank}`;
  container.appendChild(rankingHeading);

  const fullNameHeading = document.createElement("h3");
  fullNameHeading.innerText = `Name: ${props.player.fullName()}`;
  container.appendChild(fullNameHeading);

  const scoreHeading = document.createElement("h4");
  scoreHeading.innerText = `Score: ${props.player.score}`;
  container.appendChild(scoreHeading);

  container.appendChild(document.createElement("hr"));
  parentNode.appendChild(container);
};

const Scoreboard = (props, parentNode) => {
  const container = document.createElement("div");

  for (let i = 0; i < props.players.length; ++i) {
    Player(
      {
        rank: i + 1,
        player: props.players[i]
      },
      container
    );
  }

  parentNode.appendChild(container);
};

const counter1 = new Counter(
  {
    heading: "My First Counter.",
    buttonText: "Click Me"
  },
  document.body
);

const counter2 = new Counter(
  {
    heading: "My Second Counter.",
    buttonText: "I Also Would Like To Be Clicked"
  },
  document.getElementById("right")
);

const players = [
  {
    firstName: "Gaku",
    lastName: "Sugoi",
    score: 999,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  {
    firstName: "Alex",
    lastName: "K",
    score: 997,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  {
    firstName: "Chris",
    lastName: "G",
    score: 888,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
];

const players2 = [
  {
    firstName: "Gaku2",
    lastName: "Sugoi",
    score: 999,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  {
    firstName: "Alex2",
    lastName: "K",
    score: 997,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  {
    firstName: "Chris2",
    lastName: "G",
    score: 888,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
];

Scoreboard(
  {
    players: players
  },
  document.body
);

Scoreboard(
  {
    players: players2
  },
  document.body
);
