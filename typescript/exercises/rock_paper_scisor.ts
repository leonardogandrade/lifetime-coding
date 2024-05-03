// Rock, paper, scisor game implementation

const results: string[][] = [
  ["P", "R", "P"],
  ["P", "S", "P"],
  ["S", "P", "S"],
];

interface GameProps {
  player1: string;
  player2: string;
}
const game = ({ player1, player2 }: GameProps) => {
  for (const option of results) {
    if (
      (player1 === option[0] && player2 === option[1]) ||
      (player1 === option[1] && player2 === option[0])
    ) {
      return option[2];
    }
  }
};

const gameResult = game({ player1: "S", player2: "P" });
console.log(gameResult);
